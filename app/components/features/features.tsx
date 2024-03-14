import Image from "next/image";
import feat1 from "../../assets/images/feat1.png";
import feat2 from "../../assets/images/feat2.png";
import feat3 from "../../assets/images/feat3.png";
import ticks from "../../assets/icons/ticks.svg";
import greenTicks from "../../assets/icons/greenTick.svg";
import yellowTicks from "../../assets/icons/yellowTick.svg";
import redSnake from "../../assets/images/redSnake.svg";
import yellowSnake from "../../assets/images/yellowSnake.svg";
import greenSnake from "../../assets/images/greenSnake.svg";
import spike from "../../assets/icons/redSpike.svg";
import yellowSpike from "../../assets/icons/yellowSpike.svg";
import greenSpike from "../../assets/icons/greenSpike.svg";
import sahil from "../../assets/images/sahil.png";
import sunil from "../../assets/images/sunil.png";
import agniva from "../../assets/images/agniva.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Features = () => {
  return (
    <>
      <section className="w-full relative" id="features">
        <Image src={redSnake} alt="vector" className="absolute inset-0 -z-10 bottom-0 left-0 w-full h-full md:w-screen object-cover md:object-fill"/>
        <section className="w-full mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl py-10 md:py-20">
          <div className="mt-10 md:mt-20 w-full grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-[5%]">
            <Image src={feat1} alt="Feat1"/>
            <div>
              <p className="uppercase text-[12px] text-app font-semibold tracking-widest mt-2">CALENDLY INTEGRATED</p>
              <h2 className="text-5xl mt-6 font-bold leading-snug">Automated Interview Scheduling</h2>
              <p className="mt-6">Stop sending multiple Calendly, meets, or zoom links to Applicants daily</p>

              <div className="grid grid-cols-1 gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <Image src={ticks} alt="Ticks"/>
                  <p className="text-sm font-semibold">1 Click Calendly Integration</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={ticks} alt="Ticks"/>
                  <p className="text-sm font-semibold">Add multiple interviewers</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={ticks} alt="Ticks"/>
                  <p className="text-sm font-semibold">Automatic Unique Link Sharing</p>
                </div>
              </div>
              <div className="max-w-fit group mt-12">
                <Button className="w-auto rounded-lg bg-app hover:shadow-md hover:bg-app hover:shadow-red-300 transition-all duration-300">
                  Try For Free
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition duration-200" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="w-full mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl py-10 md:py-20 text-center">
        <Image src={spike} alt="Spike" className="mx-auto"/>
        <p className="mt-6">Why hasn&apos;t this existed before for small businesses that <br className="hidden md:block"/> are <span className="bg-orange-100">unable to afford tools like Lever and Darwin Box?</span></p>
        <div className="flex items-center justify-center gap-5 mt-6">
          <Image src={sahil} alt="Sahil Godara"/>
          <p>Sahil Godara, Founder of Not Fulltime</p>
        </div>
      </section>

      <section className="w-full relative">
        <Image src={yellowSnake} alt="vector" className="absolute inset-0 -z-10 bottom-0 left-0 w-full h-full md:w-screen object-cover md:object-fill"/>
        <section className="w-full mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl py-10 md:py-20">
          <div className="mt-10 md:mt-20 w-full grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-[5%]">
            <div>
              <p className="uppercase text-[12px] text-[#f6a867] font-semibold tracking-widest mt-2">CANDIDATE INBOX</p>
              <h2 className="text-5xl mt-6 font-bold leading-snug">Chat with Selected Applicants</h2>
              <p className="mt-6">No more linkedIn or Gmail conversations, chat seamlessly with applicants on offer bridge</p>

              <div className="grid grid-cols-1 gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <Image src={yellowTicks} alt="Ticks"/>
                  <p className="text-sm font-semibold">Offer Bridge Chat - Notified via Mail</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={yellowTicks} alt="Ticks"/>
                  <p className="text-sm font-semibold">Task Reminders For Candidates</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={yellowTicks} alt="Ticks"/>
                  <p className="text-sm font-semibold">Broadcast Messages For Candidate Pools</p>
                </div>
              </div>
              <div className="max-w-fit group mt-12">
                <Button className="w-auto rounded-lg bg-[#f6a867] hover:shadow-md hover:bg-[#f6a867] hover:shadow-orange-200 transition-all duration-300">
                  Try For Free
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition duration-200" />
                </Button>
              </div>
            </div>
            <Image src={feat2} alt="Feat2"/>
          </div>
        </section>
      </section>
      <section className="w-full mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl py-10 md:py-20 text-center">
        <Image src={yellowSpike} alt="Spike" className="mx-auto"/>
        <p className="mt-6">As a small business owner, the <span className="bg-orange-100">speed to set up pipeline <br className="hidden md:block"/> and direct chat with candidate</span> are a game-changer.</p>
        <div className="flex items-center justify-center gap-5 mt-6">
          <Image src={sunil} alt="Sunil Panwar"/>
          <p>Sunil Panwar, Founder of Sanchar</p>
        </div>
      </section>

      <section className="w-full relative">
        <Image src={greenSnake} alt="vector" className="absolute inset-0 -z-10 bottom-0 left-0 w-full h-full md:w-screen object-cover md:object-fill"/>
        <section className="w-full mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl py-10 md:py-20">
          <div className="mt-10 md:mt-20 w-full grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-[5%]">
            <Image src={feat3} alt="Feat3"/>
            <div>
              <p className="uppercase text-[12px] text-[#00A58E] font-semibold tracking-widest mt-2">SHARE CONTRACTS</p>
              <h2 className="text-5xl mt-6 font-bold leading-snug">Share Offer Letter Once Selected</h2>
              <p className="mt-6">No need to manually send offer letters and contracts, one click and we share it for you</p>

              <div className="grid grid-cols-1 gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <Image src={greenTicks} alt="Ticks"/>
                  <p className="text-sm font-semibold">Manual Offer Letter Sharing</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={greenTicks} alt="Ticks"/>
                  <p className="text-sm font-semibold">20+ Editable Offer Letter Templates</p>
                </div>
              </div>
              <div className="max-w-fit group mt-12">
                <Button className="w-auto rounded-lg bg-[#00A58E] hover:shadow-md hover:bg-[#00A58E] hover:shadow-emerald-200 transition-all duration-300">
                  Try For Free
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition duration-200" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="w-full mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl py-10 md:py-20 text-center">
        <Image src={greenSpike} alt="Spike" className="mx-auto"/>
        <p className="mt-6">A game-changer for startups needing <br className="hidden md:block"/><span className="bg-orange-100"> budget-friendly alternatives to expensive enterprise solutions.</span></p>
        <div className="flex items-center justify-center gap-5 mt-6">
          <Image src={agniva} alt="Agniva Mahata"/>
          <p>Agniva Mahata, Agency Owner</p>
        </div>
      </section>
    </>
  )
}

export default Features