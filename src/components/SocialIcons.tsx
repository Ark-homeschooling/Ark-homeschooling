import { FacebookIcon, InstagramIcon, YoutubeIcon, TiktokIcon } from "./icons/BrandIcons";

// TODO: Replace the "#" hrefs below with your real Facebook, Instagram,
// YouTube, and TikTok page links once they're ready.
const socials = [
  { href: "#", label: "Facebook", Icon: FacebookIcon, color: "#1877F2" },
  { href: "#", label: "Instagram", Icon: InstagramIcon, color: "#E1306C" },
  { href: "#", label: "YouTube", Icon: YoutubeIcon, color: "#FF0000" },
  { href: "#", label: "TikTok", Icon: TiktokIcon, color: "#000000" },
];

export default function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map(({ href, label, Icon, color }) => (
        
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          style={{ ["--brand" as string]: color }}
          className="group flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--brand)] shadow-[0_4px_12px_-2px_rgba(31,58,77,0.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:rotate-6 hover:bg-[var(--brand)] hover:text-white hover:shadow-[0_8px_18px_-4px_var(--brand)]"
        >
          <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
        </a>
      ))}
    </div>
  );
}
