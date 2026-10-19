
"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const handleNavigation = (href: string) => {
    setMenuOpen(false);

    const section = document.querySelector(href);

    if (!section) return;

    const navbarHeight = 72;
    const extraSpacing = 16;

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY -
      (href === "#home" ? 0 : navbarHeight + extraSpacing);

    window.scrollTo({
      top: Math.max(0, sectionTop),
      behavior: "smooth",
    });

    window.history.replaceState(null, "", href);
  };

  return (
    <header className="relative z-50 w-full border-b border-[#E5E1DB] bg-[#F8F7F4]">
      {/* Main Navbar */}
      <nav className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("#home");
          }}
          className="font-editorial shrink-0 text-3xl font-semibold text-[#242424]"
        >
          LR.
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center justify-center gap-5 xl:flex 2xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(link.href);
              }}
              className="whitespace-nowrap text-[10px] uppercase tracking-[0.14em] text-[#242424] transition-opacity duration-300 hover:text-[#761f22]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Label */}
        <span className="hidden shrink-0 whitespace-nowrap text-[10px] uppercase tracking-[0.14em] text-[#857B70] xl:block">
          Portfolio / 2026
        </span>

        {/* Mobile / Tablet Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 shrink-0 items-center justify-center text-[#242424] xl:hidden"
        >
          {menuOpen ? (
            <X size={25} strokeWidth={1.5} />
          ) : (
            <Menu size={25} strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* Mobile / Tablet Navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`absolute left-0 right-0 top-full z-50 w-full overflow-hidden border-t border-[#E5E1DB] bg-[#F8F7F4] shadow-lg transition-[max-height,opacity] duration-300 ease-in-out xl:hidden ${
          menuOpen
            ? "max-h-[550px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col px-5 py-6 sm:px-8">
          {/* Mobile Navigation Links */}
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(link.href);
              }}
              className="flex items-center justify-between border-b border-[#E5E1DB] py-4 text-[11px] uppercase tracking-[0.2em] text-[#242424] transition-colors hover:text-[#761f22] active:text-[#761f22]"
            >
              <span>{link.label}</span>

              <span className="font-editorial text-lg italic text-[#761f22]">
                0{index + 1}
              </span>
            </a>
          ))}

          {/* Mobile Footer */}
          <p className="mt-7 text-[10px] uppercase tracking-[0.2em] text-[#857B70]">
            Portfolio / 2026
          </p>
        </div>
      </div>
    </header>
  );
}
