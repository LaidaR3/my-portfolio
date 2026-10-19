
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-[#EEECE7] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto w-full max-w-5xl">

        {/* Section Heading */}
        <div className="mb-10 text-center sm:mb-12 lg:mb-14">
          <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-[#761f22]">
            01 / Introduction
          </p>

          <h2 className="font-editorial text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-[#242424]">
            A little <span className="italic">about me.</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">

          {/* Text */}
          <div className="min-w-0">
            <h3 className="font-editorial mb-5 text-[clamp(1.6rem,2.5vw,2.1rem)] leading-[1.2] text-[#242424]">
              Combining software development with
              a passion for cybersecurity.
            </h3>

            <div className="space-y-4 text-[13px] leading-[1.75] text-[#625E58] sm:text-sm">
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
            <div className="mt-7 h-px w-16 bg-[#761f22]" />

            <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-[#857B70]">
              Based in Prishtina, Kosovo
            </p>
          </div>

          {/* Portrait */}
          <div className="mx-auto w-full max-w-[280px] pt-4 pl-4 sm:max-w-[320px] md:max-w-[340px] lg:max-w-[360px]">

            <div className="relative">
              {/* Decorative Frame */}
              <div className="pointer-events-none absolute -left-4 -top-4 h-full w-full border border-[#761f22]" />

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#DDD8D0]">
                <Image
                  src="/images/LaidaR-Image.jpg"
                  alt="Laida Rusinovci"
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 340px, 360px"
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>
            </div>

            {/* Caption */}
            <p className="font-editorial mt-4 text-right text-base italic text-[#857B70] sm:text-lg">
              The person behind the work.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
