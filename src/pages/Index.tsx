import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ContentSections from "@/components/ContentSections";
import ApplySection from "@/components/ApplySection";

export default function Index() {
  return (
    <div className="min-h-screen bg-slate-50 font-ibm text-slate-900">
      <NavBar />
      <HeroSection />
      <ContentSections />
      <ApplySection />
    </div>
  );
}