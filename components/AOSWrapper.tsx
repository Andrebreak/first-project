// components/AOSWrapper.tsx
'use client'; // si tu utilises l'app directory

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSWrapper: React.FC = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'ease',
    });
  }, []);

  return null; // Pas besoin d'affichage
};

export default AOSWrapper;
