
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Sident Dental Clinic",
    category: "Web Development",
    description:
      "A modern, bilingual dental clinic website designed to help patients explore dental services, learn about the medical team, and contact the clinic. Built with responsive layouts, reusable components, and an integrated email contact form.",
    image: "/images/sident1.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://sidentclinic.com",
    github: "https://github.com/LaidaR3/sident",
  },
  {
    number: "02",
    title: "Metigo",
    category: "Web Development",
    description:
      "A responsive, multilingual business website showcasing professional welding services. Features a modern user interface, clear service presentation, and integrated contact functionality to simplify customer inquiries.",
    image: "/images/metigo.png",
    technologies: ["Next.js", "Tailwind CSS", "Nodemailer"],
    live: "https://metigo.vercel.app/",
    github: "https://github.com/LaidaR3/Metigo",
  },
  {
    number: "03",
    title: "Microservices & Zero Trust Architecture",
    category: "Bachelor's Thesis / Cybersecurity",
    description:
      "A bachelor's thesis focused on implementing a microservices-based system following Zero Trust Architecture principles. Explores distributed application design, service-level security, access control, and the importance of verifying communication between system components.",
    image: "/images/diploma.png",
    technologies: [
      "Microservices",
      "Zero Trust Architecture",
      "Cybersecurity",
    ],
    live: "",
    github: "https://github.com/LaidaR3/Thesis_Project",
  },
  {
    number: "05",
    title: "Readopia",
    category: "Bookstore Management System",
    description:
      "A digital bookstore and library management platform supporting book discovery, borrowing, purchases, customer reviews, and inventory administration. Designed to simplify bookstore operations and provide an organized experience for users and administrators.",
    image: "/images/bookstore.png",
    technologies: [
      "Full-Stack Development",
      "Database Management",
    ],
    live: "",
    github: "https://github.com/DonikaNuredinii/BookStore",
  },
  {
    number: "06",
    title: "Find Your Travel Mate",
    category: "Travel Social Platform",
    description:
      "A travel networking application that helps users discover travel companions and connect through shared interests. Supports trip sharing, photo uploads, user interaction, and private messaging through a full-stack application.",
    image: "/images/tripzy.JPG",
    technologies: [
      "React.js",
      "PHP",
      "Laravel",
      "Microsoft SQL Server",
    ],
    live: "",
    github: "https://github.com/DonikaNuredinii/Tripzy",
  },
  {
    number: "07",
    title: "Hair Salon Management System",
    category: "Full-Stack Development",
    description:
      "Collaborated on a full-stack salon management application built with .NET to streamline daily business operations. The system supports appointment reservations, service management, client records, and organized scheduling workflows.",
    image: "/images/hairsalon.png",
    technologies: [
      "C#",
      ".NET",
      "TypeScript",
      "JavaScript",
      "CSS",
    ],
    live: "",
    github: "https://github.com/rronapajaziti/HairSalonSystem",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full overflow-hidden bg-[#F8F7F4] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* Section Heading */}
        <div className="mb-12 sm:mb-16">
          <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#761f22]">
            04 / Selected Work
          </p>

          <h2 className="font-editorial text-[clamp(3rem,7vw,6rem)] leading-[0.95] tracking-[-0.03em] text-[#242424]">
            Selected
            <br />
            <span className="italic">projects.</span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-[#625E58]">
            A selection of projects spanning web development,
            full-stack applications, and cybersecurity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 md:gap-y-16">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group min-w-0"
            >

              {/* Project Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              {/* Category and Number */}
              <div className="mt-6 flex items-center justify-between gap-3 border-b border-[#CFCAC2] pb-4">
                <span className="min-w-0 text-[9px] uppercase tracking-[0.15em] text-[#761f22] sm:text-[10px] sm:tracking-[0.2em]">
                  {project.category}
                </span>

                <span className="font-editorial shrink-0 text-xl italic text-[#A89C8C]">
                  {project.number}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="font-editorial mt-6 text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-[-0.02em] text-[#242424]">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="mt-4 text-[13px] leading-7 text-[#625E58] sm:text-sm">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="border border-[#CFCAC2] px-3 py-2 text-[9px] uppercase tracking-[0.08em] text-[#625E58] sm:text-[10px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub and Live Website Links */}
              <div className="mt-8 flex flex-wrap items-center gap-6">

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 border-b border-[##761f22] pb-2 text-[10px] uppercase tracking-[0.15em] text-[#761f22] transition-opacity duration-300 hover:opacity-50 sm:text-xs"
                  >
                    Live Website
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="shrink-0 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 border-b border-[#761f22] pb-2 text-[10px] uppercase tracking-[0.15em] text-[#761f22] transition-opacity duration-300 hover:opacity-50 sm:text-xs"
                  >
                    GitHub
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

      </div>
    </section>
  );
}
