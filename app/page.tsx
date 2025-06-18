'use client'
import Navbar from "@/components/Navbar";
import Head from 'next/head';
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight,ShieldCheck, Gavel, Building2, FileSearch, Workflow, Landmark} from 'lucide-react';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {Cinzel, Playfair_Display} from "next/font/google";
const playfair = Playfair_Display({
  subsets:["latin"],
  weight: ['400',"700"]
})

const cinzel = Cinzel({
  subsets:["latin"],
  weight: ['400',"700"]
})

export default function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <Head>
        <title>Cabinet d&apos;avocats à Cotonou - AD avocat</title>
        <meta name="description"  content="AD Avocats, cabinet d'avocats basé à Cotonou, est spécialisé en droit public des affaires, conseil et sécurité juridique, gouvernance et conformité, réglement et veille,projets stratégiques,relation institutionnelles en Afrique de l'Ouest."/>
        <meta name="keywords" content="avocat, cabinet d'avocats, droit, cotonou, bénin, juridique, contentieux, conseil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="canonical" href="https://ad-avocats-project-psi.vercel.app/" /> */}

        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Cabinet d'avocats à Cotonou - AD Avocats" />
        <meta
          property="og:description"
          content="Découvrez AD Avocats, un cabinet d'avocats à Cotonou reconnu pour son expertise en droit des affaires et son accompagnement stratégique des entreprises."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AD Avocats" />
        {/* <meta property="og:image" content="" />
        <meta property="og:url" content="" /> */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cabinet d'avocats à Cotonou - AD Avocats" />
        <meta
          name="twitter:description"
          content="Découvrez la vision et les engagements du cabinet AD Avocats, acteur majeur du droit des affaires en Afrique de l'Ouest."
        />
        <meta name="twitter:image" content="https://www.adavocats.com/images/accueil.jpg" />
        <meta name="twitter:site" content="@adavocats" />

        {/* Favicon */}
        {/* <link rel="icon" href="/" /> */}
      </Head> 

      <div className="fixed -z-20 top-1/2 left-1/2  text-gray-800 transform -translate-x-1/2 -translate-y-1/2 ">
        <div className="p-0 m-0 flex items-baseline">
          <p className={`cursor-pointer ${playfair.className} `}> <span  className=" text-[240px] sm:text-[300px] md:text-[380px] min-lg:text-[500px] tracking-[-40px]  sm:tracking-[-40px] md:tracking-[-60px] min-lg:tracking-[-75px]">AD</span></p>
          <p className=" text-3xl ">avocats</p>
        </div>
      </div>

      {/* header */}
      <header>
        <Navbar/>
      </header>

      {/* cta */}
      <section  data-aos="fade-right" className="relative h-100   min-sm:h-screen flex flex-col bg-[linear-gradient(to_right,rgba(31,41,55,1),transparent),url(/images/hero.jpg)] bg-cover bg-center bg-no-repeat">
        <div data-aos="zoom"  data-aos-delay="600" className=" px-7 sm:px-20  md:px-15 absolute inset-0 backdrop-blur-sm text-white flex justify-center items-center flex-col gap-8 ">
          <header> 
            <h1 data-aos="fade-down"  data-aos-delay="800" className={`${cinzel.className} text-3xl min-sm:text-4xl min-sm:tracking-[5px] text-center font-[500 `}>Votre excellence juridique à portée de main.</h1>
          </header>
          <div  data-aos="fade-up"  data-aos-delay="1000" className="text-center">
            <p className={`font-light mb-5 text-sm min-sm:text-lg `}>
              AD AVOCAT offre un accompagnement juridique sur mesure pour protéger vos intérêts
            </p>
            <Link  className=" btn btn-md min-sm:btn-lg text-gray-700 uppercase font-light border-none shadow-none  bg-white hover:bg-gray-700 hover:text-white" href="/about">Découvrir</Link>
          </div>
        </div>
      </section>

      <main className="py-30 px-5 min-sm:px-0">
        {/* About  */}
        <section className="mb-40 sm:px-15 md:px-30 lg:px-30 xl:px-50">
          <header>
            <h2 className="max-xl:mb-5 xl:mb-7 min-2xl:mb-15 text-xl font-semibold text-gray-800 tracking-[5px]">Présentation</h2>
          </header>
          <div className="flex gap-20">
            <p data-aos="fade" className=" text-justify text-xl font-light">
              Fondé avec la conviction que chaque client mérite une défense robuste et un conseil éclairé, AD AVOCAT porte l&apos;ambition d&apos;accompagner ses clients dans leurs différents secteurs d&apos;activités.
              Notre approche combine expertise technique et compréhension approfondie de vos enjeux pour vous offrir des solutions juridiques innovantes et efficace
            </p>
            <div className=" relative w-400 h-60 max-2xl:hidden ">
              <Image className=" rounded-xl object-cover" alt="Statue de la Justice ,Thémis" src="/images/card1.jpg" fill />
            </div>
          </div>
        </section>

        {/* expertises */}
        <section className="bg-gray-300 p-10  min-sm:py-20 mb-40 sm:px-15 md:px-30 lg:px-30 xl:px-50">
          <header>
            <h2 className="mb-15 text-2xl min-sm:text-4xl font-semibold text-gray-800">Expertises</h2>
          </header>

          <div className="relative">
            <button ref={prevRef} className="absolute cursor-pointer border-none bg-none bottom-1/2 left-0 z-10 ">
              <ChevronLeft size={35} />
            </button>
            <button ref={nextRef} className="absolute cursor-pointer bg-none border-none bottom-1/2 right-0 z-10 ">
              <ChevronRight className="" size={35} />
            </button>

            <Swiper
               modules={[Autoplay,Navigation]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false, // continue même si l’utilisateur interagit
              }}
              // modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              slidesPerView={1}
          
              breakpoints={{
                640: {       // >= 640px (sm)
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                768: {       // >= 768px (md)
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1024: {      // >= 1024px (lg)
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              loop={true}>
           
              <SwiperSlide>
                <Link  className="group flex flex-col p-5 items-center gap-5 cursor-pointer text-xl text-center" href="/expertises">
                  <ShieldCheck className="transition-transform duration-300 group-hover:scale-130 group-hover:text-gray-500 text-gray-800" size={50}/>
                  <p>Conseil et sécurité juridique</p>
                </Link>
              </SwiperSlide>
              
              <SwiperSlide>
                <Link  className=" group flex flex-col p-5 items-center gap-5 cursor-pointer text-xl text-center " href="/expertises">
                  <Gavel className="transition-transform duration-300 group-hover:scale-130 group-hover:text-gray-500 text-gray-800" size={50}/>
                  <p>Droit public des affaires</p>
                </Link>
              </SwiperSlide>
            
              <SwiperSlide>
                <Link  className=" group flex flex-col p-5 items-center gap-5 cursor-pointer text-xl text-center" href="/expertises">
                  <Building2 className="transition-transform duration-300 group-hover:scale-130 group-hover:text-gray-500 text-gray-800" size={50}/>
                  <p>Gouvernance & conformité</p>
                </Link>
              </SwiperSlide>
        
              <SwiperSlide>
                <Link  className=" group flex flex-col p-5 items-center gap-5 cursor-pointer text-xl text-center" href="/expertises">
                 <FileSearch className="transition-transform duration-300 group-hover:scale-130 group-hover:text-gray-500 text-gray-800" size={50}/>
                 <p>Réglementation & veille</p>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link  className=" group flex flex-col p-5 items-center gap-5 cursor-pointer text-xl text-center" href="/expertises">
                 <Workflow className="transition-transform duration-300 group-hover:scale-130 group-hover:text-gray-500 text-gray-800" size={50}/>
                 <p>Projets stratégiques</p>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link  className=" group flex flex-col p-5 items-center gap-5 cursor-pointer text-xl text-center" href="/expertises">
                  <Landmark className="transition-transform duration-300 group-hover:scale-130 group-hover:text-gray-500 text-gray-800" size={50}/>
                  <p>Relations institutionnelles</p>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
    
        {/* equipes */}
        <section className="sm:px-35  md:px-30 lg:px-30 xl:px-50">
          <header>
            <h2 className="b-15 text-2xl min-sm:text-4xl font-semibold text-gray-800 mb-15 text-center "><span data-aos='fade' data-aos-easing="linear" >L&apos;</span><span data-aos='fade' data-aos-easing="linear" data-aos-delay='100'>e</span><span data-aos='fade' data-aos-easing="linear" data-aos-delay='200'>q</span><span data-aos='fade' data-aos-easing="linear" data-aos-delay='300'>u</span><span data-aos='fade' data-aos-easing="linear" data-aos-delay='400'>i</span><span data-aos='fade' data-aos-easing="linear" data-aos-delay='500'>p</span><span data-aos='fade' data-aos-easing="linear" data-aos-delay='600'>e</span></h2>
          </header>

          <div className="grid px-10 min-sm:px-0 items-center justify-center sm:gap-14 lg:gap-4 grid-cols-1 md:grid-cols-2 min-lg:grid-cols-4 gap-15 ">
            <div data-aos='fade-in' data-aos-delay='500'  className="group overflow-hidden">
              <div className="relative h-90  mb-3 overflow-hidden">
                <Image  src="/images/avocat1.jpg" className=" rounded-md object-cover" fill alt="membres" />
              </div>
              <div className="">
                <p className="mb-2 ">Nom</p>
                <p className="text-gray-600"> poste</p>
              </div>
            </div>

            <div data-aos='fade-in' data-aos-delay='600'  className="group overflow-hidden">
              <div className="relative h-90  mb-3 overflow-hidden">
                <Image  src="/images/avocat1.jpg" className=" rounded-md object-cover" fill alt="membres" />
              </div>
              <div className="">
                <p className=" mb-2 ">Nom</p>
                <p className="text-gray-500"> poste</p>
              </div>
            </div>

            <div data-aos='fade-in' data-aos-delay='700' className="group overflow-hidden">
              <div className="relative h-90  mb-3 overflow-hidden">
                <Image  src="/images/avocat.jpg" className=" rounded-md object-cover" fill alt="membres" />
              </div>
              <div className=" ">
                <p className=" mb-2">Nom</p>
                <p className="text-gray-500"> poste</p>
              </div>
            </div>

            <div data-aos='fade-in' data-aos-delay='800'  className="group overflow-hidden">
              <div className="relative h-90  mb-3 overflow-hidden">
                <Image  src="/images/avocat.jpg" className=" rounded-md object-cover" fill alt="membres" />
              </div>
              <div className=" ">
                <p className=" mb-2">Nom</p>
                <p className="text-gray-500"> poste</p>
              </div>
            </div>
          </div>
          
        </section>
      </main>

      <Footer/>


    </>


  );
}
