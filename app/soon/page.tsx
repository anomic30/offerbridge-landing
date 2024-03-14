import Image from "next/image";
import FooterBanner from "../components/footer/banner";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import rays from "../assets/icons/rays.svg";

export default function Soon() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <section className="w-full min-h-[calc(100vh-80px)] mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl pt-20 pb-20 text-center flex flex-col justify-center">
      <h1 className="text-5xl lg:text-7xl font-bold leading-snug transition-all duration-500">Coming <br className="block md:hidden"/> <i className="font-extrabold"><span className="text-app relative">Soon <Image src={rays} alt="rays" className="absolute -right-4 lg:-right-6 top-2 w-4 lg:w-6" /></span></i></h1>
      </section>
      <FooterBanner />
      <Footer />
    </main>
  );
}