"use client";
import Bar from "./Components/Brandbar/Bar";
import Hero from "./Components/hero-section/Hero";
import Category from "./Components/Category/Category";
import Pay from "./Components/Payday/Pay";
import App from "./Components/App/App";
import Join from "./Components/Join/Join";
import { useState, useEffect } from "react";
import Image from "next/image"

export default function Home() {
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopup(true);
    }, 1000);

    return () => clearTimeout(timer); 
  },[]);

  return (
    <>
     {popup && (
  <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded shadow-md text-center space-y-4 w-[90%] h-[70%] flex flex-col items-center justify-between">
      <div className="flex flex-row items-center space-y-4 gap-3">
        
        <Image
          src="/images/coatmodel.jpg"
          alt="Unable to load"
          width={400} 
          height={400} 
          className="rounded-lg w-[50%]"
        />
        
        <div className="text-center w-[50%] ">
          <h1 className="text-4xl font-bold">SALE</h1>
          <p className="text-lg">Summer Clearance Sale</p>
          <p className="text-lg">Enjoy discounts up to 75% OFF</p>
        </div>
      </div>
      
      <button
        onClick={() => setPopup(false)}
        style={{ backgroundColor: "#fbdb49e0" }}
        className="px-6 py-3 text-black rounded-full"
      >
        Close
      </button>
    </div>
  </div>
)}



      <div className="flex justify-center">
        <div className="w-[90%] bg-blue-100">
          <Hero />
        </div>
      </div>
      <div className="p-4 flex align-middle justify-center">
        <Bar />
      </div>
      <div className="flex flex-col items-center w-[80%] mx-auto gap-8">
        <h1 className="font-extrabold text-4xl flex justify-start w-full">
          NEW ARRIVALS
        </h1>
        <div className="flex flex-col md:flex-row gap-5">
          <Category Link="/images/hoodie.png" category="Hoodies & Sweatshirts" />
          <Category Link="/images/coat.png" category="Coats & Parkas" />
          <Category Link="/images/tshirt.png" category="Tees & T-shirt" />
        </div>
      </div>
      <div className="pt-5">
        <Pay />
      </div>
      <div className="flex flex-col items-center w-[80%] mx-auto gap-8 mt-4">
        <h1 className="font-extrabold text-3xl flex justify-start w-full">
          YOUNGS FAVOURITE
        </h1>
        <div className="flex flex-col gap-4 md:flex-row">
          <Category
            Link="/images/trending.png"
            category="Trending on instagram"
          />
          <Category Link="/images/under40.png" category="All Under 40$" />
        </div>
      </div>
      <div className="flex align-middle">
        <App />
      </div>
      <div
        style={{ backgroundColor: "#fbdb49e0" }}
        className="w-full flex justify-center pt-4 pb-4"
      >
        <Join />
      </div>
    </>
  );
}
