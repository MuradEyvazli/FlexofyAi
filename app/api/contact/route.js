import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Tüm alanlar doldurulmalıdır.' }), {
        status: 400,
      });
    }

    // Nodemailer transport ayarları
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // .env dosyasına ekle
        pass: process.env.EMAIL_PASS, // .env dosyasına ekle
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL, // Mesajın gideceği e-posta
      subject: `Yeni İletişim Mesajı: ${name}`,
      text: `Ad: ${name}\nE-posta: ${email}\nMesaj: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Mesaj başarıyla gönderildi!' }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Mesaj gönderilemedi, lütfen tekrar deneyin.' }), {
      status: 500,
    });
  }
}
