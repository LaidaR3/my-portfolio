
export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100svh-80px)] items-center justify-center bg-[#F8F7F4] px-5 py-12 text-center sm:px-8 md:py-16 lg:px-12"
    >
      <div className="mx-auto w-full max-w-5xl">

        {/* Small Heading */}
        <p className="mb-6 text-[9px] uppercase tracking-[0.18em] text-[#857B70] sm:mb-8 sm:text-[10px] sm:tracking-[0.3em]">
          Software Development & Cybersecurity
        </p>

        {/* Name */}
        <h1 className="font-editorial text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.88] tracking-[-0.04em] text-[#242424]">
          <span className="block">
            Laida
          </span>

          <span className="mt-1 block italic sm:mt-2">
            Rusinovci.
          </span>
        </h1>

        {/* Divider */}
        <div className="mx-auto mt-8 h-px w-full max-w-xl bg-[#D8D4CE] sm:mt-10" />

        {/* Description */}
        <p className="font-editorial mx-auto mt-7 max-w-xl text-[clamp(1.15rem,2vw,1.55rem)] leading-[1.4] text-[#242424] sm:mt-9">
          Computer Science & Engineering graduate with
          experience in software development and cybersecurity,
          passionate about building secure and meaningful
          digital solutions.
        </p>

        {/* Button */}
        <a
          href="#about"
          className="mt-9 inline-flex items-center gap-3 border-b border-[#242424] pb-2 text-[10px] uppercase tracking-[0.2em] transition-opacity hover:opacity-50 sm:mt-11"
        >
          Discover More
          <span aria-hidden="true">↗</span>
        </a>

      </div>
    </section>
  );
}
