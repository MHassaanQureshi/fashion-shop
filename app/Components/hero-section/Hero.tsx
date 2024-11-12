import Image from "next/image"
import Button from "../Button/Button"
export default function Hero(){
    return(
        <div className="flex flex-col w-full justify-around">
            <div className="flex flex-col w-full mt-4">
            <p className="font-extrabold text-4xl p-2">LETS EXPLORE</p>
            <span style={{ backgroundColor: '#EBD96B' }} className="font-extrabold text-4xl p-2 w-[60%] lg:w-[70%]">UNIQUE</span>
            <p className="font-extrabold text-4xl p-2">CLOTHES</p>
            <p className="font-bold text-lg p-2 w-full">Live for influence and innovative fashion</p>
            <div className="flex ml-3">
            <Button text="Shop Now"/>
            </div>
            </div>
            <div className="flex justify-end">
                <Image src="/images/hero-img.png" alt="unable to load" width={300} height={300} className="flex align-middle justify-center"/>
            </div>
        </div>
    )
}