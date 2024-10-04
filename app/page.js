import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
    <div className=" flex flex-col lg:flex-row mb-24 gap-12 items-center justify-between">
      <div className="lg:w-1/2">
<h1 className="text-7xl pb-6 gradient-title">Simplify Your  Scheduling</h1>
<p className="text-xl text-gray-600 mb-10">
  Schedulerr helps you to manage your time effectively.Create events ,set your availability,and let others book time with you seamlessly.  
</p>
<Link href="/dashboard">
<Button className="text-lg" size="lg">Get Started<ArrowDown className="ml-2 h-5 w-5" /></Button>
</Link>
      </div >
      <div className="lg:w-1/2 flex justify-center ">
      <div className="relative w-full max-w-md aspect-square">
        <Image src="/poster.png" alt="poster image" layout="fill" objectFit="contain" className="w-auto"/>
      </div>

      </div>
    </div>

    </main>
  );
}
