export default function ArkBoat({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 420"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* mast + flag */}
      <line x1="330" y1="70" x2="330" y2="150" stroke="#1F3A4D" strokeWidth="4" strokeLinecap="round" />
      <path d="M330 72 L390 88 L330 104 Z" fill="#E8823C" stroke="#1F3A4D" strokeWidth="3" strokeLinejoin="round" />

      {/* sign */}
      <rect x="205" y="120" width="120" height="54" rx="8" fill="#FDF3D0" stroke="#1F3A4D" strokeWidth="4" />
      <text x="265" y="156" textAnchor="middle" fontFamily="var(--font-fredoka), sans-serif" fontWeight="700" fontSize="26" fill="#3B8EA5">ARK</text>

      {/* cabin roof */}
      <path d="M150 178 L380 178 L410 210 L120 210 Z" fill="#E8823C" stroke="#1F3A4D" strokeWidth="4" strokeLinejoin="round" />

      {/* hull */}
      <path
        d="M60 220 C60 210 70 210 90 210 L430 210 C450 210 460 210 460 220 L440 320 C420 355 350 372 265 372 C180 372 110 355 90 320 Z"
        fill="#D98A3D"
        stroke="#1F3A4D"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      {/* hull planks */}
      <path d="M95 250 L435 250" stroke="#1F3A4D" strokeWidth="2.5" opacity="0.35" />
      <path d="M100 280 L430 280" stroke="#1F3A4D" strokeWidth="2.5" opacity="0.35" />
      <path d="M112 310 L410 310" stroke="#1F3A4D" strokeWidth="2.5" opacity="0.35" />

      {/* kids peeking over the side */}
      <g>
        <circle cx="170" cy="205" r="22" fill="#F4C89B" stroke="#1F3A4D" strokeWidth="3" />
        <path d="M150 198 C150 178 190 178 190 198" fill="#1F3A4D" />
        <rect x="152" y="216" width="36" height="30" rx="10" fill="#3B8EA5" stroke="#1F3A4D" strokeWidth="3" />
      </g>
      <g>
        <circle cx="235" cy="200" r="24" fill="#F7D2A8" stroke="#1F3A4D" strokeWidth="3" />
        <path d="M212 196 C208 168 262 168 258 196 C258 178 212 178 212 196" fill="#C96A28" />
        <rect x="216" y="218" width="40" height="32" rx="10" fill="#E8823C" stroke="#1F3A4D" strokeWidth="3" />
      </g>
      <g>
        <circle cx="305" cy="200" r="24" fill="#F4C89B" stroke="#1F3A4D" strokeWidth="3" />
        <path d="M282 194 C278 166 332 166 328 194 C326 176 284 176 282 194" fill="#C96A28" />
        <rect x="286" y="218" width="40" height="32" rx="10" fill="#F4B942" stroke="#1F3A4D" strokeWidth="3" />
      </g>
      <g>
        <circle cx="365" cy="206" r="22" fill="#F7D2A8" stroke="#1F3A4D" strokeWidth="3" />
        <path d="M347 200 C345 180 385 180 383 200" fill="#1F3A4D" />
        <rect x="347" y="220" width="36" height="30" rx="10" fill="#3B8EA5" stroke="#1F3A4D" strokeWidth="3" />
      </g>

      {/* waves under boat */}
      <path
        d="M20 380 C70 360 110 400 160 380 C210 360 250 400 300 380 C350 360 390 400 440 380 C470 368 490 372 500 380"
        stroke="#3B8EA5"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M10 400 C60 385 100 415 150 400 C200 385 240 415 290 400 C340 385 380 415 430 400 C465 390 485 393 505 400"
        stroke="#6FB4C6"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}
