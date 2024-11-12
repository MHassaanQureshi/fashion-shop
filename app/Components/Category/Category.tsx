import Image from "next/image";

interface Catprops {
  Link: string;
  category: string;
}

export default function Category({ Link, category }: Catprops) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={Link} alt="unable to load" width={200} height={200} />
      <p className="text-center">{category}</p>
      <div className="flex items-center space-x-2">
        <p>Explore Now!</p>
        <Image src="/images/Arrow.png" alt="" width={20} height={20} />
      </div>
    </div>
  );
}
