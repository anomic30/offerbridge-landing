import Image from "next/image";
import brandLogo from "../../assets/icons/brandLogo.svg";
import { ArrowRight, ArrowUpRightFromSquare, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="w-full mx-auto px-[1rem] md:px-[2rem] flex h-20 max-w-screen-2xl items-center justify-between">
        <div className="mr-4 items-start">
          <div className="h-20">
            <Link href="/">
                <Image src={brandLogo} alt="Offer Bridge" priority />
            </Link>
            <Link href="https://notfulltime.io" className="text-[8px]">By Not Fulltime</Link>
          </div>
        </div>
        <div className="hidden flex-grow md:flex justify-center items-center gap-10">
          <Link href="/#features" className="text-sm hover:font-medium transition-all duration-300">Features</Link>
          <Link href="/#pricing" className="text-sm hover:font-medium transition-all duration-300">Pricing</Link>
          <Link href="/#faqs" className="text-sm hover:font-medium transition-all duration-300">FAQs</Link>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" className="hover:text-app rounded-lg">
            Log in{" "}
            <ArrowUpRightFromSquare
              color="#ef4444"
              className="ml-2 h-4 w-4"
            />
          </Button>
          <div className="group">
            <Link href="/soon">
              <Button className="rounded-lg bg-app hover:shadow-md hover:bg-app hover:shadow-red-300 transition-all duration-300">
              Try For Free <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition duration-200"/>
              </Button>
            </Link>
          </div>
        </div>
        <Sheet>
          <SheetTrigger >
            <Button className="md:hidden" variant="ghost">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-3 pt-10">
            <SheetHeader className="text-left">
            <div className="flex flex-col gap-5">
              <Link href="/#features" className="text-md hover:font-medium transition-all duration-300">Features</Link>
              <Link href="/#pricing" className="text-md hover:font-medium transition-all duration-300">Pricing</Link>
              <Link href="/#faqs" className="text-md hover:font-medium transition-all duration-300">FAQs</Link>
            </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Navbar