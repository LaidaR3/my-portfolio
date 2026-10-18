
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
      className="bg-[#F8F7F4] px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-16">
          <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-[#857B70]">
            04 / Professional Development
          </p>

          <h2 className="font-editorial text-6xl leading-none md:text-8xl">
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
              className="group flex min-h-[230px] flex-col justify-between border border-[#D8D4CE] p-7 transition-all duration-300 hover:border-[#A89C8C] hover:bg-[#EEECE7] md:p-9"
            >
              <div>
                {/* Category and Number */}
                <div className="mb-8 flex items-center justify-between gap-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#857B70]">
                    {cert.category}
                  </span>

                  <span className="font-editorial text-xl italic text-[#A89C8C]">
                    {cert.number}
                  </span>
                </div>

                {/* Certification Title */}
                <h3 className="font-editorial text-3xl leading-tight md:text-4xl">
                  {cert.title}
                </h3>

                {/* Organization */}
                <p className="mt-4 text-sm text-[#625E58]">
                  {cert.organization}
                </p>
              </div>

              {/* Year and Credential Link */}
              <div className="mt-8 flex items-center justify-between border-t border-[#D8D4CE] pt-5">
                <span className="text-xs text-[#857B70]">
                  {cert.year}
                </span>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-[0.15em] transition hover:opacity-50"
                  >
                    View Credential ↗
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
