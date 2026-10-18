
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#242424]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certifications />
    </main>
  );
}
