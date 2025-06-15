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
                <p className={` ${playfair.className} `}> <span   className="text-[500px]  tracking-[-10px]">AD</span></p>
                <p className=" text-3xl ">avocats</p>
            </div>
            </div>
        </>
    )
}