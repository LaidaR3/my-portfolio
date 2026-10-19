
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E1DB] bg-[#F8F7F4] px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">

        {/* Logo */}
        <Link
          href="/#home"
          className="font-editorial text-3xl font-semibold text-[#242424]"
        >
          LR.
        </Link>

        {/* Copyright */}
        <p className="text-[9px] uppercase tracking-[0.15em] text-[#857B70] sm:text-[10px]">
          © 2026 Laida Rusinovci. All rights reserved.
        </p>

        {/* Footer Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
          <Link
            href="/privacy-policy"
            className="text-[10px] uppercase tracking-[0.15em] text-[#625E58] transition-opacity hover:opacity-50"
          >
            Privacy Policy
          </Link>

          <a
            href="#home"
            className="text-[10px] uppercase tracking-[0.15em] text-[#625E58] transition-opacity hover:opacity-50"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
