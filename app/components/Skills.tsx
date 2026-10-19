
const skillCategories = [
  {
    number: "01",
    title: "Programming Languages",
    description: "Languages used in software development.",
    skills: [
      "Java",
      "JavaScript",
      "TypeScript",
      "C#",
      "PHP",
      "SQL",
    ],
  },
  {
    number: "02",
    title: "Frameworks & Technologies",
    description: "Technologies for building modern applications.",
    skills: [
      "React.js",
      "Next.js",
      ".NET",
      "ASP.NET Core",
      "Laravel",
      "Spring Boot",
      "Tailwind CSS",
    ],
  },
  {
    number: "03",
    title: "Cybersecurity",
    description: "Security concepts, practices, and methodologies.",
    skills: [
      "Vulnerability Assessment",
      "Threat Identification",
      "Risk Assessment",
      "Cyber Threat Management",
      "Governance, Risk & Compliance",
      "Zero Trust Architecture",
      "Network Security",
      "Security Fundamentals",
    ],
  },
  {
    number: "04",
    title: "Databases & Tools",
    description: "Tools supporting development and collaboration.",
    skills: [
      "PostgreSQL",
      "Microsoft SQL Server",
      "Git",
      "GitHub",
      "REST APIs",
      "Postman",
      "VS Code",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#F8F7F4] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto w-full max-w-5xl">

        {/* Section Heading */}
        <div className="mb-12 text-center md:mb-14">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#857B70]">
            02 / Technical Expertise
          </p>

          <h2 className="font-editorial text-[clamp(2.8rem,5vw,4.8rem)] leading-[1.05] tracking-[-0.03em]">
            Skills <span className="italic">& expertise.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#625E58]">
            A combination of programming, software engineering,
            and cybersecurity knowledge developed through
            education, professional experience, and projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {skillCategories.map((category) => (
            <article
              key={category.number}
              className="border border-[#D8D4CE] p-6 transition-colors duration-300 hover:bg-[#EEECE7] sm:p-8"
            >
              {/* Number and Category */}
              <div className="mb-6 flex items-start justify-between gap-4">
                <h3 className="font-editorial text-2xl leading-tight sm:text-3xl">
                  {category.title}
                </h3>

                <span className="font-editorial text-xl italic text-[#A89C8C]">
                  {category.number}
                </span>
              </div>

              {/* Description */}
              <p className="mb-7 text-xs leading-6 text-[#857B70]">
                {category.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-[#CFCAC2] px-3 py-2 text-[11px] text-[#625E58] transition-colors duration-300 hover:border-[#857B70] hover:text-[#242424]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
