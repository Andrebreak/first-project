'use client'
import Navbar from "@/components/Navbar";
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
      {/* nav   */}
      <Navbar/>
       <div className="fixed -z-20 top-1/2 left-1/2  text-gray-800 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="p-0 m-0 flex items-baseline">
            <p className={`cursor-pointer ${playfair.className} `}> <span  className=" text-[240px] sm:text-[300px] md:text-[380px] min-lg:text-[500px] tracking-[-40px]  sm:tracking-[-40px] md:tracking-[-60px] min-lg:tracking-[-75px]">AD</span></p>
            <p className=" text-3xl ">avocats</p>
          </div>
        </div>
      {/* cta */}
      
      <header  data-aos="fade-right" className="relative h-100   min-sm:h-screen flex flex-col bg-[linear-gradient(to_right,rgba(31,41,55,1),transparent),url(/images/hero.jpg)] bg-cover bg-center bg-no-repeat">
        <div data-aos="zoom"  data-aos-delay="600" className=" px-7 sm:px-20  md:px-15 absolute inset-0 backdrop-blur-sm text-white flex justify-center items-center flex-col gap-8 ">
          <div  data-aos="fade-down"  data-aos-delay="800" className={`  ${cinzel.className} hidden min-sm:block min-sm:text-4xl min-sm:tracking-[5px] text-center `}> 
            <h1>Votre excellence juridique à portée de main.</h1>
          </div>
           <div  data-aos="fade-down"  data-aos-delay="800" className={`${cinzel.className} font-[500]  min-sm:hidden text-3xl text-center`}> 
            <h1>Votre excellence juridique à portée de main.</h1>
          </div>
          <div  data-aos="fade-up"  data-aos-delay="1000" className="text-center">
            <p className={`font-light mb-5 text-sm min-sm:text-lg `}>
              AD AVOCAT offre un accompagnement juridique sur mesure pour protéger vos intérêts
            </p>
            <Link  className=" btn btn-md min-sm:btn-lg text-gray-700 uppercase font-light border-none shadow-none  bg-white hover:bg-gray-700 hover:text-white" href="/about">Découvrir</Link>
          </div>
        </div>
      </header>
      

      <section className="py-30 px-5 min-sm:px-0">
        {/* About  */}
        <div className="mb-40 sm:px-15 md:px-30 lg:px-30 xl:px-50">
          <h1 className="max-xl:mb-5 xl:mb-7 min-2xl:mb-15 text-xl font-semibold text-gray-800 tracking-[5px]">Présentation</h1>
          <div className="flex gap-20">
            <div  data-aos="fade" className="text-justify text-xl font-light">
              Fondé avec la conviction que chaque client mérite une défense robuste et un conseil éclairé, AD AVOCAT s&apos;est imposé comme un acteur majeur du paysage juridique.
              Notre approche combine expertise technique et compréhension approfondie de vos enjeux pour vous offrir des solutions juridiques innovantes et efficace
            </div>

            <div className=" relative w-400 h-60 max-2xl:hidden ">
              <Image className=" rounded-xl object-cover" src="/images/card1.jpg" fill alt="" />
            </div>
            
          </div>
        </div>

        {/* expertises */}
        <div className="bg-gray-300 p-10  min-sm:py-20 mb-40 sm:px-15 md:px-30 lg:px-30 xl:px-50">
          <h1 className="mb-15 text-2xl min-sm:text-4xl font-semibold text-gray-800">Expertises</h1>
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
                  <p>Contentieux et arbitrage</p>
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
        </div>
    
        {/* equipes */}
          <div className="sm:px-35  md:px-30 lg:px-30 xl:px-50">
            <h1 className="b-15 text-2xl min-sm:text-4xl font-semibold text-gray-800 mb-15 text-center "><span data-aos='fade' data-aos-easing="linear" >E</span><span data-aos='fade' data-aos-easing="linear" data-aos-delay='100'>q</span><span data-aos='fade' data-aos-easing="linear" data-aos-delay='200'>u</span><span data-aos='fade' data-aos-easing="linear" data-aos-delay='300'>i</span><span data-aos='fade' data-aos-easing="linear" data-aos-delay='400'>p</span><span data-aos='fade' data-aos-easing="linear" data-aos-delay='500'>e</span></h1>

            <div className="grid px-10 min-sm:px-0 items-center justify-center sm:gap-14 lg:gap-4 grid-cols-1 md:grid-cols-2 min-lg:grid-cols-4 gap-15 ">

              <div data-aos='fade-in' data-aos-delay='500'  className="group overflow-hidden">
                <div className="relative h-90  mb-3 overflow-hidden">
                  <Image  src="/images/avocat1.jpg" className=" rounded-md object-cover" fill alt="" />
                </div>
                <div className="">
                  <p className="mb-2 ">Nom</p>
                  <p className="text-gray-600"> description</p>
                </div>
              </div>


              <div data-aos='fade-in' data-aos-delay='600'  className="group overflow-hidden">
                <div className="relative h-90  mb-3 overflow-hidden">
                  <Image  src="/images/avocat1.jpg" className=" rounded-md object-cover" fill alt="" />
                </div>
                <div className="">
                  <p className=" mb-2 ">Nom</p>
                  <p className="text-gray-500"> description</p>
                </div>
              </div>


              <div data-aos='fade-in' data-aos-delay='700' className="group overflow-hidden">
                <div className="relative h-90  mb-3 overflow-hidden">
                  <Image  src="/images/avocat.jpg" className=" rounded-md object-cover" fill alt="" />
                </div>
                <div className=" ">
                  <p className=" mb-2">Nom</p>
                  <p className="text-gray-500"> description</p>
                </div>
              </div>

              <div data-aos='fade-in' data-aos-delay='800'  className="group overflow-hidden">
                <div className="relative h-90  mb-3 overflow-hidden">
                  <Image  src="/images/avocat.jpg" className=" rounded-md object-cover" fill alt="" />
                </div>
                <div className=" ">
                  <p className=" mb-2">Nom</p>
                  <p className="text-gray-500"> description</p>
                </div>
              </div>

            </div>
          </div>
      </section>

      <Footer/>


    </>


  );
}
