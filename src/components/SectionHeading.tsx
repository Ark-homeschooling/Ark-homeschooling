type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = true,
}: Props) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <span
          className={`inline-block rounded-full px-4 py-1.5 font-body text-sm font-bold tracking-wide ${
            light ? "bg-white/15 text-cream" : "bg-coral/10 text-coral"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 font-display text-3xl leading-tight md:text-5xl ${
          light ? "text-cream" : "text-teal-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl font-body text-base md:text-lg ${
            light ? "text-cream/85" : "text-ink/75"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
