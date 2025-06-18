'use client';
import toast,{ Toaster } from "react-hot-toast"
import Head from "next/head";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import { useForm } from 'react-hook-form';
import Brandbg from '@/components/Brandbg';
import {Playfair_Display} from "next/font/google";
const playfair = Playfair_Display({
    subsets:["latin"],
    weight: ['400',"700"]
})

type FormData = {
  name: string;
  email: string;
  numero: string;
  message: string;
};

export default function Contact(){
    const { register, handleSubmit, formState: { errors },reset} = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        const sendPromise = fetch('/api/send-Mail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).then(async (res) => {
            const result = await res.json();
            if (!res.ok) throw new Error(result.message || 'Erreur serveur');
            return result;
        });

        toast.promise(
            sendPromise,
            {
                loading: "📩 Envoi de votre message en cours...",
                success: 'Votre message a bien été envoyé. Nous reviendrons vers vous sous peu.',
                error: (err) => `Échec : ${err.message}`,
            }
        );

        try {
            await sendPromise;
            reset();
        } 
        catch (e) {
            console.error(e)
        }
    };
    

    return(
        <>
            <Head>
                <title>Contact - AD Avocats | Cabinet d&apos;avocat à Cotonou</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Besoin d'un conseil juridique ou d'un accompagnement ? Contactez AD Avocats, cabinet d'avocats à Cotonou spécialisé en droit des affaires et contentieux." />
                <meta name="keywords" content="avocat, cabinet d'avocats, droit, cotonou, bénin, juridique, contentieux, conseil" />
                {/* <link rel="canonical" href="https://www.tonsite.com/" /> */}

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="Contact - AD Avocats à Cotonou" />
                <meta
                    property="og:description"
                    content="Prenez rendez-vous avec notre cabinet d'avocats à Cotonou. Experts en droit des affaires, nous vous accompagnons dans vos projets juridiques."
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="AD Avocats" />
                {/* <meta property="og:image" content="" />
                <meta property="og:url" content="" /> */}

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact - AD Avocats à Cotonou" />
                <meta
                    name="twitter:description"
                    content="Besoin d'un avocat au Bénin ? Contactez-nous pour un rendez-vous ou une consultation juridique."
                />
                {/* <meta name="twitter:image" content="" /> */}
                {/* <meta name="twitter:site" content="" /> */}
                
                {/* Favicon */}
                {/* <link rel="icon" href="" /> */}
            </Head>
            <Navbar/>
            <Brandbg />
            <section className='py-20 px-5 min-sm:mb-20 min-sm:px-10'>
                <header  data-aos='fade-down' className=" text-center mb-10 text-gray-800 ">
                    <h1 className={` font-[500] uppercase text-4xl ${playfair.className} text-center mb-8`}>Contact</h1>
                    <p className={`font-light `}>Vous pouvez nous envoyer un message en indiquant votre nom, email et téléphone afin que nous puissions échanger.</p>
                </header>
                <form onSubmit={handleSubmit(onSubmit)} className="flex items-center flex-col justify-center gap-4 ">
                    <div className='flex flex-col gap-3 w-70 min-sm:w-100'>
                        <label className='' htmlFor="nom">Nom</label>
                        <input 
                        {...register('name', 
                            { 
                                required: "le nom est requis",
                                pattern:{
                                    value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,50}$/u,
                                    message: 'Le nom ne doit contenir que des lettres et des espaces',
                                }
                            })
                        } 
                        type="text" id='nom' className="input w-full" />
                        {errors.name && <p className="text-error text-xs mt-2">{errors.name.message}</p>}
                    </div>

                    <div className='flex flex-col gap-3 w-70 min-sm:w-100'>
                        <label htmlFor="email">Email</label>
                        <input 
                        {...register('email', 
                            { 
                                required: "l'email est requis",
                                pattern:{
                                    value:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: 'Format email invalide',
                                }
                            })
                        } 
                        type="email" id='email' className="input w-full" />
                        {errors.email && <p className="mt-2 text-xs text-error">{errors.email.message}</p>}
                    </div>
                    <div className='flex flex-col gap-3 w-70 min-sm:w-100'>
                        <label htmlFor="numero">Numero</label>
                        <p className="text-xs alert-warning">Veuillez entrer l&apos;indicatif du pays de résidence avant le numero</p>
                        <input 
                        {...register('numero', 
                            { 
                                required: "le numero est obligatoire",
                                pattern:{
                                    value:/^\+?\d{8,15}$/,
                                    message: 'Format numero invalide',
                                }
                            })
                        } 
                        type="tel" id='numero' placeholder='+xxxxxxxxxxxxx' className="input w-full" />
                        {errors.numero && <p className="mt-2 text-xs text-error">{errors.numero.message}</p>}
                    </div>
                    <div className='flex flex-col gap-3 w-70 min-sm:w-100'>
                        <label htmlFor='message'>Message</label>
                        <textarea 
                        {...register('message', 
                            { 
                                required: "Le message est requis",
                                minLength: {
                                value: 10,
                                message: 'Le message doit faire au moins 10 caractères',}
                            })
                        } 
                        className="textarea w-full" id='message' />
                        {errors.message && <p className="mt-2 text-xs text-error">{errors.message.message}</p>}
                    </div>
                    <button className="btn bg-gray-600 font-light uppercase text-white hover:bg-white hover:text-gray-600 btn-md min-sm:btn-lg" type="submit">Envoyer</button>
                    <Toaster position="top-center" toastOptions={{ duration: 5000 , className:"max-md:text-sm font-light text-gray-800"}}  reverseOrder={false} />
                </form>
            </section>

            <Footer/>




            
        </>
    )
    
}