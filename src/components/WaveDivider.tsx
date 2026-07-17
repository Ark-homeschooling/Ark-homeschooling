type Props = {
  color?: string;
  flip?: boolean;
  className?: string;
};

export default function WaveDivider({
  color = "#DCEEF0",
  flip = false,
  className = "",
}: Props) {
  return (
    <div
      aria-hidden="true"
      className={`w-full leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1440 120"
        className="w-full h-[70px] md:h-[110px]"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,64 C240,120 480,0 720,32 C960,64 1200,112 1440,56 L1440,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
