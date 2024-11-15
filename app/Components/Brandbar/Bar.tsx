import Brands from "../brandimage/Brands";

export default function Bar(){
    return(
        <div
  style={{ backgroundColor: '#EBD96B' }}
  className="flex flex-row w-[90%] p-4 justify-center items-center rounded gap-4 flex-wrap"
>
  <Brands link="/images/amazon.png" />
  <Brands link="/images/hm.png" />
  <Brands link="/images/shopify.png" />
  <Brands link="/images/levis.png" />
  <Brands link="/images/obey.png" />
  <Brands link="/images/lacoste.png" />
</div>

    )
}