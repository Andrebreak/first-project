import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";
import Head from "next/head";
import {Check} from "lucide-react";
import {Playfair_Display} from "next/font/google";
import Brandbg from "@/components/Brandbg";

const playfair = Playfair_Display({
    subsets:["latin"],
    weight: ['400',"700"]
})

export default function Expertises(){
    return(
        <>
            <Head>
                <title>Expertises - AD Avocats | Cabinet d&apos;avocat à Cotonou</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Découvrez les domaines d'expertise d'AD Avocats : droit des affaires, conformité, conseil juridique, arbitrage et plus encore." />
                <meta name="keywords" content="avocat, cabinet d'avocats, droit, cotonou, bénin, juridique, contentieux, conseil" />
                {/* <link rel="canonical" href="https://www.tonsite.com/" /> */}

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="Nos expertises - AD Avocats à Cotonou" />
                <meta
                    property="og:description"
                    content="Nos avocats interviennent en droit des affaires, contentieux, conformité réglementaire, fiscalité, arbitrage et autres domaines juridiques au Bénin et en Afrique."
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="AD Avocats" />
                {/* <meta property="og:image" content="" />
                <meta property="og:url" content="" /> */}

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Nos expertises - AD Avocats à Cotonou" />
                <meta
                    name="twitter:description"
                    content="AD Avocats vous accompagne dans tous vos besoins juridiques en Afrique de l'Ouest : droit des affaires, contentieux, conformité et plus encore."
                />
                {/* <meta name="twitter:image" content="" /> */}
                {/* <meta name="twitter:site" content="" /> */}
                
                {/* Favicon */}
                {/* <link rel="icon" href="" /> */}
            </Head>
            
            <Navbar />
            <Brandbg />

            <main  className="py-20" >
                <header data-aos='fade-down' className="px-5 text-center text-gray-800 items-center mb-20 ">
                    <h1 className={` font-[500] uppercase text-4xl mb-5  ${playfair.className} `}>Expertises</h1>
                    <p className={`font-light `}>AD AVOCAT met à votre disposition une gamme complète de services juridiques spécialisés pour sécuriser vos opérations et projets.</p>
                </header>

                <section className="px-10 md:px-25 lg:px-50 min-xl:px-60 grid grid-cols-1 min-xl:grid-cols-2  justify-center items-center gap-y-20 gap-x-5  text-gray-600">

                    <section data-aos='fade-right' className="p-10 justify-center flex flex-col  min-xl:h-120 bg-white shadow-md rounded-xl ">
                        <header>
                            <h2 className=" text-xl text-center font-semibold min-sm:text-2xl mb-5  ">Conseil et sécurité juridique</h2>
                            <p className="mb-7 text-center min-md:text-start">Accompagnement stratégique pour sécuriser vos décisions et opérations commerciales.</p>
                        </header>
                        <div className="flex flex-col space-y-4">
                            <h2 className="texmdxl font-semibold">Prestations</h2>
                            <ul className="flex font-light flex-col space-y-3">
                                <li className="flex items-center gap-2">
                                    <Check size={20} className="text-[#C29D59] " />
                                    Audits et due diligence juridique
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={20} className="text-[#C29D59] " />
                                    Rédaction et négociation de contrats
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={20} className="text-[#C29D59] " />
                                    Conseil en structuration d&apos;entreprises
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={20} className="text-[#C29D59] " />
                                    Protection des actifs intellectuels
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={20} className="text-[#C29D59] " />
                                    Accompagnement des investissements
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section data-aos='fade-left' className=" p-10 justify-center flex flex-col min-xl:h-120 bg-white shadow-md rounded-xl">
                        <header>
                            <h2 className=" text-xl text-center font-semibold min-sm:text-2xl mb-5 text-gray-600 ">Droit public des affaires</h2>
                            <p className="mb-7 text-center min-md:text-start">Représentation efficace devant les juridictions nationales et internationales</p>
                        </header>
                        <div className="flex flex-col space-y-4">
                            <h2 className="text-md font-semibold  ">Prestations</h2>
                            <ul className="flex font-light flex-col space-y-3 ">
                                <li className="flex items-center gap-2"><Check size={20} className="text-[#C29D59]" />Contentieux commercial et civil</li>
                                <li className="flex items-center gap-2"><Check size={20} className="text-[#C29D59]" />Arbitrage OHADA et CIRDI</li>
                                <li className="flex items-center gap-2"><Check size={20} className="text-[#C29D59]" />Médiation et modes alternatifs</li>
                                <li className="flex items-center gap-2"><Check size={20} className="text-[#C29D59]" />Contentieux réglementaire</li>
                                <li className="flex items-center gap-2"><Check size={20} className="text-[#C29D59]" />Exécution des décisions</li>
                                
                            </ul>
                        </div>
                    </section>

                    <section  data-aos='fade-right' className=" p-10 justify-center flex flex-col min-xl:h-120 bg-white shadow-md rounded-xl">
                        <header>
                            <h2 className=" text-xl text-center font-semibold min-sm:text-2xl mb-5 text-gray-600 ">Gouvernance & Conformité</h2>
                            <p className="mb-7 text-center min-md:text-start">Mise en conformité avec les réglementations locales et internationales.</p>
                        </header>
                        <div className="flex flex-col space-y-4">
                            <h2 className="text-md font-semibold  ">Prestations</h2>
                            <ul className="flex font-light flex-col space-y-3 ">
                                <li className="flex items-center gap-2"><Check size={20} className="text-[#C29D59] " />Conformité LCB-FT/AML</li>
                                <li className="flex items-center gap-2"><Check size={20} className="text-[#C29D59] " />Règlementation ESG</li>
                                <li className="flex items-center gap-2"><Check size={20} className="text-[#C29D59] " />Gouvernance d&apos;entreprise</li>
                                <li className="flex items-center gap-2"><Check size={20} className="text-[#C29D59] " />Protection des données (RGPD)</li>
                                <li className="flex items-center gap-2"><Check size={20} className="text-[#C29D59] " />Audits de conformité</li>   
                            </ul>
                        </div>
                    </section>

                    <section  data-aos='fade-left' className=" p-10 justify-center flex flex-col min-xl:h-120 bg-white shadow-md rounded-xl">
                        <header>
                            <h2 className=" text-xl text-center font-semibold min-sm:text-2xl mb-5 text-gray-600 ">Réglementation & Veille</h2>
                            <p className="mb-7 text-center min-md:text-start">Anticipez les évolutions réglementaires impactant votre secteur.</p> 
                        </header>
                        <div className="flex flex-col space-y-4">
                            <h2 className="text-md font-semibold  ">Prestations</h2>
                            <ul className="flex font-light flex-col space-y-3 ">
                                <li className="flex items-center gap-2"><Check size={20} className="text-[#C29D59] " />Veille UEMOA/OHADA</li>
                                <li className="flex items-center gap-2"><Check size={20} className="text-[#C29D59] " />Analyse des réformes</li>
                                <li className="flex items-center gap-2"><Check size={20} className="text-[#C29D59] " />Alertes réglementaires</li>
                                <li className="flex items-center gap-2"><Check size={20} className="text-[#C29D59] " />Formations juridiques</li>
                                <li className="flex items-center gap-2"><Check size={20} className="text-[#C29D59] " />Notes de positionnement</li>
                            </ul>
                        </div>
                    </section>

                    <section  data-aos='fade-right' className=" p-10 justify-center flex flex-col min-xl:h-120 bg-white shadow-md rounded-xl">
                        <header>
                            <h2 className=" text-xl text-center font-semibold min-sm:text-2xl mb-5 text-gray-600 ">Projets Stratégiques</h2>
                            <p className="mb-7 text-center min-md:text-start">Accompagnement juridique de vos opérations complexes..</p>
                        </header>
                        <div className="flex flex-col space-y-4">
                            <h2 className="text-md font-semibold  ">Prestations</h2>
                            <ul className="flex flex-col space-y-3 ">
                                <li className="flex font-light items-center gap-2"><Check size={20} className="text-[#C29D59] " />Fusions & acquisitions</li>
                                <li className="flex font-light items-center gap-2"><Check size={20} className="text-[#C29D59] " />Partenariats stratégiques</li>
                                <li className="flex font-light items-center gap-2"><Check size={20} className="text-[#C29D59] " />Structuring financière</li>
                                <li className="flex font-light items-center gap-2"><Check size={20} className="text-[#C29D59] " />PPP et concessions</li>
                                <li className="flex font-light items-center gap-2"><Check size={20} className="text-[#C29D59] " />Innovation juridique</li>
                            </ul>
                        </div>
                    </section>

                    <section  data-aos='fade-left' className=" p-10 justify-center flex flex-col min-xl:h-120 bg-white shadow-md rounded-xl">
                        <header>
                            <h2 className=" text-xl text-center font-semibold min-sm:text-2xl mb-5 text-gray-600 ">Relations Institutionnelles</h2>
                            <p className="mb-7 text-justify">Interface avec les autorités de régulation et administrations.</p>
                        </header>
                        <div className="flex flex-col space-y-4">
                            <h2 className="text-md font-semibold  ">Prestations</h2>
                            <ul className="flex flex-col space-y-3 ">
                                <li className="flex font-light items-center gap-2"><Check size={20} className="text-[#C29D59] " />Négociations sensibles</li>
                                <li className="flex font-light items-center gap-2"><Check size={20} className="text-[#C29D59] " />Dossiers réglementaires</li>
                                <li className="flex font-light items-center gap-2"><Check size={20} className="text-[#C29D59] " />Relations avec les autorités</li>
                                <li className="flex font-light items-center gap-2"><Check size={20} className="text-[#C29D59] " />Accréditations sectorielles</li>
                                <li className="flex font-light items-center gap-2"><Check size={20} className="text-[#C29D59] " />Lobbying juridique</li>
                            </ul>
                        </div>
                    </section>   
                </section>
            </main>

            <Footer/>

        </>
    )
    
}