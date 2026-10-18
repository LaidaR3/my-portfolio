
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#EEECE7] px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-[#857B70]">
            01 / Introduction
          </p>

          <h2 className="font-editorial text-6xl leading-none md:text-8xl">
            A little <span className="italic">about me.</span>
          </h2>
        </div>

        {/* About content */}
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
          {/* Text */}
          <div>
            <p className="font-editorial mb-8 text-3xl leading-snug md:text-4xl">
              Combining software development with
              a passion for cybersecurity.
            </p>

            <div className="space-y-6 text-sm leading-8 text-[#625E58] md:text-base">
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

            {/* Decorative line */}
            <div className="mt-10 h-px w-20 bg-[#A89C8C]" />

            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#857B70]">
              Based in Prishtina, Kosovo
            </p>
          </div>

          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-4 -top-4 h-full w-full border border-[#B9B1A6] md:-left-6 md:-top-6" />

            <div className="relative aspect-[4/5] overflow-hidden bg-[#DDD8D0]">
              <Image
                src="/images/LaidaR-Image.jpg"
                alt="Laida Rusinovci"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale transition duration-700 hover:grayscale-0"
              />
            </div>

            <p className="mt-5 text-right font-editorial text-xl italic text-[#857B70]">
              The person behind the work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
