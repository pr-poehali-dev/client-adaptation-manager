import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ContentSections from "@/components/ContentSections";
import ApplySection from "@/components/ApplySection";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#060c1a] font-ibm text-white">
      <NavBar />
      <HeroSection />
      <ContentSections />
      <ApplySection />
    </div>
  );
}
