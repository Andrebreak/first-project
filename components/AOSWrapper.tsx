'use client'; 
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

  return null;
};

export default AOSWrapper;
