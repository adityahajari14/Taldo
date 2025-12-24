import Hero from "@/components/home/Hero";
import WhyGermany from "@/components/home/WhyGermany";
import StartCareer from "@/components/home/StartCareer";
import SuccessStories from "@/components/home/SuccessStories";
import ProgramOverview from "@/components/home/ProgramOverview";
import FAQ from "@/components/FAQ";
import Webinar from "@/components/home/Webinar";


export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <Hero />
      <WhyGermany />
      <StartCareer />
      <SuccessStories />
      <ProgramOverview />
      <Webinar/>
      <FAQ/>
    </main>
  );
}

