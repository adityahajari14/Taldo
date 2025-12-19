import Hero from "@/components/home/Hero";
import WhyGermany from "@/components/home/WhyGermany";
import StartCareer from "@/components/home/StartCareer";
import SuccessStories from "@/components/home/SuccessStories";
import ProgramOverview from "@/components/home/ProgramOverview";
import Newsletter from "@/components/home/Newsletter";
import OtherBlogs from "@/components/OtherBlogs";
import blogs from "@/data/blogs.json";


export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <Hero />
      <WhyGermany />
      <StartCareer />
      <SuccessStories />
      <ProgramOverview />
      <Newsletter />
      <OtherBlogs blogs={blogs} heading="Blogs" />
    </main>
  );
}

