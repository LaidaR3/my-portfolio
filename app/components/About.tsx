
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-[#EEECE7] px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-12"
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* Section Heading */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-[#857B70] sm:text-[11px]">
            01 / Introduction
          </p>

          <h2 className="font-editorial text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-[#242424]">
            A little{" "}
            <span className="italic">about me.</span>
          </h2>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-20">

          {/* Text */}
          <div className="min-w-0">
            <h3 className="font-editorial mb-6 text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.15] text-[#242424] md:mb-8">
              Combining software development with
              a passion for cybersecurity.
            </h3>

            <div className="space-y-5 text-[13px] leading-[1.85] text-[#625E58] sm:text-sm md:space-y-6 lg:text-[15px]">
              <p>
                I'm a Computer Science and Engineering graduate
                specializing in Software Systems Engineering
                at UBT College.
              </p>

              <p>
                My professional journey began in software
                development, where I gained experience
                building responsive web applications
                using React, JavaScript, C#, and .NET.
              </p>

              <p>
                My interest in cybersecurity led me to
                the British Council's CybHer Programme
                at LinkPlus IT, where I gained practical
                knowledge in threat identification,
                vulnerability assessment, risk management,
                and secure development practices.
              </p>

              <p>
                Today, I'm focused on continuing to grow
                in software engineering and cybersecurity,
                combining development skills with
                security-focused thinking.
              </p>
            </div>

            {/* Decorative Line */}
            <div className="mt-8 h-px w-20 bg-[#A89C8C] md:mt-10" />

            <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-[#857B70] sm:text-xs">
              Based in Prishtina, Kosovo
            </p>
          </div>

          {/* Portrait */}
          <div className="mx-auto w-full max-w-[320px] pt-4 pl-4 sm:max-w-[380px] sm:pt-5 sm:pl-5 md:max-w-none md:pt-6 md:pl-6">

            <div className="relative">
              {/* Decorative Border */}
              <div className="pointer-events-none absolute -left-4 -top-4 h-full w-full border border-[#B9B1A6] sm:-left-5 sm:-top-5 md:-left-6 md:-top-6" />

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#DDD8D0]">
                <Image
                  src="/images/LaidaR-Image.jpg"
                  alt="Laida Rusinovci"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 450px"
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>
            </div>

            {/* Image Caption */}
            <p className="font-editorial mt-5 text-right text-lg italic text-[#857B70] sm:text-xl">
              The person behind the work.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
