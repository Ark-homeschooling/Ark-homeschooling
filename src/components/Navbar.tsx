"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About & Educator" },
  { href: "/services", label: "Services" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-teal/10 bg-cream/90 backdrop-blur-md">
      <nav className="section-pad flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal font-display text-lg text-cream shadow-[0_4px_0_0_theme(colors.teal.dark)]">
            A
          </span>
          <span className="font-display text-xl text-teal-dark tracking-wide">
            Ark<span className="text-coral"> Homeschooling</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-body text-[15px] font-semibold text-ink/80 transition-colors hover:text-coral"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="btn-primary hidden md:inline-flex !py-2.5 !px-5 text-sm">
          Enroll Now
        </Link>

        <button
          aria-label="Toggle menu"
          className="text-teal-dark md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t-2 border-teal/10 bg-cream px-6 pb-5 pt-2 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 font-body font-semibold text-ink/80 hover:bg-seafoam hover:text-teal-dark"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full justify-center !py-3"
            >
              Enroll Now
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
