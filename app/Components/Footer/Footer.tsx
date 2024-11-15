import Social from "../Social/Social";
import Link from "next/link";

export default function Footer(){
    return(
        <div className="bg-black text-white flex  flex-col text-center pt-4 md:flex-row gap-4">
            <div className="">
                <h1 className="font-extrabold text-2xl">FASHION</h1>
                <p>Complete your style with awesome clothes from us.</p>
                <div className="flex align-middle justify-center p-4 gap-4">
                    <Social image="/images/facebook.png"/>
                    <Social image="/images/instagram.png"/>
                    <Social image="/images/linkedin.png"/>
                </div>
            </div>
            <div className="flex flex-col gap-5 md:flex-row md:gap-10 text-balance">
  <div className="flex flex-col gap-3 pt-4">
    <h1 className="font-bold ">Company</h1>
    <ul className="flex flex-col gap-2">
      <li><Link href="#">About</Link></li>
      <li><Link href="#">Contact Us</Link></li>
      <li><Link href="#">Support</Link></li>
      <li><Link href="#">Careers</Link></li>
    </ul>
  </div>
  <div className="flex flex-col gap-3">
    <h1 className="font-bold md:mt-4">Quick Link</h1>
    <ul className="flex flex-col gap-2">
      <li><Link href="#">Share Location</Link></li>
      <li><Link href="#">Order Tracking</Link></li>
      <li><Link href="#">Size Guide</Link></li>
      <li><Link href="#">FAQS</Link></li>
    </ul>
  </div>
  <div className="flex flex-col gap-3">
    <h1 className="font-bold md:mt-4">Legal</h1>
    <ul className="flex flex-col gap-2">
      <li><Link href="#">Terms & Conditions</Link></li>
      <li><Link href="#">Privacy Policy</Link></li>
    </ul>
  </div>
</div>

        </div>
    )
}