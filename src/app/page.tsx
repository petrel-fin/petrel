import Footer from "~/components/footer/footer";
import HomeAbout from "~/components/home/home-about";
import HomeCta from "~/components/home/home-cta";
import HomeFaq from "~/components/home/home-faq";
import HomeFeatures from "~/components/home/home-features";
import HomeHero from "~/components/home/home-hero";
import Navbar from "~/components/navbar/navbar";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center">
      <div className="mx-6 flex flex-col">
        <Navbar />
        <HomeHero />
        <HomeFeatures />
        <HomeAbout />
        <HomeFaq />
        <HomeCta />
        <Footer />
      </div>
    </div>
  );
}
