
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#242424]">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
