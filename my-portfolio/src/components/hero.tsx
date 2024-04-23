import { Boxes } from "./background-boxes";
 
export function HeroSection() {
  return (
    <div className="h-dvh relative w-full overflow-hidden bg-white flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-white z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <h1 className="text-4xl sm:text-7xl font-bold py-8">
        Jorge Castano
      </h1>
      <p className="text-center sm:text-2x1 font-bold z-20 bg-slate-200 p-4 text-zinc-700 border-2">
        &lt;Web/Software Developer /&gt;
      </p>
    </div>
  );
}

export default HeroSection