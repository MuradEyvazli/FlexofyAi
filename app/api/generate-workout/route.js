import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { muscleGroup } = await req.json();

    if (!muscleGroup) {
      return NextResponse.json({ error: 'Kas grubu belirtilmeli.' }, { status: 400 });
    }

    const response = await fetch('https://api-inference.huggingface.co/models/gpt2', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: `Generate a workout plan for ${muscleGroup} muscles.`,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Hugging Face API Hatası:', errorData);
      return NextResponse.json({ error: errorData.error || 'Hugging Face API hatası' }, { status: 500 });
    }

    const data = await response.json();

    return NextResponse.json({ workouts: data.generated_text || data[0]?.generated_text });
  } catch (error) {
    console.error('API İşleme Hatası:', error);
    return NextResponse.json({ error: 'Sunucu hatası oluştu.' }, { status: 500 });
  }
}
