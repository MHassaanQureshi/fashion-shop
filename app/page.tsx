import Bar from "./Components/Brandbar/Bar";
import Hero from "./Components/hero-section/Hero";
import Category from "./Components/Category/Category";


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
    <div className="flex flex-col items-center w-[80%] mx-auto">
      <Category Link="/images/hoodie.png" category="Hoodies & Sweatshirts" />
    </div>

    </>
  )
}