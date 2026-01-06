import Image from "next/image";

// ABOUT CONTENT - Edit this section
const aboutContent = {
  title: "",
  paragraphs: [
    "My journey in Computer Engineering has been all about turning ideas into reality. While I understand hardware, my passion lies in software; crafting interfaces and experiences that bring concepts to life.",
    "After hands-on experience at HNG Connect and Kodo Kai, I specialize in building interactive web experiences that are both functional and delightful, with a focus on frontend development and user-centric design.",
  ],
  image: "/images/about.png",
};

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-black text-white flex items-center overflow-hidden py-20 lg:py-0"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
        {/* Grid layout - Text on left, Image on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Section title and content */}
          <div className="flex flex-col gap-8 lg:gap-12">
            {/* Section title */}
            <h2 className="text-4xl lg:text-6xl font-bold">{aboutContent.title}</h2>

            {/* Content text */}
            <div className="flex flex-col gap-6 text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right side - Workspace illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-2xl aspect-square">
              <Image
                src={aboutContent.image}
                alt="Workspace illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;