import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { name, email, numero, message } = req.body;

  if (!name || !email || !message || !numero) {
    return res.status(400).json({ message: 'Champs manquants' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_FROM,        
      pass: process.env.PASS,  
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Message de ${name}`,
    text: `
      Nom: ${name}
      Email: ${email}
      Numéro: ${numero}
      Message: ${message}`,
    };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email envoyé avec succès' });
  } catch (error: any) {
    console.error('Erreur email :', error);
    return res.status(500).json({ message: 'Erreur lors de l’envoi', error: error.message });
  }
}
