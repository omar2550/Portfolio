import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

function Hero() {
  return (
    <div className="pb-20 pt-36" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10
        md:-left-32 md:--top-20 h-screen "
          fill="white"
        />
        <Spotlight
          className="top-10 left-full
        h-[80vh] w-[50vh]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80
        h-[80vh] w-[50vh]"
          fill="blue"
        />
      </div>

      <div
        className="absolute top-0 left-0 flex h-[50rem] w-full
         items-center justify-center
          bg-white dark:bg-black-100"
      >
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_0.07px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_0.07px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_0.07px,transparent_1px),linear-gradient(to_bottom,#262626_0.07px,transparent_1px)]"
          )}
        />
        <div
          className="pointer-events-none absolute inset-0 flex items-center 
          justify-center bg-white 
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]
          dark:bg-black-100"
        />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div
          className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex
          justify-center items-center flex-col"
        >
          <h2 className="tracking-widest text-xs uppercase text-blue-100 max-w-80">
            Dynamic Web Magic With Next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-[30px] sm:text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User Experiences"
          />
          <p className="text-white md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I am Omar, a Front-End Developer
          </p>

          <a href="#about">
            <MagicButton
              title="Show My Work"
              icon={<FaLocationArrow />}
              position="right"
              classes="gap-2"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
