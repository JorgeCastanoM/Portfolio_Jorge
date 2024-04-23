import { Boxes } from "./background-boxes";
 
export function HeroSection() {
  return (
    <div className="h-dvh relative w-full overflow-hidden bg-white flex flex-col items-center justify-center rounded-lg">
      <Boxes />
      <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8" inline-style={{ color: 'white', fontSize: '1.5rem' }}>
        Jorge Castano
      </h1>
      <p className="text-center sm:text-2x1 font-bold z-20 bg-slate-200 p-4 text-zinc-700 border-2" inline-style={{ fontSize: '1rem' }}>
        &lt;Web/Software Developer /&gt;
      </p>
      
    </div>
  );
}

export default HeroSection