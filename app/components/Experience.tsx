
const experiences = [
  {
    number: "01",
    role: "Cybersecurity Intern",
    company: "LinkPlus IT · British Council CybHer Programme",
    period: "Oct 2025 — Mar 2026",
    description:
      "Gained practical experience in cybersecurity, focusing on threat identification, vulnerability assessment, risk management, and secure development practices.",
    skills: [
      "Cybersecurity",
      "Vulnerability Assessment",
      "Risk Management",
      "Web Security",
    ],
  },
  {
    number: "02",
    role: "MIS Intern",
    company: "ProCredit Bank Kosovo",
    period: "Nov 2024 — Jan 2025",
    description:
      "Supported the management and optimization of information systems underpinning core banking operations. Assisted with data organization, system maintenance, technical troubleshooting, and reporting to support data-driven decision-making.",
    skills: [
      "Management Information Systems",
      "Data Management",
      "Technical Support",
      "Reporting",
    ],
  },
  {
    number: "03",
    role: "Software Developer",
    company: "DemSport NGO",
    period: "Jun 2022 — Nov 2023",
    description:
      "Developed and maintained web applications using React.js and .NET, implementing new features, integrating databases, and improving application performance and usability.",
    skills: [
      "React.js",
      "C#",
      ".NET",
      "Web Development",
    ],
  },
  {
    number: "04",
    role: "Software Developer Intern",
    company: "INDESON",
    period: "Sep 2021 — Jun 2022",
    description:
      "Built responsive web interfaces using React.js, JavaScript, HTML, and CSS, contributing to projects for international clients and optimizing websites across devices.",
    skills: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full overflow-hidden bg-[#EEECE7] px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* Heading */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#857B70] sm:text-[11px]">
            03 / My Journey
          </p>

          <h2 className="font-editorial text-[clamp(2.7rem,7vw,6rem)] leading-[0.95] tracking-[-0.03em] text-[#242424]">
            Selected
            <br />
            <span className="italic">experience.</span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-[#625E58]">
            A selection of experiences that have shaped
            my professional journey in software development,
            information systems, and cybersecurity.
          </p>
        </div>

        {/* Timeline */}
        <div className="border-t border-[#D8D4CE]">
          {experiences.map((experience) => (
            <div
              key={experience.number}
              className="grid min-w-0 gap-5 border-b border-[#D8D4CE] py-10 sm:py-12 md:grid-cols-[70px_minmax(0,1fr)_minmax(0,1.5fr)] md:gap-8 lg:grid-cols-[100px_minmax(0,1fr)_minmax(0,2fr)] lg:gap-10"
            >

              {/* Number */}
              <span className="font-editorial text-3xl italic text-[#A89C8C]">
                {experience.number}
              </span>

              {/* Role and Date */}
              <div className="min-w-0">
                <p className="mb-4 text-[10px] uppercase tracking-[0.15em] text-[#857B70]">
                  {experience.period}
                </p>

                <h3 className="font-editorial text-[clamp(1.8rem,3vw,2.5rem)] leading-tight text-[#242424]">
                  {experience.role}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#625E58]">
                  {experience.company}
                </p>
              </div>

              {/* Description and Skills */}
              <div className="min-w-0">
                <p className="max-w-lg text-sm leading-7 text-[#625E58]">
                  {experience.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-[#D8D4CE] px-3 py-2 text-[9px] uppercase tracking-[0.08em] text-[#625E58] sm:px-4 sm:text-[10px]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Closing Text */}
        <p className="font-editorial mt-14 text-center text-2xl italic text-[#857B70] sm:mt-16 md:text-3xl">
          Always learning, always evolving.
        </p>

      </div>
    </section>
  );
}
