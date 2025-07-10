import Navbar from '@/components/Navbar';
import Head from 'next/head';
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
            <Head>
                <title>À propos - AD Avocats | Cabinet d&apos;avocat à Cotonou</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Découvrez l'histoire, la mission et l'approche stratégique d'AD Avocats, cabinet d'avocats à Cotonou spécialisé en droit des affaires et contentieux en Afrique de l'Ouest." />
                <meta name="keywords" content="avocat, cabinet d'avocats, droit, cotonou, bénin, juridique, contentieux, conseil" />
                {/* <link rel="canonical" href="https://www.tonsite.com/" /> */}

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="À propos - AD Avocats | Cabinet à Cotonou" />
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
                <meta name="twitter:title" content="À propos - AD Avocats | Cabinet à Cotonou" />
                <meta
                    name="twitter:description"
                    content="Découvrez la vision et les engagements du cabinet AD Avocats, acteur majeur du droit des affaires en Afrique de l'Ouest."
                />
                {/* <meta name="twitter:image" content="" /> */}
                {/* <meta name="twitter:site" content="" /> */}
                
                {/* Favicon */}
                {/* <link rel="icon" href="" /> */}
            </Head>

                
            {/* header */}
            <header className="sticky top-0 z-50">
                <Navbar/>
            </header>

            <Brandbg />

            <main className='py-20 px-7  min-sm:px-30'>
                <section data-aos='fade-down' className="text-center  text-gray-800 items-center mb-20 ">
                    <header>
                        <h1 className={` font-[500] uppercase text-4xl mb-10 ${playfair.className} `}>À PROPOS</h1>
                    </header>
                    <p className="font-light text-justify min-md:text-left" >Fondé à Paris en 2021, AD Avocat est un cabinet qui oriente désormais ses activités vers l&apos;Afrique. Il s&apos;agit de développer son expertise en droit des affaires notamment dans sa dimension conseils. </p>
                </section>

                <section data-aos='fade-right' className='mb-30'>
                    <header>
                        <h2 className="text-xl font-semibold text-gray-800 mb-5">Une Expertise Juridique Reconnue</h2>
                    </header>

                    <div className="flex gap-20 ">
                        <div className="text-justify font-light">
                            <p className='mb-3'>
                            AD AVOCAT est un cabinet d&apos;avocats indépendant spécialisé en droit des affaires, contentieux et conformité réglementaire en Afrique de l&apos;Ouest. 
                            Depuis notre création, nous accompagnons entreprises, institutions et particuliers dans la sécurisation de leurs opérations et projets. 
                            </p>
                            <p className='mb-3'>
                                Notre particularité ? Une approche combinant excellence technique et profonde connaissance des nouvelles réalités économiques africaines. Notre équipe présente sur le terrain a une parfaite connaissance des règles et standards qui concourent au développement du continent africain.
                            </p>
                            <p>
                                Nous sommes implantés à Cotonou avec un réseau de correspondants dans toute la région UEMOA, nous intervenons sur des dossiers complexes nécessitant une expertise transfrontalière et une compréhension fine des enjeux économiques régionaux.
                            </p>
                            {/* Notre particularité ? Une approche combinant excellence technique et profonde connaissance des réalités économiques africaines. 
                            Nos avocats, formés aux meilleures universités et forts d&apos;expériences internationales, maîtrisent tant les standards internationaux que les spécificités locales. <br />
                            Implanté à Cotonou avec un réseau de correspondants dans toute la région UEMOA, nous intervenons sur des dossiers complexes nécessitant une expertise transfrontalière et une compréhension fine des enjeux régionaux. */}
                        </div>
                        <div className="relative h-70 w-300 max-2xl:hidden ">
                            <Image className=" rounded-xl w-full h-full object-cover" fill src="/images/card3.jpg" alt="Statue de la Justice,Thémis"/>
                        </div>
                    </div>
                </section>
                
                <section>
                    <header  data-aos='fade-up' className='mb-10 text-center'>
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 uppercase text-center mb-10">Notre Mission & Approche</h2>
                        <p>Au-delà de l&apos;expertise juridique, nous nous engageons à apporter des solutions concrètes et innovantes à nos clients.</p>
                    </header>

                    <div className="grid grid-cols-1 min-lg:grid-cols-2 min-xl:grid-cols-3 gap-10 justify-center justify-items-center items-center ">
                        <div  data-aos='fade-up'  data-aos-delay='100' className='bg-white shadow-md p-10 flex flex-col gap-5 justify-center items-center mb-3'>
                            <header className='flex flex-col items-center space-y-5'>
                                <Target size={50} className="text-[#C29D59] "/>
                                <h2 className='font-semibold text-gray-800 text-xl min-sm:text-2xl'>Valeur ajoutée</h2>
                            </header>
                           
                            <p className='font-light text-justify'>Offrir un accompagnement juridique stratégique qui sécurise les opérations de nos clients tout en favorisant leur développement en Afrique.
                                Nous combinons rigueur technique et approche business pour des conseils réellement opérationnels.
                            </p>
                        </div>

                        <div data-aos='fade-up'  data-aos-delay='200' className='bg-white shadow-md p-10 flex flex-col gap-5 justify-center items-center mb-3'>
                            <header className='flex flex-col items-center space-y-5'>
                                <Compass size={50} className="text-[#C29D59]"/>
                                <h2 className='font-semibold text-gray-800 text-xl min-sm:text-2xl'>Notre Approche</h2>
                            </header>
                            
                            <p className='font-light text-justify'>Privilégier la prévention des risques juridiques tout en étant préparés à défendre vigoureusement les intérêts de nos clients en cas de contentieux.
                              Nous anticipons les évolutions réglementaires pour vous permettre de rester concentré sur votre cœur de métier.
                            </p>
                        </div>

                        <div data-aos='fade-up'  data-aos-delay='300' className='bg-white shadow-md p-10 flex flex-col gap-5 justify-center items-center mb-3'>
                            <header className='flex flex-col items-center space-y-5'>
                                <Handshake size={50} className="text-[#C29D59] "/>
                                <h2 className='font-semibold text-gray-800 text-xl min-sm:text-2xl'>Notre Engagement</h2>
                            </header>
                            
                            <p className='font-light text-justify'>Contribuer au développement d&apos;un écosystème juridique africain robuste et attractif pour les investissements.
                             Nous participons activement aux réflexions sur les réformes législatives et formons la nouvelle génération de juristes africains.
                            </p>
                        </div>
                    </div> 
                </section>
            </main>

            <Footer/>
        </>
    )
}