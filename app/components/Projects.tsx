
import Image from "next/image";

const projects = [
    {
        number: "01",
        title: "Sident Dental Clinic",
        category: "Web Development",
        description:
            "A modern, bilingual dental clinic website featuring services, doctor profiles, and an integrated contact form.",
        image: "/images/sident.png",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        live: "https://sidentclinic.com",
        github: "https://github.com/LaidaR3/sident",
    },
    {
        number: "02",
        title: "Metigo",
        category: "Web Development",
        description:
            "A responsive, multilingual business website showcasing welding services with a modern interface and contact functionality.",
        image: "/images/metigo.png",
        technologies: ["Next.js", "Tailwind CSS", "Nodemailer"],
        live: "",
        github: "",
    },
    {
        number: "03",
        title: "Microservices & Zero Trust Architecture",
        category: "Bachelor's Thesis / Cybersecurity",
        description:
            "A bachelor's thesis focused on implementing microservices following Zero Trust Architecture principles, combining distributed software design with cybersecurity.",
        image: "/images/diploma.png",
        technologies: [
            "Microservices",
            "Zero Trust Architecture",
            "Cybersecurity",
        ],
        live: "",
        github: "",
    },

    {
        number: "05",
        title: "Readopia",
        category: "Bookstore Management System",
        description:
            "A digital bookstore and library management platform supporting book discovery, borrowing, purchases, reviews, and inventory administration.",
        image: "/images/projects/readopia.png",
        technologies: ["Full-Stack Development", "Database Management"],
        live: "",
        github: "",
    },
    {
        number: "06",
        title: "Find Your Travel Mate",
        category: "Travel Social Platform",
        description:
            "A travel networking application where users can share trips, discover travel companions, upload photos, and communicate through private messaging.",
        image: "/images/projects/tripzy.png",
        technologies: [
            "React.js",
            "PHP",
            "Laravel",
            "Microsoft SQL Server",
        ],
        live: "",
        github: "",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="bg-[#EEECE7] px-6 py-24 md:px-12 md:py-32"
        >
            <div className="mx-auto max-w-6xl">
                <div className="mb-16">
                    <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-[#857B70]">
                        03 / Selected Work
                    </p>

                    <h2 className="font-editorial text-6xl leading-none md:text-8xl">
                        Selected
                        <br />
                        <span className="italic">projects.</span>
                    </h2>

                    <p className="mt-8 max-w-xl text-sm leading-7 text-[#625E58]">
                        A selection of projects spanning web development,
                        full-stack applications, and cybersecurity.
                    </p>
                </div>

                <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
                    {projects.map((project) => (
                        <article key={project.number} className="group">

                            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E8E5DF]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                            </div>


                            <div className="mt-6 flex items-center justify-between border-b border-[#CFCAC2] pb-4">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#857B70]">
                                    {project.category}
                                </span>

                                <span className="font-editorial text-xl italic text-[#A89C8C]">
                                    {project.number}
                                </span>
                            </div>

                            <h3 className="font-editorial mt-6 text-4xl md:text-5xl">
                                {project.title}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-[#625E58]">
                                {project.description}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="border border-[#CFCAC2] px-3 py-2 text-[10px] uppercase tracking-wider text-[#625E58]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 flex gap-6">
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border-b border-[#242424] pb-2 text-xs uppercase tracking-wider hover:opacity-50"
                                    >
                                        Live Website ↗
                                    </a>
                                )}

                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border-b border-[#242424] pb-2 text-xs uppercase tracking-wider hover:opacity-50"
                                    >
                                        GitHub ↗
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
