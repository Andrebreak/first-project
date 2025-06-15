'use client';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
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
    const [status, setStatus] = useState<string | null>(null);

    const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
        const res = await fetch('/api/send-Mail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const result = await res.json();

        if (res.ok) {
            setStatus('Message envoyé avec succès !');
            reset();
        } else {
            setStatus(`Erreur : ${result.message}`);
        }
    } 
    catch (error) {
        setStatus('Erreur lors de l’envoi');
        console.error(error);
        }
    };

    return(
        <>
            <Navbar/>
            <Brandbg />
            <section className='py-20 px-5 min-sm:mb-20 min-sm:px-10'>
                <div  data-aos='fade-down' className=" text-center mb-10 text-gray-800 ">
                    <h1 className={` font-[500] uppercase text-4xl ${playfair.className} text-center mb-8`}>Contact</h1>
                    <p className={`font-light `}>Vous pouvez nous envoyer un message en indiquant votre nom, email et téléphone afin que nous puissions échanger.</p>
                </div>
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
                                    value:/^\+\d{8,15}$/,
                                    message: 'Format numero invalide',
                                }
                            })
                        } 
                        type="numero" id='numero' placeholder='+xxxxxxxxxxxxx' className="input w-full" />
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
                    <p>{status}</p>
                </form>
                

                
            </section>

            <Footer/>




            
        </>
    )
    
}