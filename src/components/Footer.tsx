import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import SocialIcons from "./SocialIcons";
import WaveDivider from "./WaveDivider";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-teal-dark text-cream">
      <WaveDivider color="#256B7F" className="-mt-px" />
      <div className="section-pad grid gap-10 pb-12 pt-4 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-coral font-display text-lg text-cream">
              A
            </span>
            <span className="font-display text-xl">Ark Homeschooling</span>
          </div>
          <p className="mt-4 max-w-xs font-body text-sm text-cream/80">
            Sailing into a world of wonder and learning &mdash; a warm,
            learner-centered home for curious minds aged 5 to 9.
          </p>
          <SocialIcons className="mt-5" />
        </div>

        <div>
          <h4 className="font-display text-lg text-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2 font-body text-sm">
            <li><Link href="/" className="hover:text-gold">Home</Link></li>
            <li><Link href="/about" className="hover:text-gold">About &amp; Educator</Link></li>
            <li><Link href="/services" className="hover:text-gold">Services</Link></li>
            <li><Link href="/curriculum" className="hover:text-gold">Curriculum</Link></li>
            <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold">Get In Touch</h4>
          <ul className="mt-4 space-y-3 font-body text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-coral" />
              <a href="tel:+254759897106" className="hover:text-gold">+254 759 897 106</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-coral" />
              <a href="mailto:thearkhomeschooling@gmail.com" className="hover:text-gold">
                thearkhomeschooling@gmail.com
              </a>
            </li>
            <li className="font-semibold text-cream/90">Teacher Farida</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15 py-5 text-center font-body text-xs text-cream/60">
        © {new Date().getFullYear()} Ark Homeschooling. All rights reserved.
      </div>
    </footer>
  );
}
