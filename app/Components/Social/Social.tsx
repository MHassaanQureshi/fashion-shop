import Link from "next/link";
import Image from "next/image";
interface props{
    image:string;
}
export default function Social({image}:props){
    return(
        <div style={{ backgroundColor: '#fbdb49e0' }} className="rounded-3xl w-[10%] flex align-middle justify-center md:w-[10%]">
            <Link href="#" ><Image src={image} alt="Unable to load" width={50} height={50} className="" /></Link>
        </div>
    )
}