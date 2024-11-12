import Image from "next/image";

interface Catprops {
  Link: string;
  category: string;
}

export default function Category({ Link, category }: Catprops) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={Link} alt="unable to load" width={200} height={200} className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3" />
      <p className="text-center font-bold p-2">{category}</p>
      <div className="flex items-center space-x-2 font-bold justify-between w-[80%]">
        <p>Explore Now!</p>
        <Image src="/images/Arrow.png" alt="" width={15} height={20} />
      </div>
    </div>
  );
}
