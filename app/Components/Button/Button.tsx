interface props{
    text:string;
}
export default function Button({text}:props){
    return(
        <button className="bg-black w-[50%] text-white p-2 rounded-xl">{text}</button>
    )
}