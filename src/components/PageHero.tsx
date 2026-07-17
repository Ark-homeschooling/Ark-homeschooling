import WaveDivider from "./WaveDivider";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden bg-teal-dark pb-16 pt-16 text-center md:pt-24">
      <div className="section-pad relative">
        <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 font-body text-sm font-bold text-cream">
          {eyebrow}
        </span>
        <h1 className="mt-5 font-display text-4xl text-cream md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl font-body text-cream/80 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
      <WaveDivider color="#FDF3D0" className="absolute -bottom-px left-0" />
    </section>
  );
}
