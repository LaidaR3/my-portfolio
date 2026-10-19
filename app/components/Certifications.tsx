
import { ArrowUpRight } from "lucide-react";

const certifications = [
  {
    number: "01",
    title: "Cyber Threat Management",
    organization: "Cisco Networking Academy",
    year: "2026",
    category: "Cybersecurity",
    link: "https://www.credly.com/badges/bf768a50-2002-4e89-b8c8-36be3f031ad0/linked_in_profile",
  },
  {
    number: "02",
    title: "Ethical Hacker",
    organization: "Cisco Networking Academy",
    year: "2026",
    category: "Cybersecurity",
    link: "https://www.credly.com/badges/42ba656e-65ee-445f-b8ea-f9844ad90a81",
  },
  {
    number: "03",
    title: "Introduction to Cybersecurity",
    organization: "Cisco Networking Academy",
    year: "2026",
    category: "Cybersecurity",
    link: "https://www.credly.com/badges/3eeb7b0a-5c76-4be6-a23a-a7591cc8d764",
  },
  {
    number: "04",
    title: "Governance, Risk & Compliance (GRC)",
    organization: "British Council — CybHer Programme",
    year: "2026",
    category: "Cybersecurity & Data Protection",
    link: "",
  },
  {
    number: "05",
    title: "Junior Frontend Developer",
    organization: "Digital School",
    year: "2020",
    category: "Software Development",
    link: "",
  },
  {
    number: "06",
    title: "Junior App Developer",
    organization: "Digital School",
    year: "2019",
    category: "Software Development",
    link: "",
  },
  {
    number: "07",
    title: "Graphic Design",
    organization: "United Pixels",
    year: "2019",
    category: "Design",
    link: "",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="w-full overflow-hidden bg-[#EEECE7] px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* Section Heading */}
        <div className="mb-12 sm:mb-16">
          <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#857B70] sm:text-[11px]">
            05 / Professional Development
          </p>

          <h2 className="font-editorial text-[clamp(2.8rem,7vw,6rem)] leading-[0.95] tracking-[-0.03em] text-[#242424]">
            Certifications
            <br />
            <span className="italic">& training.</span>
          </h2>

          <p className="mt-8 max-w-xl text-sm leading-7 text-[#625E58]">
            A selection of certifications and professional
            training reflecting my continuous learning
            in cybersecurity, software development,
            and digital technologies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((cert) => (
            <article
              key={cert.number}
              className="group flex min-h-[230px] min-w-0 flex-col justify-between border border-[#D8D4CE] p-6 transition-all duration-300 hover:border-[#A89C8C] hover:bg-[#e1ddd3] sm:p-7 md:p-9"
            >
              <div>
                {/* Category and Number */}
                <div className="mb-8 flex items-start justify-between gap-4">
                  <span className="text-[10px] uppercase leading-5 tracking-[0.15em] text-[#857B70] sm:tracking-[0.2em]">
                    {cert.category}
                  </span>

                  <span className="font-editorial shrink-0 text-xl italic text-[#A89C8C]">
                    {cert.number}
                  </span>
                </div>

                {/* Certification Title */}
                <h3 className="font-editorial text-[clamp(1.8rem,3vw,2.5rem)] leading-tight text-[#242424]">
                  {cert.title}
                </h3>

                {/* Organization */}
                <p className="mt-4 text-sm leading-6 text-[#625E58]">
                  {cert.organization}
                </p>
              </div>

              {/* Year and Credential Link */}
              <div className="mt-8 flex items-center justify-between gap-3 border-t border-[#D8D4CE] pt-5">
                <span className="text-xs text-[#857B70]">
                  {cert.year}
                </span>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-[#242424] transition-opacity duration-300 hover:opacity-50"
                  >
                    View Credential
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="shrink-0 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Closing Statement */}
        <p className="font-editorial mt-16 text-center text-2xl italic text-[#857B70] md:text-3xl">
          Learning is a continuous journey.
        </p>

      </div>
    </section>
  );
}
