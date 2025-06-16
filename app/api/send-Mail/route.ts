// name, email, numero, message
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, numero, message } = body;

    if (!name || !email || !numero || !message) {
      return NextResponse.json({ message: 'Champs manquants' }, { status: 400 });
    }

    // Configurer le transporteur SMTP (ici Gmail en exemple)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,       
        pass: process.env.GMAIL_PASSWORD, 
      },
    });

    // Config mail
    const mailOptions = {
      from: `"Formulaire Site Web 'AD avocats'" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `Nouveau message de ${name}`,
      text: `
        Nom: ${name}
        Email: ${email}
        Téléphone: ${numero}
        Message: 
        ${message}
      `,
      replyTo: email,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email envoyé avec succès' }, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue';
    return NextResponse.json({ message: 'Erreur lors de l’envoi', error: errorMessage }, { status: 500 });
  }
}
