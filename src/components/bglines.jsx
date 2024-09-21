import { BackgroundLines } from "./ui/background-lines";
import { BackgroundBeams } from "./ui/background-beams";
import { Cover } from "./ui/cover";

export default function BackgroundLinesDemo() {
  return (
    <div className="relative z-[-10]">
      <BackgroundBeams />
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight mt-[-1rem]">
          Experience the Future at <br />
          <Cover>Instruo 2024!</Cover>
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Join Kolkata’s premier tech fest for innovation, competitions, and
          hands-on workshops. Ignite your ideas and revolutionize the future!
        </p>
      </BackgroundLines>
    </div>
  );
}
