
export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto max-w-7xl px-6 pb-24 pt-24 text-center md:px-12 md:pt-32"
    >
      <p className="mb-8 text-[11px] uppercase tracking-[0.35em] text-[#857B70]">
        Software Development & Cybersecurity
      </p>

      <h1 className="font-editorial text-[clamp(5rem,13vw,12rem)] font-normal leading-[0.8] tracking-[-0.055em]">
        Laida
        <br />
        <span className="italic">Rusinovci.</span>
      </h1>

      <div className="mx-auto mt-16 max-w-2xl border-t border-[#D8D4CE] pt-8">
        <p className="font-editorial text-2xl leading-relaxed md:text-3xl">
          Computer Science & Engineering graduate
          with experience in software development
          and cybersecurity, passionate about building
          secure and meaningful digital solutions.
        </p>
      </div>

      <a
        href="#about"
        className="mt-12 inline-block border-b border-[#242424] pb-2 text-xs uppercase tracking-[0.2em] transition hover:opacity-50"
      >
        Discover More ↓
      </a>
    </section>
  );
}
