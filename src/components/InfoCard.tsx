import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  bg?: string;
};

export default function InfoCard({ icon, title, children, bg = "bg-seafoam" }: Props) {
  return (
    <div className={`card-panel ${bg} p-7 md:p-9`}>
      <h3 className="font-display text-xl text-teal-dark md:text-2xl">{title}</h3>
      <div className="mt-4 flex gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
          {icon}
        </div>
        <p className="font-body text-[15px] leading-relaxed text-ink/85 md:text-base">
          {children}
        </p>
      </div>
    </div>
  );
}
