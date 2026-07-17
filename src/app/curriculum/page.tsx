import type { Metadata } from "next";
import { Anchor, Sparkles, ShieldCheck, Laptop2, BookOpen, Palette } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import InfoCard from "@/components/InfoCard";

export const metadata: Metadata = {
  title: "Curriculum | Ark Homeschooling",
  description:
    "A comprehensive curriculum blending CBC, Cambridge, IB and British frameworks with digital literacy, for learners aged 5-9.",
};

const pillars = [
  {
    icon: <Anchor size={22} className="text-teal" />,
    title: "CBC (Competency-Based Curriculum)",
    body: "Kenya's own framework, giving your child a strong, locally-relevant foundation rooted in real-world competencies.",
    bg: "bg-seafoam",
  },
  {
    icon: <Sparkles size={22} className="text-coral" />,
    title: "Cambridge Curriculum",
    body: "An internationally recognized pathway that builds inquiry, structured progression, and strong core subject mastery.",
    bg: "bg-peach",
  },
  {
    icon: <BookOpen size={22} className="text-gold" />,
    title: "IB (International Baccalaureate)",
    body: "A whole-child, inquiry-driven approach that nurtures curiosity, critical thinking, and global-mindedness.",
    bg: "bg-seafoam",
  },
  {
    icon: <ShieldCheck size={22} className="text-teal" />,
    title: "British Curriculum",
    body: "A structured, well-established framework known for its rigor, clarity, and steady academic progression.",
    bg: "bg-peach",
  },
];

export default function CurriculumPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="A Curriculum Blend Built for Curious Minds"
        subtitle="We provide a comprehensive curriculum that is a blend of CBC, Cambridge, IB and British, combined with digital literacy."
      />

      <section className="bg-cream pb-20 pt-16">
        <SectionHeading
          eyebrow="Our Approach"
          title="Four Frameworks, One Voyage"
          subtitle="Every learner is different, so we draw from the strongest parts of each curriculum to build a learning journey suited to your child."
        />

        <div className="section-pad mt-12 grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <InfoCard key={p.title} icon={p.icon} title={p.title} bg={p.bg}>
              {p.body}
            </InfoCard>
          ))}
        </div>
      </section>

      <section className="bg-teal-dark py-16">
        <SectionHeading
          eyebrow="Beyond the Books"
          title="Digital Literacy & Whole-Child Skills"
          light
        />
        <div className="section-pad mt-12 grid gap-6 md:grid-cols-3">
          <div className="card-panel bg-white/10 p-7 text-center backdrop-blur-sm">
            <Laptop2 size={28} className="mx-auto text-gold" />
            <h3 className="mt-3 font-display text-lg text-cream">Digital Literacy</h3>
            <p className="mt-2 font-body text-sm text-cream/80">
              Age-appropriate tech skills that prepare children for a
              digital world &mdash; safely and confidently.
            </p>
          </div>
          <div className="card-panel bg-white/10 p-7 text-center backdrop-blur-sm">
            <Palette size={28} className="mx-auto text-coral" />
            <h3 className="mt-3 font-display text-lg text-cream">Creative Play</h3>
            <p className="mt-2 font-body text-sm text-cream/80">
              Art, storytelling, and hands-on activities that make
              learning feel like an adventure.
            </p>
          </div>
          <div className="card-panel bg-white/10 p-7 text-center backdrop-blur-sm">
            <ShieldCheck size={28} className="mx-auto text-seafoam" />
            <h3 className="mt-3 font-display text-lg text-cream">Character Growth</h3>
            <p className="mt-2 font-body text-sm text-cream/80">
              Values, empathy, and confidence woven through every
              lesson, every day.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 text-center">
        <h2 className="font-display text-2xl text-teal-dark md:text-3xl">
          Curious how this fits your child?
        </h2>
        <p className="mx-auto mt-2 max-w-md font-body text-ink/75">
          Let&apos;s talk about the right blend for your little learner.
        </p>
        <a
          href="https://wa.me/254759897106?text=Hi%20Teacher%20Farida!%20I'd%20like%20to%20ask%20about%20the%20curriculum."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-6 inline-flex"
        >
          Chat With Teacher Farida
        </a>
      </section>
    </>
  );
}
