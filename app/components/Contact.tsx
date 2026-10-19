import { MoveUpRight, ArrowUpRight, ArrowDown } from "lucide-react";
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/LaidaR3",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/laida-rusinovci-b3794421b/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full overflow-hidden bg-[#F8F7F4] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto w-full max-w-5xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#857B70]">
            06 / Get in Touch
          </p>

          <h2 className="font-editorial text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-[#242424]">
            Let's <span className="italic">connect.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-[#625E58]">
            I'm always open to new opportunities,
            collaborations, and meaningful conversations
            about software development and cybersecurity.
          </p>
        </div>

        {/* Contact Actions */}
        <div className="flex flex-col items-center gap-8">

          {/* Email */}
          < a
            href="mailto:rusinovcilaida13@gmail.com"
            className="group inline-flex max-w-full items-center justify-center gap-3 border-b border-[#242424] pb-2 text-center transition-opacity hover:opacity-50"
          >
            <span className="font-editorial min-w-0 break-all text-[clamp(1.15rem,4vw,2.5rem)] italic text-[#242424]">
              rusinovcilaida13@gmail.com
            </span>

            <MoveUpRight
              size={30}
              strokeWidth={1.2}
              aria-hidden="true"
              className="shrink-0 text-[#242424] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-b border-[#857B70] pb-2 text-[11px] uppercase tracking-[0.2em] text-[#242424] transition-opacity duration-300 hover:opacity-50"
              >
                {link.name}

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>

          {/* Download CV */}
          <a
            href="/Laida_Rusinovci_CV.pdf"
            download="Laida_Rusinovci_CV.pdf"
            className="group mt-4 inline-flex items-center justify-center gap-3 border border-[#242424] px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-[#242424] transition-all duration-300 hover:bg-[#242424] hover:text-[#F8F7F4]"
          >
            Download CV

            <ArrowDown
              size={17}
              strokeWidth={1.5}
              aria-hidden="true"
              className="shrink-0 transition-transform duration-300 group-hover:translate-y-1"
            />
          </a>

        </div>
      </div>
    </section >
  );
}
