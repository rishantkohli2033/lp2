import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div className="flex justify-center min-w-[28rem]">
    <div className="text-center p-20 text-xl leading-10 text-black">
      <div className="flex justify-center">
      <Image className="pointer-events-none" src="/image2.png" alt="image" width={220} height={20} />  
      </div>
      <h2 className="font-light text-2xl pt-8">Click Below to get your Shein gift card</h2>
      <div className="flex flex-col justify-text text-lg leading-8 font-light pt-8 p-4 items-center">
        <p className="pr-8">1. Click the link given below</p>
        <p className="pr-1">2. Enter your email & basic info</p>
        <p className="pl-4">3. Complete recommended deals</p>
        <p className="pr-2">4. Receive your $750 gift card</p>
        <Link href={'https://glitchy.go2cloud.org/aff_c?offer_id=76&aff_id=2431&source=jobs'} target="_blank">
        <button className="pl-8 pr-8 pt-4 pb-4 mt-12 text-3xl font-normal bg-black text-white rounded transition w-fit">Start</button>
        </Link>
    
      </div>
      
    </div>
    </div>
  );
}
