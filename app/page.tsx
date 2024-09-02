import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div className="flex justify-center min-w-[28rem]">
    <div className="text-center p-10 text-xl leading-10 text-purple-900">
      <div className="flex justify-center p-10">
      <Image className="pointer-events-none" src="/taco-bell-8.svg" alt="image" width={100} height={100} />  
      </div>
      <h2 className="font-extrabold text-2xl pt-8">Do You Love Taco Bell?</h2>
      <p className="font-light">We want to hear your feedback!</p>
      <p className="font-bold">Follow The Steps Below to Claim $100 Taco Bell Credit</p>
      <div className="flex flex-col justify-text text-lg leading-8 font-light p-4 items-center">
        <p className="pr-8">1. Click the link given below</p>
        <p className="pr-1">2. Enter your email & basic info</p>
        <p className="pl-4">3. Complete recommended deals</p>
        <p className="pr-3">4. Claim your Taco Bell credit!</p>
        <Link href={'https://glitchy.go2cloud.org/aff_c?offer_id=655&aff_id=2431'} target="_blank">
        <button className="pl-8 pr-8 pt-4 pb-4 mt-12 text-3xl font-normal bg-purple-900 text-white rounded transition w-fit">Start</button>
        </Link>
    
      </div>
      <p className="font-light text-xs">Offer Only Available in US | UK | CA | AU</p>
    </div>
    </div>
  );
}
