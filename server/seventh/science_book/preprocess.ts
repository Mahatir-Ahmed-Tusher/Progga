import { processPDF, createVectorStore } from './rag.ts';

async function preprocess() {
    try {
        // Process the PDF to extract text
        const texts = await processPDF();
        console.log('PDF processed successfully.');

        // Create the FAISS vector store
        await createVectorStore(texts);
        console.log('FAISS index created successfully.');
    } catch (error) {
        console.error('Error during preprocessing:', error instanceof Error ? error.message : 'Unknown error');
        process.exit(1);
    }
}

preprocess();