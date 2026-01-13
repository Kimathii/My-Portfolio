import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
// import About from "@/components/about";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
     {/* <About /> */}
     <Experience />
      <Projects />
      <Contact />
    </main>
  );
}