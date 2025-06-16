import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import {Playfair_Display} from "next/font/google";
import { Target,Compass,Handshake } from "lucide-react";
import Brandbg from '@/components/Brandbg';
import Image from 'next/image';
const playfair = Playfair_Display({
    subsets:["latin"],
    weight: ['400',"700"]
})


export default function About(){
    return(
        <>
            <Navbar/>
            <Brandbg />

            <section className='py-20 px-7  min-sm:px-30'>
                <div data-aos='fade-down' className="text-center  text-gray-800 items-center mb-20 ">
                    <h1 className={` font-[500] uppercase text-4xl mb-10 ${playfair.className} `}>À PROPOS</h1>
                    <p className="font-light" >Fondé en 2025 à Cotonou, AD avocats s&apos;est imposé comme un acteur clé du droit des affaires en Afrique de l&apos;Ouest grâce à notre expertise pointue et notre engagement sans faille.</p>
                </div>

                <div data-aos='fade-right' className='mb-30'>
                    <h1 className="text-xl font-semibold text-gray-800 mb-5">Une Expertise Juridique Reconnue</h1>
                    <div className="flex gap-20 ">
                        <div className="text-justify font-light">
                            AD AVOCAT est un cabinet d&apos;avocats indépendant spécialisé en droit des affaires, contentieux et conformité réglementaire en Afrique de l&apos;Ouest. 
                            Depuis notre création, nous accompagnons entreprises, institutions et particuliers dans la sécurisation de leurs opérations et projets. <br />
                            Notre particularité ? Une approche combinant excellence technique et profonde connaissance des réalités économiques africaines. 
                            Nos avocats, formés aux meilleures universités et forts d&apos;expériences internationales, maîtrisent tant les standards internationaux que les spécificités locales. <br />
                            Implanté à Cotonou avec un réseau de correspondants dans toute la région UEMOA, nous intervenons sur des dossiers complexes nécessitant une expertise transfrontalière et une compréhension fine des enjeux régionaux.
                        </div>

                        <div className="relative h-70 w-300 max-2xl:hidden ">
                            <Image className=" rounded-xl w-full h-full object-cover" fill src="/images/card3.jpg" alt="..."/>
                        </div>
                    
                    </div>
                </div>
                
                <div >
                    <div  data-aos='fade-up' className='mb-10 text-center'>
                        <h1 className="text-xl md:text-2xl font-semibold text-gray-800 uppercase text-center mb-10">Notre Mission & Approche</h1>
                        <p>Au-delà de l&apos;expertise juridique, nous nous engageons à apporter des solutions concrètes et innovantes à nos clients.</p>
                    </div>

                    <div className="grid grid-cols-1 min-lg:grid-cols-2 min-xl:grid-cols-3 gap-10 justify-center items-center ">
                        <div  data-aos='fade-up'  data-aos-delay='100' className='bg-white shadow-md p-10 flex flex-col gap-10 justify-center items-center mb-3'>
                            <Target size={50} className="text-[#C29D59] "/>
                            <h1 className='font-semibold text-gray-800 text-xl min-sm:text-2xl'>Notre Mission</h1>
                            <p className='font-light text-justify'>Offrir un accompagnement juridique stratégique qui sécurise les opérations de nos clients tout en favorisant leur développement en Afrique.
                             Nous combinons rigueur technique et approche business pour des conseils réellement opérationnels.
                            </p>

                        </div>

                        <div data-aos='fade-up'  data-aos-delay='200' className='bg-white shadow-md p-10 flex flex-col gap-10 justify-center items-center mb-3'>
                            <Compass size={50} className="text-[#C29D59] "/>
                            <h1 className='font-semibold text-gray-800 text-xl min-sm:text-2xl'>Notre Approche</h1>
                            <p className='font-light text-justify'>Privilégier la prévention des risques juridiques tout en étant préparés à défendre vigoureusement les intérêts de nos clients en cas de contentieux.
                              Nous anticipons les évolutions réglementaires pour vous permettre de rester concentré sur votre cœur de métier.
                            </p>

                        </div>

                        <div data-aos='fade-up'  data-aos-delay='300' className='bg-white shadow-md p-10 flex flex-col gap-10 justify-center items-center mb-3'>
                            <Handshake size={50} className="text-[#C29D59] "/>
                            <h1 className='font-semibold text-gray-800 text-xl min-sm:text-2xl'>Notre Engagement</h1>
                            <p className='font-light text-justify'>Contribuer au développement d&apos;un écosystème juridique africain robuste et attractif pour les investissements.
                             Nous participons activement aux réflexions sur les réformes législatives et formons la nouvelle génération de juristes africains.
                            </p>
                        </div>


                    </div>
                  
                </div>

            </section>

            <Footer/>
        </>
    )
    
}