import Faqs from "./components/faqs/faq";
import Features from "./components/features/features";
import FooterBanner from "./components/footer/banner";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Offer from "./components/offer/offer";
import Pricing from "./components/pricing/pricing";
import Stats from "./components/stats/stats";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <Hero />
      <Stats />
      <Offer />
      <Features />
      <Pricing />
      <Faqs fontSize="text-3xl" />
      <FooterBanner />
      <Footer />
    </main>
  );
}