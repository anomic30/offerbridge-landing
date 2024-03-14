import Image from "next/image";
import ticks from "../../assets/icons/ticks.svg";
import spike from "../../assets/icons/redSpike.svg";
import panda from "../../assets/images/panda.png";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section className="w-full relative bg-[#F7F9FB]">
      <section className="w-full mx-auto px-[1rem] md:px-[2rem] max-w-screen-lg py-10 md:py-20">
        <p className="uppercase text-center text-[12px] font-semibold tracking-widest">
          PRICING
        </p>
        <h2 className="text-center text-3xl font-semibold font-epilogue mt-6">
          Create the perfect experience for your applicants.
        </h2>
        <p className="text-center text-sm mt-6 text-app">
          <strong>$200 off</strong> for first 2000 customers <strong> (only 8 left)</strong>
        </p>
        <div className="mt-10 md:mt-20 w-full grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-[5%]">
          <div className="bg-white p-8 rounded-xl relative max-w-lg">
            <div className="absolute top-0 left-8 bg-gray-100 py-1 px-4">
              <p className="text-xs font-medium">BEST FOR SMALL TEAMS</p>
            </div>
            <div className="flex items-end gap-3 mt-2">
              <s className="text-xl"><span className="text-app text-xl font-bold">$99</span></s>
              <h3 className="text-5xl font-bold">
                $69
              </h3>
              <p className="text-gray-300 text-xl">USD</p>
            </div>
            
            <div className="grid grid-cols-1 gap-4 mt-10">
              <div className="flex items-center gap-2">
                <Image src={ticks} alt="Ticks" />
                <p className="text-sm font-semibold">
                  Unlimited Interview Scheduling
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={ticks} alt="Ticks" />
                <p className="text-sm font-semibold">
                  One Interviewer allowed
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={ticks} alt="Ticks" />
                <p className="text-sm font-semibold">
                  24 hours email support
                </p>
              </div>
            </div>
            <Button variant="outline" className="w-full text-app rounded-lg border-app mt-10">
              Get Offer Bridge - Paid Monthly
            </Button>
          </div>
          <div className="bg-white p-8 rounded-xl relative max-w-lg">
            <div className="absolute top-0 left-8 bg-app py-1 px-4">
              <p className="text-xs font-medium text-white">FOUNDERS CHOICE</p>
            </div>
            <div className="flex items-end gap-3 mt-2">
              <s className="text-xl"><span className="text-app text-xl font-bold">$499</span></s>
              <h3 className="text-5xl font-bold">
                $299
              </h3>
              <p className="text-gray-300 text-xl">USD</p>
            </div>
            
            <div className="grid grid-cols-1 gap-4 mt-10">
              <div className="flex items-center gap-2">
                <Image src={ticks} alt="Ticks" />
                <p className="text-sm font-semibold">
                  Unlimited Interview Scheduling
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={ticks} alt="Ticks" />
                <p className="text-sm font-semibold">
                  One Interviewer allowed
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={ticks} alt="Ticks" />
                <p className="text-sm font-semibold">
                  24 hours email support
                </p>
              </div>
            </div>
            <Button className="w-full bg-app hover:bg-app rounded-lg border-app mt-10">
              Get Offer Bridge - Paid Monthly
            </Button>
          </div>
        </div>
      </section>
      <section className="w-full mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl py-10 md:py-20 text-center">
        <Image src={spike} alt="Spike" className="mx-auto"/>
        <p className="mt-6">Literally the <span className="bg-orange-100">easiest, no bullshit ATS tool</span> at fraction of <br className="hidden md:block"/> cost from the traditional options. Highly Recommended!</p>
        <div className="flex items-center justify-center gap-5 mt-6">
          <Image src={panda} alt="Sreetam Panda"/>
          <p>Sreetam Panda, Founder of Suprrlink</p>
        </div>
      </section>
    </section>
  );
};

export default Pricing;
