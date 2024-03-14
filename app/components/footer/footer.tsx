import Image from "next/image"
import Link from "next/link";
import brandLogo from "../../assets/icons/brandLogo.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import twitter from "../../assets/icons/twitter.svg";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <section className="w-full mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl pb-10 md:pb-20 ">
      <Image src={brandLogo} alt="Offer Bridge" priority />
      <Link href="https://notfulltime.io" className="text-[8px]">By Not Fulltime</Link>
      <div className="flex items-center justify-between flex-wrap mt-8">
        <p className="font-medium">World&apos;s Easiest Applicant Tracking Software for SMBs and small teams.</p>
        <div className="flex items-center gap-5 pt-4 md:pt-0">
          <Link href="https://www.linkedin.com/company/notfulltime">
            <Image src={linkedin} alt="LinkedIn" />
          </Link>
          <Link href="https://twitter.com/not_fulltime">
            <Image src={twitter} alt="Twitter" />
          </Link>
        </div>
      </div>
      <div className="flex items-center flex-wrap justify-between mt-8">
        <div className="flex gap-5 items-center">
          <Link href="/" className="font-medium">Terms & Conditions</Link>
          .
          <Link href="/" className="font-medium">Terms & Conditions</Link>
        </div>
        <div className="flex gap-2 items-center pt-4 md:pt-0">
          <Mail />
          <Link href="mailto:hello@notfulltime.io" className="font-medium underline">hello@notfulltime.io</Link>
        </div>
      </div>
    </section>
  )
}

export default Footer