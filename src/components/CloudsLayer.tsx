import Cloud from "./Cloud";

export default function CloudsLayer() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <Cloud className="absolute top-[8%] w-28 opacity-70 animate-drift-slow" />
      <Cloud className="absolute top-[22%] w-16 opacity-50 animate-drift-slower" />
      <Cloud className="absolute top-[45%] w-20 opacity-40 animate-drift-slow" />
      <Cloud className="absolute top-[68%] w-24 opacity-60 animate-drift-slower" />
      <Cloud className="absolute top-[85%] w-14 opacity-40 animate-drift-slow" />
    </div>
  );
}
