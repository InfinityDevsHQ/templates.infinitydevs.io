import AllTemplates from "$/components/landing-page/all-templates";
import HeroSection from "$/components/landing-page/hero-section";
import LatestTemplates from "$/components/landing-page/latest-templates";
import ContactUs from "../components/landing-page/contact-us";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <LatestTemplates />
        <AllTemplates />
        <ContactUs />
      </main>
    </>
  );
}
