import Link from "next/link";
import { Anchor, Heart, Brain, Sparkles, ShieldCheck, Users } from "lucide-react";
import ArkBoat from "@/components/ArkBoat";
import Whale from "@/components/Whale";
import WaveDivider from "@/components/WaveDivider";
import SectionHeading from "@/components/SectionHeading";
import InfoCard from "@/components/InfoCard";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-14 md:pt-20">
        <div className="section-pad grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-4 py-1.5 font-body text-sm font-bold text-coral">
              <Anchor size={15} /> Ages 5&ndash;9 &bull; CBC &bull; Cambridge &bull; IB &bull; British
            </span>
            <h1 className="mt-5 font-display text-4xl leading-[1.1] text-teal-dark sm:text-5xl lg:text-6xl">
              Where your Child is Guarded and Guided into their Full Potential
              <br />
              
            </h1>
            <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-ink/80">
              Inspiring young minds through premium, learner-centered
              homeschooling. Custom online and in-person learning spaces that
              blend play, curiosity, and world-class curricula to help your
              child thrive.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/254759897106?text=Hi%20Teacher%20Farida!%20I'd%20like%20to%20know%20more%20about%20Ark%20Homeschooling."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a Free Chat
              </a>
              <Link href="/curriculum" className="btn-secondary">
                See the Curriculum
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md md:max-w-full">
            <ArkBoat className="w-full animate-bob" />
            <Whale className="absolute -right-4 bottom-4 w-24 animate-float-delay md:w-32" />
          </div>
        </div>
      </section>

      <WaveDivider color="#DCEEF0" className="mt-10 md:mt-16" />

      {/* WHO WE ARE */}
      <section className="bg-seafoam pb-20 pt-4">
        <div className="section-pad grid items-center gap-12 md:grid-cols-2">
          <InfoCard icon={<Brain size={24} className="text-coral" />} title="Who We Are" bg="bg-white">
            A warm, committed family dedicated to safety and growing your
            child&apos;s head, heart, and hands through educative, fun-filled
            activities.
          </InfoCard>
          <div className="grid grid-cols-3 gap-4">
            <div className="card-panel flex flex-col items-center justify-center gap-2 bg-white p-5 text-center">
              <Brain size={26} className="text-teal" />
              <span className="font-display text-sm text-ink">Head</span>
            </div>
            <div className="card-panel flex flex-col items-center justify-center gap-2 bg-white p-5 text-center">
              <Heart size={26} className="text-coral" />
              <span className="font-display text-sm text-ink">Heart</span>
            </div>
            <div className="card-panel flex flex-col items-center justify-center gap-2 bg-white p-5 text-center">
              <Sparkles size={26} className="text-gold" />
              <span className="font-display text-sm text-ink">Hands</span>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="#F7E3CB" />

      {/* WHAT WE DO */}
      <section className="bg-peach pb-20 pt-4">
        <SectionHeading
          eyebrow="What We Do"
          title="A Curriculum Blend Built for Curious Minds"
          subtitle="We provide a comprehensive curriculum that blends CBC, Cambridge, IB and British frameworks, combined with digital literacy for the world your child is growing into."
        />
        <div className="section-pad mt-12 grid gap-6 md:grid-cols-3">
          <InfoCard icon={<Anchor size={22} className="text-teal" />} title="CBC" bg="bg-white">
            Kenya&apos;s Competency-Based Curriculum, giving your child a
            strong, locally-relevant foundation.
          </InfoCard>
          <InfoCard icon={<Sparkles size={22} className="text-coral" />} title="Cambridge & IB" bg="bg-white">
            Internationally recognized frameworks that build inquiry,
            critical thinking, and global perspective.
          </InfoCard>
          <InfoCard icon={<ShieldCheck size={22} className="text-gold" />} title="British & Digital Literacy" bg="bg-white">
            A structured British approach paired with hands-on digital
            skills for the modern world.
          </InfoCard>
        </div>
        <div className="section-pad mt-10 text-center">
          <Link href="/curriculum" className="btn-secondary">
            Explore Full Curriculum
          </Link>
        </div>
      </section>

      <WaveDivider color="#DCEEF0" />

      {/* WHY ARK / TRUST */}
      <section className="bg-seafoam pb-20 pt-4">
        <SectionHeading
          eyebrow="Why Families Choose Ark"
          title="A Safe Harbor for Learning"
        />
        <div className="section-pad mt-12 grid gap-6 md:grid-cols-3">
          <div className="card-panel bg-white p-7 text-center">
            <ShieldCheck size={30} className="mx-auto text-teal" />
            <h3 className="mt-4 font-display text-lg text-teal-dark">Safety First</h3>
            <p className="mt-2 font-body text-sm text-ink/75">
              A nurturing, secure environment where every child feels seen
              and supported.
            </p>
          </div>
          <div className="card-panel bg-white p-7 text-center">
            <Users size={30} className="mx-auto text-coral" />
            <h3 className="mt-4 font-display text-lg text-teal-dark">Small & Personal</h3>
            <p className="mt-2 font-body text-sm text-ink/75">
              A structured yet highly nurturing approach in every single
              session, tailored to your child.
            </p>
          </div>
          <div className="card-panel bg-white p-7 text-center">
            <Heart size={30} className="mx-auto text-gold" />
            <h3 className="mt-4 font-display text-lg text-teal-dark">Whole-Child Growth</h3>
            <p className="mt-2 font-body text-sm text-ink/75">
              Inclusive, meaningful academic growth that nurtures head,
              heart, and hands.
            </p>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden bg-teal-dark py-16 text-center">
        <Whale className="absolute -left-6 top-6 w-20 opacity-20 md:w-28" />
        <Whale className="absolute -right-8 bottom-2 w-24 -scale-x-100 opacity-20 md:w-32" />
        <div className="section-pad relative">
          <h2 className="font-display text-3xl text-cream md:text-4xl">
            Ready to Set Sail?
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-body text-cream/80">
            Reach out to Teacher Farida today and let&apos;s chart your
            child&apos;s learning journey together.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
