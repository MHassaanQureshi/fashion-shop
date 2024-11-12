import Image from "next/image"
import Button from "../Button/Button"
export default function Pay(){
    return(
        <div style={{ backgroundColor: '#ffdd47' }} className="w-full pb-4">
            <div>
                <Image src="/images/payday.png" alt="unable to load" width={500} height={200}/>
            </div>
            <div className="flex flex-col justify-center align-middle w-full">
                <span className="font-extrabold text-2xl  flex flex-col w-full mt-2 ">
                    <p className="p-2 bg-white w-[50%] align-middle justify-center flex">PAYDAY</p>
                    <p className="p-2 w-[50%] align-middle justify-center flex">SALE NOW</p>
                </span>
                <span className="text-sm p-3 font-bold">
                    <p>Spend minimal $100 get 30% off
                    voucher code for your next purchase</p>
                </span>
                <span className="text-sm p-3">
                    <p className="font-bold">1 June - 10 June 2021</p>
                    <p>Terms & Conditions apply</p>
                </span>
                <span className="flex align-middle justify-center">
                <Button text="Shop"/>
                </span>

            </div>
        </div>
    )
}