
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
        number: "03",
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
            className="bg-[#F8F7F4] px-6 py-24 md:px-12 md:py-32"
        >
            <div className="mx-auto max-w-6xl">
                {/* Heading */}
                <div className="mb-20">
                    <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-[#857B70]">
                        02 / My Journey
                    </p>

                    <h2 className="font-editorial text-6xl leading-none md:text-8xl">
                        Selected
                        <br />
                        <span className="italic">experience.</span>
                    </h2>

                    <p className="mt-8 max-w-xl text-sm leading-7 text-[#625E58]">
                        A selection of experiences that have shaped
                        my professional journey in software development
                        and cybersecurity.
                    </p>
                </div>

                {/* Timeline */}
                <div className="border-t border-[#D8D4CE]">
                    {experiences.map((experience) => (
                        <div
                            key={experience.number}
                            className="grid gap-6 border-b border-[#D8D4CE] py-12 md:grid-cols-[100px_1fr_2fr] md:gap-10"
                        >
                            {/* Number */}
                            <span className="font-editorial text-3xl italic text-[#A89C8C]">
                                {experience.number}
                            </span>

                            {/* Role and date */}
                            <div>
                                <p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-[#857B70]">
                                    {experience.period}
                                </p>

                                <h3 className="font-editorial text-3xl leading-tight md:text-4xl">
                                    {experience.role}
                                </h3>

                                <p className="mt-3 text-sm text-[#625E58]">
                                    {experience.company}
                                </p>
                            </div>

                            {/* Description and skills */}
                            <div>
                                <p className="max-w-lg text-sm leading-8 text-[#625E58]">
                                    {experience.description}
                                </p>

                                <div className="mt-7 flex flex-wrap gap-2">
                                    {experience.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="border border-[#D8D4CE] px-4 py-2 text-[10px] uppercase tracking-wider text-[#625E58]"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing text */}
                <p className="font-editorial mt-16 text-center text-2xl italic text-[#857B70] md:text-3xl">
                    Always learning, always evolving.
                </p>
            </div>
        </section>
    );
}
