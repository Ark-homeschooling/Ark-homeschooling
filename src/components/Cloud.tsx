export default function Cloud({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 75C22 75 8 62 8 46C8 30 21 18 37 18C40 18 43 18.5 46 19.5C52 8 65 0 80 0C98 0 113 12 117 29C119 28.5 121 28 123 28C141 28 156 42 156 60C156 61 156 62 155.9 63C165 65 172 73 172 82C172 89 166 95 158 95H40C31 95 24 88 24 79"
        fill="white"
      />
    </svg>
  );
}
