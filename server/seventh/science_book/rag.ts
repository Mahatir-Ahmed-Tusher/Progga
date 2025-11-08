import * as dotenv from 'dotenv';
import { convertPDF } from 'pdf2image'; // Using convertPDF as per previous update
import { createWorker } from 'tesseract.js';
import Faiss from 'faiss-node';
import { pipeline } from '@xenova/transformers';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url'; // Import to handle paths in ESM

dotenv.config();

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const bookDir = path.join(__dirname, '../../science_book'); // Adjusted for subdirectory
const pdfPath = path.join(bookDir, 'science_7.pdf');
const indexDir = path.join(bookDir, 'faiss_index');

// Ensure the faiss_index directory exists
async function ensureIndexDir() {
    try {
        await fs.mkdir(indexDir, { recursive: true });
    } catch (error) {
        console.error('Error creating index directory:', error instanceof Error ? error.message : 'Unknown error');
        throw error;
    }
}

// Process PDF and extract text
async function processPDF() {
    try {
        const options = { density: 100, format: 'png', outputDir: bookDir, outputFormat: 'page-%d' };
        const pages = await convertPDF(pdfPath, options);
        const worker = await createWorker('eng+ben');
        const texts: string[] = [];

        for (const page of pages) {
            const pagePath = path.join(bookDir, `page-${page.page}.png`);
            const { data: { text } } = await worker.recognize(pagePath);
            texts.push(text);
            // Clean up temporary image file
            await fs.unlink(pagePath);
        }

        await worker.terminate();
        return texts;
    } catch (error) {
        console.error('Error processing PDF:', error instanceof Error ? error.message : 'Unknown error');
        throw error;
    }
}

// Create FAISS index using faiss-node and @xenova/transformers
async function createVectorStore(texts: string[]) {
    try {
        await ensureIndexDir();

        // Initialize the embedding model
        const embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
        const dimension = 384; // Dimension of the embeddings from all-MiniLM-L6-v2
        const index = new Faiss.IndexFlatL2(dimension);

        // Generate embeddings for each text chunk
        const embeddings = await Promise.all(texts.map(async (text: string) => {
            const result = await embedder(text, { pooling: 'mean', normalize: true });
            return Array.from(result.data);
        }));

        // Add embeddings to FAISS index
        embeddings.forEach((embedding: number[]) => {
            index.add(embedding);
        });

        // Save the index
        const indexPath = path.join(indexDir, 'index.faiss');
        await fs.writeFile(indexPath, index.toBuffer());
        console.log(`FAISS index created successfully at ${indexPath}.`);

        // Save texts for retrieval (e.g., in a JSON file)
        const textsPath = path.join(indexDir, 'texts.json');
        await fs.writeFile(textsPath, JSON.stringify(texts));
    } catch (error) {
        console.error('Error creating vector store:', error instanceof Error ? error.message : 'Unknown error');
        throw error;
    }
}

type ChapterKey = keyof typeof chapterMap;
const chapterMap = {
    'Chapter1': { start: 0, end: 16 },
    'Chapter2': { start: 17, end: 29 },
    'Chapter3': { start: 30, end: 39 },
    'Chapter4': { start: 40, end: 49 },
    'Chapter5': { start: 50, end: 64 },
    'Chapter6': { start: 65, end: 77 },
    'Chapter7': { start: 78, end: 92 },
    'Chapter8': { start: 93, end: 103 },
    'Chapter9': { start: 104, end: 115 },
    'Chapter10': { start: 116, end: 126 },
    'Chapter11': { start: 127, end: 139 },
    'Chapter12': { start: 140, end: 153 },
    'Chapter13': { start: 154, end: 165 },
    'Chapter14': { start: 166, end: 180 }
};

async function getChatResponse(chapter: ChapterKey, message: string) {
    try {
        // Load the FAISS index
        const indexPath = path.join(indexDir, 'index.faiss');
        const indexBuffer = await fs.readFile(indexPath);
        const index = Faiss.IndexFlatL2.fromBuffer(indexBuffer);

        // Load the texts
        const textsPath = path.join(indexDir, 'texts.json');
        const textsData = await fs.readFile(textsPath, 'utf-8');
        const texts = JSON.parse(textsData);

        // Generate embedding for the query
        const embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
        const queryEmbedding = await embedder(message, { pooling: 'mean', normalize: true });
        const queryVector = Array.from(queryEmbedding.data);

        // Search for nearest neighbors
        const k = 3; // Number of nearest neighbors to retrieve
        const { distances, labels } = index.search(queryVector, k);

        // Filter texts based on chapter page range
        const { start, end } = chapterMap[chapter] || { start: 0, end: 0 };
        const filteredIndices = labels.filter((_: number, idx: number) => idx >= start && idx <= end);

        // Retrieve the corresponding texts
        const context = filteredIndices.map((idx: number) => texts[idx]).join('\n');

        // Call OpenRouter API with DeepSeek model
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'deepseek/deepseek-r1-0528:free',
                messages: [
                    { role: 'system', content: 'You are a helpful assistant for a Class 7 Science book.' },
                    { role: 'user', content: `Context: ${context}\n\nQuestion: ${message}` }
                ]
            })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error?.message || 'Failed to get response from OpenRouter');
        return data.choices[0].message.content;
    } catch (error) {
        console.error('Error getting chat response:', error instanceof Error ? error.message : 'Unknown error');
        throw error;
    }
}

export { processPDF, createVectorStore, getChatResponse };