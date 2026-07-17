"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SocialIcons from "@/components/SocialIcons";
import Whale from "@/components/Whale";

const WHATSAPP_NUMBER = "254759897106";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Hi Teacher Farida! My name is ${name || "___"}.` +
      (childAge ? ` My child is ${childAge} years old.` : "") +
      ` ${message || "I'd like to know more about Ark Homeschooling."}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Chart Your Child's Journey"
        subtitle="Reach out to Teacher Farida directly on WhatsApp, by phone, or by email."
      />

      <section className="relative overflow-hidden bg-cream pb-24 pt-16">
        <Whale className="absolute -right-10 bottom-0 w-32 opacity-15 md:w-44" />
        <div className="section-pad relative grid gap-12 md:grid-cols-2">
          {/* Contact info */}
          <div>
            <SectionHeading eyebrow="Contact Details" title="Teacher Farida" center={false} />
            <ul className="mt-8 space-y-5">
              <li>
                <a
                  href="tel:+254759897106"
                  className="card-panel flex items-center gap-4 bg-white p-5 transition-transform hover:-translate-y-0.5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Phone size={20} />
                  </span>
                  <div>
                    <p className="font-display text-sm text-ink/60">Call or WhatsApp</p>
                    <p className="font-body font-bold text-ink">+254 759 897 106</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:thearkhomeschooling@gmail.com"
                  className="card-panel flex items-center gap-4 bg-white p-5 transition-transform hover:-translate-y-0.5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-coral/10 text-coral">
                    <Mail size={20} />
                  </span>
                  <div>
                    <p className="font-display text-sm text-ink/60">Email</p>
                    <p className="font-body font-bold text-ink">thearkhomeschooling@gmail.com</p>
                  </div>
                </a>
              </li>
              <li className="card-panel flex items-center gap-4 bg-white p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="font-display text-sm text-ink/60">Serving</p>
                  <p className="font-body font-bold text-ink">Kenya &amp; Online Worldwide</p>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <p className="font-display text-sm text-ink/60">Follow Ark Homeschooling</p>
              <SocialIcons className="mt-3" />
            </div>
          </div>

          {/* Quick message form -> opens WhatsApp */}
          <div className="card-panel bg-seafoam p-7 md:p-9">
            <h3 className="font-display text-xl text-teal-dark">Send a Quick Message</h3>
            <p className="mt-2 font-body text-sm text-ink/70">
              Fill this in and it&apos;ll open WhatsApp with your message
              ready to send to Teacher Farida.
            </p>
            <form onSubmit={handleSend} className="mt-6 space-y-4">
              <div>
                <label className="font-body text-sm font-bold text-ink/80">Your Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1.5 w-full rounded-xl border-2 border-teal/20 bg-white px-4 py-3 font-body text-ink outline-none focus:border-coral"
                  placeholder="e.g. Jane Wanjiru"
                />
              </div>
              <div>
                <label className="font-body text-sm font-bold text-ink/80">Child&apos;s Age</label>
                <input
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border-2 border-teal/20 bg-white px-4 py-3 font-body text-ink outline-none focus:border-coral"
                  placeholder="e.g. 7"
                />
              </div>
              <div>
                <label className="font-body text-sm font-bold text-ink/80">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="mt-1.5 w-full rounded-xl border-2 border-teal/20 bg-white px-4 py-3 font-body text-ink outline-none focus:border-coral"
                  placeholder="Tell us a bit about your child's learning needs..."
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                <Send size={18} /> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
