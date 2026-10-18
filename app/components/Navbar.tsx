
export default function Navbar() {
  return (
    <header className="border-b border-[#DDD9D2]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        <a
          href="#home"
          className="font-editorial text-3xl font-semibold"
        >
          LR.
        </a>

        <div className="hidden gap-10 text-[11px] uppercase tracking-[0.18em] md:flex">
          <a href="#about" className="hover:opacity-50">
            About
          </a>
          <a href="#experience" className="hover:opacity-50">
            Experience
          </a>
          <a href="#projects" className="hover:opacity-50">
            Projects
          </a>
          <a href="#contact" className="hover:opacity-50">
            Contact
          </a>
        </div>

        <span className="text-[10px] uppercase tracking-widest">
          Portfolio / 2026
        </span>
      </nav>
    </header>
  );
}
