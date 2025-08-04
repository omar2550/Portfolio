import { projects } from "@/data";
import { GlareCard } from "./ui/GlareCard";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="py-20 text-white" id="projects">
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        A Small Section of <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap justify-center items-center p-4 gap-x-24 gap-y-8 mt-10 w-full">
        {projects.map((p) => (
          <div
            key={p.id}
            className="h-[35rem] sm:h-[45rem] flex justify-center items-center w-[70vw] sm:w-[490px]"
          >
            <a href="github.com/omar2550" className="">
              <GlareCard className="flex flex-col justify-between">
                <div>
                  <div className="relative flex justify-center items-center overflow-hidden h-[20vh] sm:h-[30vh] mb-10 bg-[#13162d]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.img}
                      alt={p.title}
                      className="absolute bottom-0"
                    />
                  </div>
                  <h1 className="font-bold text-base md:text-xl lg:text-2xl line-clamp-1">
                    {p.title}
                  </h1>
                  <p className="text-sm lg:text-base font-light lg:font-normal line-clamp-2">
                    {p.des}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-15 mb-3">
                  <div className="flex items-center">
                    {p.iconLists.map((icon, i) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center bg-black"
                        style={{
                          transform: `translateX(-${5 * i * 2}px)`,
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={icon} alt={p.title} className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-sm md:text-xs lg:text-xl text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </GlareCard>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
