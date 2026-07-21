import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./icons/BrandIcons";

// TODO: Replace the "#" hrefs below with your real Facebook, Instagram
// and YouTube page links once they're ready.
const socials = [
  { href: "#", label: "Facebook", Icon: FacebookIcon },
  { href: "#", label: "Instagram", Icon: InstagramIcon },
  { href: "#", label: "YouTube", Icon: YoutubeIcon },
  { href: "#", label: "TikTok", Icon: TiktokIcon },
];

export default function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-teal-dark transition-all hover:-translate-y-0.5 hover:bg-coral hover:text-cream"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
