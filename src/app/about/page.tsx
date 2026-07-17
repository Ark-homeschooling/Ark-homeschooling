import type { Metadata } from "next";
import { GraduationCap, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Whale from "@/components/Whale";
import EnquiryForm from "@/components/EnquiryForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About & Educator | Ark Homeschooling",
  description:
    "Meet Teacher Farida and learn about the values behind Ark Homeschooling's warm, learner-centered approach.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Family Devoted to Little Learners"
        subtitle="Who we are, what we believe, and the educator behind the ark."
      />

      {/* WHO WE ARE */}
      <section className="bg-cream pb-20 pt-16">
        <SectionHeading eyebrow="Our Story" title="Who We Are" />
        <div className="section-pad mx-auto mt-10 max-w-3xl text-center">
          <p className="font-body text-lg leading-relaxed text-ink/80">
            Ark Homeschooling is a warm, committed family dedicated to
            safety and growing your child&apos;s head, heart, and hands
            through educative, fun-filled activities. We believe every
            child deserves a learning space that feels as safe and steady
            as an ark on open water; sturdy enough to weather any
            storm, and joyful enough to make the voyage a wonder.
          </p>
        </div>

        <div className="section-pad mt-14 grid gap-6 md:grid-cols-3">
          <div className="card-panel bg-seafoam p-7 text-center">
            <GraduationCap size={28} className="mx-auto text-teal" />
            <h3 className="mt-3 font-display text-lg text-teal-dark">Head</h3>
            <p className="mt-2 font-body text-sm text-ink/75">
              Strong academic foundations across CBC, Cambridge, IB and
              British curricula.
            </p>
          </div>
          <div className="card-panel bg-peach p-7 text-center">
            <HeartHandshake size={28} className="mx-auto text-coral" />
            <h3 className="mt-3 font-display text-lg text-teal-dark">Heart</h3>
            <p className="mt-2 font-body text-sm text-ink/75">
              Nurturing character, empathy, and confidence in every
              child we teach.
            </p>
          </div>
          <div className="card-panel bg-seafoam p-7 text-center">
            <Sparkles size={28} className="mx-auto text-gold" />
            <h3 className="mt-3 font-display text-lg text-teal-dark">Hands</h3>
            <p className="mt-2 font-body text-sm text-ink/75">
              Hands-on, fun-filled activities and digital literacy for
              real-world skills.
            </p>
          </div>
        </div>
      </section>

      {/* MEET THE EDUCATOR */}
      <section className="relative overflow-hidden bg-seafoam py-20">
        <Whale className="absolute -left-10 top-10 w-28 opacity-25 md:w-40" />
        <div className="section-pad relative mx-auto max-w-4xl">
          <SectionHeading eyebrow="Meet Your Educator" title="Teacher Farida" />
        <div className="card-panel mt-10 grid gap-8 bg-white p-8 md:grid-cols-[220px_1fr] md:p-10">
        <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-full border-4 border-teal/15 md:h-full md:w-full">
                  <Image
                    src="/profile.jpeg"
                    alt="Teacher Farida"
                    width={220}
                    height={220}
                    className="h-full w-full object-cover"
                  />
                </div>
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-coral" />
                <span className="font-body text-sm font-bold text-coral">
                  Founder &amp; Lead Educator
                </span>
              </div>
              <p className="mt-4 font-body leading-relaxed text-ink/85">
                Building a strong foundation for your child requires an
                experienced hand. Teacher Farida brings a structured yet
                highly nurturing approach to every single session,
                ensuring inclusive, meaningful academic growth for
                learners aged 5 to 9.
              </p>
              <p className="mt-4 font-body leading-relaxed text-ink/85">
                Whatever info you need about your child&apos;s learning
                journey, feel free to ask. Teacher Farida and the
                Ark team are here to guide every step of the way.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <a href="tel:+254759897106" className="btn-secondary !py-2.5 text-sm">
                  +254 759 897 106
                </a>
                <a
                  href="mailto:thearkhomeschooling@gmail.com"
                  className="btn-secondary !py-2.5 text-sm"
                >
                  Email Teacher Farida
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="bg-cream py-20">
        <SectionHeading
          eyebrow="Have a Question?"
          title="Send Us an Enquiry"
          subtitle="Tell us about your child and what you're looking for &mdash; Teacher Farida will reply directly to your email."
        />
        <div className="section-pad mx-auto mt-10 max-w-2xl">
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
