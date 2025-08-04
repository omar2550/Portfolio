import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="py-20 text-white relative" id="contact">
      <div className="w-full min-h-96 absolute left-0 bottom-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-center lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:omr222000@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="left"
          />
        </a>
      </div>
      <div className="flex mt-16 flex-col gap-2 md:flex-row md:gap-0 justify-between items-center">
        <p className="text-sm md:text-base font-light md:font-normal">
          Copyright © 2024 Omar
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
