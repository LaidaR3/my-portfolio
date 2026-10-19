
export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100svh-72px)] items-center justify-center overflow-hidden bg-[#F8F7F4] px-5 py-12 text-center sm:px-8 sm:py-16 lg:px-12"
    >
      <div className="mx-auto w-full max-w-5xl">

        {/* Availability Indicator */}
      

        {/* Professional Label */}
        <p className="mb-7 text-[9px] uppercase leading-5 tracking-[0.18em] text-[#857B70] sm:mb-8 sm:text-[10px] sm:tracking-[0.3em]">
          Software Development & Cybersecurity
        </p>

        {/* Name */}
        <h1 className="font-editorial text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-[-0.04em] text-[#242424]">
          <span className="block">Laida</span>
          <span className="mt-2 block italic">
            Rusinovci.
          </span>
        </h1>

        {/* Divider */}
        <div className="mx-auto mt-9 h-px w-full max-w-xl bg-[#D8D4CE] sm:mt-11" />

        {/* Introduction */}
        <p className="font-editorial mx-auto mt-8 max-w-xl text-[clamp(1.15rem,2vw,1.5rem)] leading-[1.45] text-[#242424]">
          Computer Science & Engineering graduate with
          experience in software development and
          cybersecurity, passionate about building secure
          and meaningful digital solutions.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-7">

          <a
            href="#projects"
            className="inline-flex items-center gap-3 border-b border-[#242424] pb-2 text-[10px] uppercase tracking-[0.2em] transition-opacity hover:opacity-50"
          >
            View My Work <span aria-hidden="true">↗</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 border-b border-[#857B70] pb-2 text-[10px] uppercase tracking-[0.2em] text-[#857B70] transition-opacity hover:opacity-50"
          >
            Get in Touch <span aria-hidden="true">↗</span>
          </a>

        </div>
      </div>
    </section>
  );
}
