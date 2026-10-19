
export default function Footer() {
  return (
    <footer className="border-t border-[#E5E1DB] bg-[#F8F7F4] px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

        {/* Logo */}
        <a
          href="#home"
          className="font-editorial text-2xl font-semibold text-[#242424]"
        >
          LR.
        </a>

        {/* Copyright */}
        <p className="text-[10px] uppercase tracking-[0.15em] text-[#857B70]">
          © 2026 Laida Rusinovci. All rights reserved.
        </p>

        {/* Back to Top */}
        <a
          href="#home"
          className="text-[10px] uppercase tracking-[0.15em] text-[#242424] transition-opacity hover:opacity-50"
        >
          Back to top ↑
        </a>

      </div>
    </footer>
  );
}
