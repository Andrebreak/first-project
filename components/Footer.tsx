'use client';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from "next/link"
import { Facebook, Linkedin,Mail,Phone,MapPin} from 'lucide-react';
import {Playfair_Display} from "next/font/google";
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Footer(){
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisible = () => {
        setVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

    return(
        <footer data-aos='fade' className="">
            <section  className=" bg-[#C29D59] py-10 min-sm:py-30 text-white  grid-cols-[70%] justify-center  space-y-10 md:grid-cols-[35%_35%] md:space-y-20 grid min-lg:grid-cols-[20%_20%_20%_10%] space-x-15 min-md:items-baseline min-md:justify-items-center min-md:justify-center ">
               <div data-aos='fade-left' className="flex font-light flex-col space-y-6">
                    <div className="flex cursor-pointer items-baseline gap-3 font-[400]">
                        <p className={` ${playfair.className} `}> <span  className="text-5xl tracking-[-10px]">AD</span></p>
                        <p className="text-xl ">avocats</p>
                    </div>
                    <p className="">Cabinet d&apos;avocats spécialisé en droit des affaires, contentieux et conformité réglementaire en Afrique de l&apos;Ouest.</p>
                    <div className='flex space-x-2'>
                        <MapPin size={20}/>
                        <p className='text-sm font-extralight'> 11, rue de Carency - 93000 - Bobigny</p>
                    </div>
                   
                   <div className='flex space-x-2 '>
                        <Phone size={20}/>
                        <p className='text-sm font-extralight'>+229 01 XX XX XX</p>
                   </div>
                    
                    <Link href="/contact" className=" btn btn-md text-white shadow-none border-white hover:text-gray-700 hover:bg-white btn-outline uppercase ">
                       <Mail size={18}/>
                       Contacter nous ici 
                    </Link>
               </div>

                <ul data-aos="fade-left" className=" flex flex-col space-y-4 ">
                    <header>
                        <h2 className="">Expertises</h2>
                    </header>
                    <li>
                        <Link href="/expertises" className=" font-light hover:">
                            Conseil Juridique
                        </Link>
                    </li>
                    <li>
                        <Link href="/expertises" className=" font-light hover:">
                            Droit public des affaires
                        </Link>
                    </li>
                    <li>
                        <Link href="/expertises" className=" font-light hover:">
                            Conformité Réglementaire
                        </Link>
                    </li>
                    <li>
                        <Link href="/expertises" className=" font-light hover:">
                            Veille Juridique
                        </Link>
                    </li>
                    <li>
                        <Link href="/expertises" className=" font-light hover:">
                            Projets Stratégiques
                        </Link>
                    </li>
                    <li>
                        <Link href="/expertises" className=" font-light hover:">
                            Relations Institutionnelles
                        </Link>
                    </li>
                </ul>

                <div data-aos='fade-left' className=" font-light flex flex-col space-y-4">
                    <header>
                        <h2 className="font-semibold"> Horaires </h2>
                    </header>
                    <p className="">Lundi - Vendredi : 9h - 18h</p>
                    <p className="">Samedi : 9h - 13h</p>
                    <p className="">Dimanche : Fermé</p>
                </div>
               
                <div data-aos='fade-left' className="flex space-x-4">
                    <Link href="https://facebook.com">
                        <Facebook size={20}/>
                    </Link>
                    <Link href="https://linkedin.com">
                        <Linkedin size={20} />
                    </Link>
                </div>
            </section>

            <section className="bg-white text-center text-gray-800 py-8">
                <p>2025 AD avocats. Tous droits réservés</p>
            </section>

            {visible && (
            <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-gray-800 cursor-pointer text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition" aria-label="Remonter en haut">
            <ArrowUp size={20} />
            </button>
            )}
            
        </footer>
        
    )
}