import Image from "next/image";
export default function App(){
    return(
        <div className="w-full flex flex-row justify-center pt-8">
            <div className="w-[60%] p-4">
                <span className="flex flex-col gap-2">
                    <p className="font-bold">DOWNLOAD APP & GET FREE VOUCHERS</p>
                    <p className="text-sm">Get 30% off for first transaction using
                    Rondovision mobile app for now.</p>
                </span>
                <span className="flex gap-4">
                    <Image src="/images/playstore.png" alt="unable to load" width={80} height={50} />
                    <Image src="/images/appstore.png" alt="unable to load" width={80} height={50} />
                </span>

            </div>
            <div>
                <Image src="/images/mobileapp.png" alt="unable to load" width={100} height={50}/>
            </div>
        </div>
    )
}