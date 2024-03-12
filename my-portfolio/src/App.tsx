import { Boxes } from "./components/background-boxes";
import { cn } from "../src/utils/cn";
 
export function HeroSection() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Jorge Castano
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Web/Software Developer
      </p>
    </div>
  );
}

function App() {
  return(
    <div>
      <HeroSection />
    </div>
  )
}
export default App;
