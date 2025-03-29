import AboutMe from "@/components/about-me";
import Skills from "@/components/skills";
import SoftSkills from "@/components/soft-skills";

export default function Home() {
  return (
    <div className="mt-28  px-10">
    <AboutMe />
    <Skills />
    <SoftSkills />
    </div>
  );
}
