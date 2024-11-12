import Bar from "./Components/Brandbar/Bar";
import Hero from "./Components/hero-section/Hero";
import Category from "./Components/Category/Category";
import Pay from "./Components/Payday/Pay";
import App from "./Components/App/App";


export default function Home(){
  
  return(
    <>
    <div className="flex  justify-center">
      <div className="w-[90%] bg-blue-100">
        <Hero />
      </div>
    </div>
    <div className="p-4 flex align-middle justify-center  ">
    <Bar />
    </div>
    <div className="flex flex-col items-center w-[80%] mx-auto gap-8">
      <h1 className="font-extrabold text-4xl flex justify-start w-full">NEW ARRIVALS</h1>
      <Category Link="/images/hoodie.png" category="Hoodies & Sweatshirts" />
      <Category Link="/images/coat.png" category="Coats & Parkas" />
      <Category Link="/images/tshirt.png" category="Tees & T-shirt" />
    </div>
    <div className="pt-5">
      <Pay />
    </div>
    <div className="flex flex-col items-center w-[80%] mx-auto gap-8 mt-4 ">
      <h1 className="font-extrabold text-3xl flex justify-start w-full">YOUNGS FAVOURITE</h1>
      <Category Link="/images/trending.png" category="Trending on instagram" />
      <Category Link="/images/under40.png" category="All Under 40$" />
      
    </div>
    <div className="flex align-middle">
      <App />
    </div>
    </>
  )
}