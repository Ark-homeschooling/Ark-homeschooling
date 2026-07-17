type IconProps = { size?: number; className?: string };

export function FacebookIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 9.5V7.7c0-.9.6-1.1 1-1.1h2.5V3h-3.4C10.9 3 10 5.1 10 6.9v2.6H8v3.5h2V21h4v-8h2.7l.4-3.5H14Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function YoutubeIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="6" width="19" height="12" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M10.5 9.5L15 12L10.5 14.5V9.5Z" fill="currentColor" />
    </svg>
  );
}
