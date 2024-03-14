import Image from "next/image";
import cobra from "../../assets/images/cobra.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FooterBanner = () => {
  return (
    <section className="w-full mx-auto px-[1rem] md:px-[2rem] py-36 md:py-24 text-center bg-[#1D2534] relative overflow-y-hidden">
      <Image src={cobra} alt="Not Fulltime" className="absolute inset-0 bottom-0 left-0 w-full md:w-screen object-cover md:object-fill" />
      <p className="text-white font-epilogue text-5xl md:text-6xl leading-tight z-10 relative">
        One Link, One ATS, One Fee!
      </p>
      <p className="text-sm mt-6 text-white font-light z-10 relative">
        Conduct interviews, Schedule Assessments, Take Rounds, and Send Offer Letter. All of this here!
      </p>
      <div className="mt-6 z-10 relative">
        <Link href="/soon" className="group">
          <Button className="w-full sm:w-auto rounded-lg mx-1 bg-white text-[#1D2534] hover:bg-white">
            Try For Free <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition duration-200"/>
          </Button>
        </Link>
        <Link href="mailto:hello@notfulltime.io">
          <Button variant="outline" className="mt-4 w-full sm:w-auto rounded-lg mx-1 bg-transparent text-white">
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default FooterBanner