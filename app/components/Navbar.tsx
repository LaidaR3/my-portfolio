
"use client";

import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full border-b border-[#E5E1DB] bg-[#F8F7F4]">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-12">

        {/* Logo */}
        <a
          href="#"
          className="font-editorial text-3xl font-semibold"
          onClick={() => setMenuOpen(false)}
        >
          LR.
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.2em] transition-opacity hover:opacity-50"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Label */}
        <span className="hidden text-[10px] uppercase tracking-[0.15em] lg:block">
          Portfolio / 2026
        </span>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span className="text-2xl">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 top-full w-full border-b border-[#E5E1DB] bg-[#F8F7F4] px-6 py-8 shadow-sm lg:hidden"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] transition-opacity hover:opacity-50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="mt-10 text-[10px] uppercase tracking-[0.2em] text-[#857B70]">
            Portfolio / 2026
          </p>
        </div>
      )}
    </header>
  );
}
