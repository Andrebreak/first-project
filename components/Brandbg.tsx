import {Playfair_Display} from "next/font/google";
const playfair = Playfair_Display({
    subsets:["latin"],
    weight: ['400',"700"]
})

export default function Brandbg(){
    return(
        <>
            <div data-aos="fade-in" className=" fixed -z-20 top-1/2 left-1/2  text-gray-800 transform -translate-x-1/2 -translate-y-1/2 ">
            <div className="p-0 m-0 flex items-baseline">
                <p className={` ${playfair.className} `}> <span className="text-[220px] sm:text-[300px] md:text-[380px] min-lg:text-[500px] tracking-[-40px]  sm:tracking-[-40px] md:tracking-[-60px] min-lg:tracking-[-75px]">AD</span></p>
                <p className=" text-3xl ">avocats</p>
            </div>
            </div>
        </>
    )
}