declare module 'pdf2image' {
  export default function pdf2image(pdfPath: string, options?: any): Promise<any[]>;
}