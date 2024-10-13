import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');

export async function POST(request: Request) {
  try {
    console.log('Received request to analyze prescription')
    const data = await request.formData();
    const image = data.get('image') as File;

    if (!image) {
      console.error('No image provided in the request')
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }

    console.log('Image received:', image.name, image.type, image.size)

    // Convert the image to a byte array
    const imageBytes = await image.arrayBuffer();

    // Initialize the model
    console.log('Initializing Gemini model...')
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Analyze the image
    console.log('Sending image to Gemini for analysis...')
    const result = await model.generateContent([
      'Analyze the uploaded prescription image, summarizing the medications, dosages, and their uses. Explain what symptoms or conditions each medication treats, and provide key safety instructions or precautions.',
      { inlineData: { data: Buffer.from(imageBytes).toString('base64'), mimeType: image.type } },
    ]);

    const response = await result.response;
    const analysis = response.text();

    console.log('Analysis completed successfully')
    return NextResponse.json({ analysis });
  } catch (error) {
    console.error('Error analyzing prescription:', error)
    return NextResponse.json({ error: `Failed to analyze prescription: ${error instanceof Error ? error.message : String(error)}` }, { status: 500 });
  }
}