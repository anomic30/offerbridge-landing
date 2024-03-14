import Image from "next/image";
import heroImg from "../../assets/images/hero.svg";
import rays from "../../assets/icons/rays.svg";
import ticks from "../../assets/icons/ticks.svg";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRightFromSquare } from "lucide-react";
import Link from 'next/link'
import { Accordion } from "@radix-ui/react-accordion";

const Hero = () => {
  return (
    <section className="w-full relative bg-[#F7F9FB]">
      <section className="w-full min-h-[calc(100vh-80px)] mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl pt-20 pb-20 text-left">
        <div className="w-full md:w-3/5 py-10">
          <h1 className="text-5xl font-bold leading-snug">Set Up Your <i className="font-extrabold">Interview <br /> Pipeline</i> In <br className="md:hidden"/> <span className="text-app relative">1 Minute <Image src={rays} alt="rays" className="absolute -right-3 top-2" /></span></h1>
          <p className="mt-6">Hiring made easy! Ditch complicated tracking software. Build and manage <br /> interview pipelines with one shareable link.</p>

          <div className="grid grid-cols-1 gap-4 mt-6">
            <div className="flex items-center gap-2">
              <Image src={ticks} alt="Ticks"/>
              <p className="text-sm font-semibold">1 minute Hasslefree setup</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={ticks} alt="Ticks"/>
              <p className="text-sm font-semibold">Integrates with calendly, Google Meets, Zoom, and more...</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={ticks} alt="Ticks"/>
              <p className="text-sm font-semibold">No recurring fees - Unlimited interviews</p>
            </div>
          </div>
          <div className="max-w-fit group mt-12">
            <Button className="w-auto rounded-lg bg-app hover:shadow-md hover:bg-app hover:shadow-red-300 transition-all duration-300">
              Try For Free
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition duration-200" />
            </Button>
          </div>
        </div>
      </section>
      <Image src={heroImg} priority={true} alt="Hero" className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 w-2/5 rounded-tl-lg" />
    </section>
  );
};

export default Hero;
