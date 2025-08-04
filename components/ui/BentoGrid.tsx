"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientAnimation";
import { GlobeDemo } from "./GlobeDemo";
import Lottie from "lottie-react";
import copiedAni from "@/data/copiedAni.json";

import { useState } from "react";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  titleClassName,
  description,
  id,
  img,
  imgClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  titleClassName?: string;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("omr222000@gmail.com");

    setCopied(true);
  };

  return (
    <div
      className={cn(
        "group/bento relative overflow-hidden shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl transition duration-200 hover:shadow-xl dark:shadow-none border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                "object-cover object-center w-full h-full"
              )}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div>
        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            titleClassName,
            "transition duration-200 group-hover/bento:translate-x-2 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base md:max-w-32 z-10">
            {description}
          </div>
          <div className="font-sans text-white font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
          {id === 6 && (
            <div className="relative mt-5">
              <div className="absolute -bottom-5 right-0">
                {copied && (
                  <Lottie
                    animationData={copiedAni}
                    loop={false}
                    autoplay={true}
                  />
                )}
              </div>
              <MagicButton
                title={copied ? "Email Copied" : "Copy My Email"}
                icon={<IoCopyOutline />}
                position="left"
                classes="bg-[#161a31] gap-2"
                handleClick={handleCopy}
              />
            </div>
          )}
          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-5">
                {["React.js", "Next.js", "TailwindCSS"].map((s) => (
                  <span
                    key={s}
                    className="py-2 lg:py-4 px-3  text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e] text-white"
                  >
                    {s}
                  </span>
                ))}
                <span className="py-4 lg:py-7 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-5">
                <span className="py-4 lg:py-7 px-3 rounded-lg text-center bg-[#10132e]" />
                {["HTML", "CSS", "JavaScript"].map((s) => (
                  <span
                    key={s}
                    className="py-2 lg:py-4 px-3  text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e] text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
