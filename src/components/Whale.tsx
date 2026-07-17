export default function Whale({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 140"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 90 C10 55 45 35 85 35 C130 35 160 55 175 75 C182 65 195 62 195 62 C195 62 190 78 190 85 C190 92 195 108 195 108 C195 108 182 105 175 95 C160 115 130 118 90 118 C50 118 10 108 10 90 Z"
        fill="#25415A"
      />
      <path
        d="M60 40 C60 25 75 15 90 18 C85 25 82 33 82 40 Z"
        fill="#3B8EA5"
      />
      <path
        d="M70 42 C70 30 82 22 94 25 C90 31 87 37 87 42 Z"
        fill="#6FB4C6"
      />
      <circle cx="45" cy="72" r="5" fill="#FDF3D0" />
      <path d="M20 88 C35 96 55 96 68 88" stroke="#FDF3D0" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}
