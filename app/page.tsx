import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
     <About />
     <Experience />
      <Projects />
      <div id="contact" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <h1 className="text-4xl">Contact Section</h1>
      </div>
    </main>
  );
}