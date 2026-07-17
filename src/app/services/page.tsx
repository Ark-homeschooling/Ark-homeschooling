import type { Metadata } from "next";
import {
  Home as HomeIcon,
  Laptop2,
  ClipboardList,
  Sun,
  Users2,
  Compass,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import InfoCard from "@/components/InfoCard";

export const metadata: Metadata = {
  title: "Services | Ark Homeschooling",
  description:
    "Explore Ark Homeschooling's services: in-person and online homeschooling, curriculum consultation, school readiness assessments, holiday programs, and parent coaching.",
};

const services = [
  {
    icon: <HomeIcon size={22} className="text-teal" />,
    title: "In-Person Homeschooling",
    body: "Warm, structured one-on-one or small-group sessions in a safe learning space, tailored to your child's pace and personality.",
    bg: "bg-seafoam",
  },
  {
    icon: <Laptop2 size={22} className="text-coral" />,
    title: "Online / Virtual Homeschooling",
    body: "Live, interactive sessions from wherever you are, blending real-time teaching with engaging digital tools.",
    bg: "bg-peach",
  },
  {
    icon: <Compass size={22} className="text-gold" />,
    title: "Curriculum Blend & Consultation",
    body: "A personalized mix of CBC, Cambridge, IB and British curricula, planned around your child's strengths and goals.",
    bg: "bg-seafoam",
  },
  {
    icon: <ClipboardList size={22} className="text-teal" />,
    title: "School Readiness Assessment",
    body: "A gentle, thorough assessment to understand where your child is starting from and design the right learning path.",
    bg: "bg-peach",
  },
  {
    icon: <Sun size={22} className="text-coral" />,
    title: "Holiday & Enrichment Programs",
    body: "Fun-filled, educative school-break programs that keep young minds curious, active, and growing.",
    bg: "bg-seafoam",
  },
  {
    icon: <Users2 size={22} className="text-gold" />,
    title: "Parent Coaching & Support",
    body: "Guidance and resources for parents who want to be more involved in their child's day-to-day learning.",
    bg: "bg-peach",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="How We Support Your Child's Voyage"
        subtitle="From full homeschooling to focused support, here's how Ark can meet your family where you are."
      />

      <section className="bg-cream pb-20 pt-16">
        <SectionHeading
          eyebrow="What's Included"
          title="A Service for Every Step of the Journey"
        />
        <div className="section-pad mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <InfoCard key={s.title} icon={s.icon} title={s.title} bg={s.bg}>
              {s.body}
            </InfoCard>
          ))}
        </div>
      </section>

      <section className="bg-teal-dark py-16 text-center">
        <h2 className="font-display text-3xl text-cream md:text-4xl">
          Not Sure Which Service Fits?
        </h2>
        <p className="mx-auto mt-3 max-w-xl font-body text-cream/80">
          Tell us about your child and we&apos;ll help you choose the right
          path &mdash; no pressure, just a friendly chat.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/254759897106?text=Hi%20Teacher%20Farida!%20I'd%20like%20to%20know%20which%20service%20suits%20my%20child."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
