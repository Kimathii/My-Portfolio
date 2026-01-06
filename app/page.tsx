import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Other sections */}
      <div id="about" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <h1 className="text-4xl">About Section</h1>
      </div>
      <Projects />
      <div id="contact" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <h1 className="text-4xl">Contact Section</h1>
      </div>
    </main>
  );
}