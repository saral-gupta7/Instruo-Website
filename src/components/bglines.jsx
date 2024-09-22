import { BackgroundLines } from "./ui/background-lines";
import { BackgroundBeams } from "./ui/background-beams";
import { Cover } from "./ui/cover";

export default function BackgroundLinesDemo() {
  return (
    <div className="relative z-[-10]">
      <BackgroundBeams />
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 h-screen">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-r from-blue-400 to-purple-600 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight mt-[-1rem]">
          Experience the Future at <br />
          <Cover>
            <span className="text-3xl md:text-5xl lg:text-8xl mt-6 md:mt-8 lg:mt-10">
              Instruo 2024!
            </span>
          </Cover>
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Join Kolkata&apos;s premier tech fest for innovation, competitions,
          and hands-on workshops. Ignite your ideas and revolutionize the
          future!
        </p>
      </BackgroundLines>
    </div>
  );
}
