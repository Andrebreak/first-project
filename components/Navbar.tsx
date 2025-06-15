"use client";
import Link from "next/link"
import { Menu, X } from "lucide-react";
import { useState,useEffect } from "react";
import {Playfair_Display} from "next/font/google";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
})



export default function Navbar(){
    // shadow scroll
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    // menu responsive
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? 'shadow-sm' : ''}`}>
            {/* Menu desktop */}
            <div className={`flex bg-white justify-between items-center py-3 px-7 md:px-15 min-lg:px-20 `}>
                <div className=" text-gray-800 font-semibold ">
                    {/* <p className={`cursor-pointer ${playfair.className} font-[400]`}> <span className="text-5xl">AD</span> <br /> <span className="text-xl">avocats</span></p> */}
                    <Link href="/" className="flex cursor-pointer items-baseline gap-3 font-[400]">
                        <p className={` ${playfair.className} `}> <span  className="text-5xl tracking-[-10px]">AD</span></p>
                        <p className="text-xl ">avocats</p>
                    </Link>
                    
                </div>

                {/*Bouton mobile*/}
                <button className="hidden max-lg:block" onClick={() => setIsOpen(!isOpen)}>
                    <Menu size={35} className="text-gray-800"/>
                </button>

                <ul className="flex gap-8 text-gray-800 max-lg:hidden">
                    <Link  className=" hover:text-gray-500 hover:underline underline-offset-8" href="/">Accueil</Link>
                    <Link  className=" hover:text-gray-500 hover:underline  underline-offset-8"href="/about">À  propos</Link>
                    <Link  className=" hover:text-gray-500 hover:underline  underline-offset-8"href="/expertises">Expertises</Link>
                    {/* <Link  className=" hover:text-gray-500 hover:underline  underline-offset-8"href="/blog">Blog</Link> */}
                    <Link  className=" hover:text-gray-500 hover:underline  underline-offset-8"href="/contact">Contact</Link> 
                </ul>

            </div>
           

            {/* Menu responsive*/}
            <div className={`fixed  h-full w-full top-0 z-50 min-lg:hidden bg-gray-50 transform transition-transform duration-300  ease-in-out
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

                <div className="flex justify-between mb-15 border-b-1 border-gray-300 px-15 py-5">
                    <div className="text-2xl font-semibold uppercase text-gray-800">
                        <Link href="/" className="flex cursor-pointer items-baseline gap-3 font-[400]">
                            <p className={` ${playfair.className} `}> <span  className="text-5xl tracking-[-10px]">AD</span></p>
                            <p className="text-xl ">avocats</p>
                        </Link>
                    </div>

                  
                    <button className="hidden max-lg:block  border-gray-800" onClick={() => setIsOpen(!isOpen)}>
                        <X size={35} className=" text-gray-900"/>
                    </button>
                </div>

                <ul className=" flex flex-col gap-7 text-gray-800 px-15">
                    <Link onClick={()=>{setIsOpen(false)}} className=" hover:text-blue-900 text-xl" href="/">Accueil</Link>
                    <Link onClick={()=>{setIsOpen(false)}} className=" hover:text-blue-900 text-xl"href="/about">À propos</Link>
                    <Link onClick={()=>{setIsOpen(false)}} className=" hover:text-blue-900 text-xl"href="/expertises">Expertises</Link>
                    <Link onClick={()=>{setIsOpen(false)}} className=" hover:text-blue-900 text-xl"href="/blog">Blog</Link>
                    <Link onClick={()=>{setIsOpen(false)}} className=" hover:text-blue-900 text-xl"href="/contact">Contact</Link> 
                </ul>

            </div>
        </nav>
    )
}