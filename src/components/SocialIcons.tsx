"use client";

import { useState } from "react";
import { FacebookIcon, InstagramIcon, YoutubeIcon, TiktokIcon } from "./icons/BrandIcons";

// TODO: Replace the "#" hrefs below with your real Facebook, Instagram,
// YouTube, and TikTok page links once they're ready.
const socials = [
  { href: "#", label: "Facebook", Icon: FacebookIcon, color: "#1877F2" },
  { href: "#", label: "Instagram", Icon: InstagramIcon, color: "#E1306C" },
  { href: "#", label: "YouTube", Icon: YoutubeIcon, color: "#FF0000" },
  { href: "#", label: "TikTok", Icon: TiktokIcon, color: "#000000" },
];

function SocialButton({
  href,
  label,
  Icon,
  color,
}: {
  href: string;
  label: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
}) {
  const [hover, setHover] = useState(false);

  return (
    
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: hover ? color : "#ffffff",
        color: hover ? "#ffffff" : color,
        boxShadow: hover
          ? `0 8px 18px -4px ${color}99`
          : "0 4px 12px -2px rgba(31,58,77,0.25)",
        transform: hover ? "translateY(-4px) scale(1.1) rotate(6deg)" : "none",
      }}
      className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300"
    >
      <Icon size={20} />
    </a>
  );
}

export default function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((s) => (
        <SocialButton key={s.label} {...s} />
      ))}
    </div>
  );
}
