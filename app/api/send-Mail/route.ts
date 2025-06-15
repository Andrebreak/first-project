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
        user: process.env.GMAIL_USER,       // Ton email Gmail
        pass: process.env.GMAIL_PASSWORD,   // Ton mot de passe ou mot de passe d'application
      },
    });

    // Config mail
    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,           // Destinataire (toi)
      subject: `Nouveau message de ${name}`,
      numero: numero,
      text: message,
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
