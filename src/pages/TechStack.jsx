import  { use, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TechStack = () => {
  const [activeSection, setActiveSection] = useState("frontend");
   useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-30% 0px -50% 0px",

      
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);
console.log(activeSection);


   

  return (
    <>
      <Navbar />
      <section className="max-w-4xl mx-auto px-8 py-36 text-center">
        <h1 className="text-4xl font-black text-black mb-14  tracking-tight">
          Technologies Behind My Work
        </h1>

        <p className="text-small  text-[#364153] leading-relaxed  mx-auto max-w-prose">
          I leverage a variety of tools and technologies to build scalable,
          efficient, and user-friendly web applications. Below is not an
          extensive but glimpse of my tech stack
        </p>

        <p className="text-sm text-gray-500 italic mt-12">
          Published in <strong className="">Dec 2025</strong>
        </p>
      </section>

     <section>
  <div className="max-w-6xl mx-auto px-18 bg-amber-00">
    <div className="flex gap-16 items-start">

      {/* LEFT COLUMN – ALL SCROLLING CONTENT */}
      <div className="flex-1 space-y-24">

        <p className="text-gray-700 leading-relaxed max-w-2xl">
          Over time, I’ve built a frontend-focused stack that allows me to take
          projects from idea to implementation. My work revolves around
          designing clear user interfaces, structuring components thoughtfully,
          and choosing tools that prioritize simplicity, performance, and
          maintainability.
        </p>

        <section
          id="frontend"
          className="scroll-mt-32 max-w-2xl"
        >
          <h2 className="text-3xl font-bold mb-8">Frontend</h2>

          <p className="max-w-prose mb-6">
            I start by creating wireframes and skeleton mockups using simple
            tools like paper sketches and Excalidraw. Once the structure is
            clear, I move to Figma to refine layouts and visual hierarchy.
          </p>

          <p className="max-w-prose mb-6">
            For implementation, I build single-page applications using React
            with Vite. Navigation is handled using React Router for client-side
            routing.
          </p>

          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>React</li>
            <li>Vite</li>
            <li>React Router (client-side routing)</li>
          </ul>

          <p className="max-w-prose">
            For data fetching, I use Axios and manage async state carefully at
            the component level.
          </p>
        </section>

        <section
          id="Tools"
          className="scroll-mt-32 max-w-2xl"
        >
          <h2 className="text-3xl font-bold mb-8">Tools</h2>
          <p> I use a variety of tools to enhance my development workflow and
              ensure code quality. These include:</p>

          <ul className="list-disc pl-5 space-y-2 mb-6 mt-3">
            <li>VS Code</li>
            <li>Git and GitHub</li>
           
            <li>Chrome DevTools</li>
          </ul>
        </section>

        <section
          id="Other"
          className="scroll-mt-32 max-w-2xl mb-36"
        >
          <h2 className="text-3xl font-bold mb-8">Others</h2>

          <ul className="list-disc pl-5 space-y-2">
            <li>Postman</li>
            <li>npm</li>
            <li>Prettier</li>
          </ul>
        </section>

      </div>

      {/* RIGHT COLUMN – STICKY TOC */}
      <aside className="w-64 sticky top-22 ">
        
        <ul className="border rounded-lg p-6 text-sm space-y-3 ">
          <h1 className="">TABLE OF CONTENT</h1>
          <li>
            <a 
          href="#frontend"
          onClick={() => setActiveSection("frontend")}

          className={activeSection === "frontend"
          ? 'text-[#6238db] font-bold'
          : 'text-gray-500 hover:text-black'}>
            Frontend
          </a>
          </li>


          <li><a href="#Tools"
          onClick={() => setActiveSection("Tools")}

          className={activeSection === "Tools"
          ? 'text-[#6238db] font-bold'
          : 'text-gray-500 hover:text-black'}>
            Tools
          </a></li>
          <li><a href="#Other"
           onClick={() => setActiveSection("Other")}

           className={activeSection === "Other"
           ? 'text-[#6238db] font-bold'
           : 'text-gray-500 hover:text-black'}>
            Others
          </a></li>
        </ul>
      </aside>

    </div>
  </div>
</section>

      <Footer />
    </>
  );
};

export default TechStack;
