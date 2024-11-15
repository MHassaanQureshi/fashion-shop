

export default function Join(){
    return(
        <div className="pt-4 pb-4 flex flex-col justify-center align-middle gap-3">
            <p className="p-2 font-extrabold text-center ">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</p>
            <p className="w-full text-center p-2 text-sm">Type your email down below and be young wild generation</p>
            <span className="w-[70%] flex justify-around align-middle bg-white p-2 self-center"><input type="text" id="input" placeholder="Add your Email Here" className="bg-transparent"/>
            <button type="submit" className="p-2 bg-black text-white font-semibold rounded"> SEND</button></span>
        </div>
    )
}