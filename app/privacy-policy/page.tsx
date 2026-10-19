import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MoveUpRight } from "lucide-react";


export const metadata: Metadata = {
  title: "Privacy Policy | Laida Rusinovci",
  description:
    "Privacy information for the personal portfolio website of Laida Rusinovci.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#242424]">
      {/* Navigation */}
      <header className="border-b border-[#E5E1DB]">
        <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="font-editorial text-3xl font-semibold"
          >
            LR.
          </Link>

          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#761f22] transition-opacity hover:opacity-50"
          >
            <ArrowLeft
              size={16}
              strokeWidth={1.5}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Portfolio
          </Link>
        </nav>
      </header>

      {/* Page Content */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#857B70]">
            Legal / Privacy
          </p>

          <h1 className="font-editorial text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.03em]">
            Privacy <span className="italic">policy.</span>
          </h1>

          <p className="mt-7 text-sm text-[#857B70]">
            Last updated: October 19, 2026
          </p>

          <div className="mt-12 space-y-10 text-sm leading-8 text-[#625E58]">
            <div>
              <h2 className="font-editorial mb-3 text-3xl text-[#242424]">
                01. Introduction
              </h2>

              <p>
                Welcome to the personal portfolio website of
                Laida Rusinovci. This website showcases my
                professional experience, technical skills,
                certifications, and software development
                projects.
              </p>
            </div>

            <div>
              <h2 className="font-editorial mb-3 text-3xl text-[#242424]">
                02. Information You Provide
              </h2>

              <p>
                This website does not currently offer user
                accounts or a contact form. If you choose to
                contact me using the email link provided,
                I may receive your email address and any
                information you voluntarily include in
                your message.
              </p>
            </div>

            <div>
              <h2 className="font-editorial mb-3 text-3xl text-[#242424]">
                03. Cookies and Analytics
              </h2>

              <p>
                This portfolio does not intentionally use
                cookies for advertising or visitor tracking.
                I do not currently use Google Analytics or
                advertising pixels on this website.
              </p>

              <p className="mt-3">
                The hosting provider or other technical
                services may process basic technical
                information needed to deliver and secure
                the website.
              </p>
            </div>

            <div>
              <h2 className="font-editorial mb-3 text-3xl text-[#242424]">
                04. Third-Party Links
              </h2>

              <p>
                This website contains links to external
                platforms, including GitHub, LinkedIn,
                and live project websites. These platforms
                have their own privacy practices and
                policies. I am not responsible for how
                external websites process personal data.
              </p>
            </div>

            <div>
              <h2 className="font-editorial mb-3 text-3xl text-[#242424]">
                05. Hosting and Technical Data
              </h2>

              <p>
                This website may be hosted using Vercel.
                The hosting provider may process technical
                data such as IP addresses, browser
                information, and request logs for website
                delivery, security, and maintenance.
              </p>
            </div>

            <div>
              <h2 className="font-editorial mb-3 text-3xl text-[#242424]">
                06. Your Privacy
              </h2>

              <p>
                If you contact me by email, you may request
                information about the personal data I hold
                from our correspondence, or ask me to
                correct or delete it, subject to applicable
                legal requirements.
              </p>
            </div>

            <div>
              <h2 className="font-editorial mb-3 text-3xl text-[#242424]">
                07. Policy Updates
              </h2>

              <p>
                This Privacy Policy may be updated if the
                website changes, including the addition
                of analytics, contact forms, or other
                third-party services.
              </p>
            </div>

            <div>
              <h2 className="font-editorial mb-3 text-3xl text-[#242424]">
                08. Contact
              </h2>

              <p>
                For privacy-related questions or requests,
                you can contact me at:
              </p>

              <a
                href="mailto:rusinovcilaida13@gmail.com"
                className="group mt-3 inline-flex max-w-full items-center gap-2 border-b border-[#761f22] pb-1 text-[#761f22] transition-opacity hover:opacity-50"
              >
                <span className="min-w-0 break-all">
                  rusinovcilaida13@gmail.com
                </span>

                <MoveUpRight
                  size={20}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-16 border-t border-[#D8D4CE] pt-8">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#761f22] transition-opacity hover:opacity-50"
            >
              <ArrowLeft
                size={16}
                strokeWidth={1.5}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E5E1DB] px-5 py-8 text-center">
        <p className="text-[10px] uppercase tracking-[0.15em] text-[#857B70]">
          © 2026 Laida Rusinovci. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
