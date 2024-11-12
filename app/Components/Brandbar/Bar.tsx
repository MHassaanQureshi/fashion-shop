import Brands from "../brandimage/Brands";

export default function Bar(){
    return(
        <div style={{ backgroundColor: '#EBD96B' }} className=" flex flex-col w-[90%] p-4 justify-center align-middle rounded gap-4">
            <div className="flex justify-around">
            <Brands link="/images/amazon.png"/>
            <Brands link="/images/hm.png"/>
            </div>
            <div className="flex justify-around pt-4">
            <Brands link="/images/shopify.png"/>
            <Brands link="/images/levis.png"/>
            </div>
            <div className="flex justify-around pt-4">
            <Brands link="/images/obey.png"/>
            <Brands link="/images/lacoste.png"/>
            </div>
        </div>
    )
}