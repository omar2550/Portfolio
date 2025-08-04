import { workExperience } from "@/data";
import { Button } from "./ui/Button";

const Experience = () => {
  return (
    <div className="py-20 text-white" id="experience">
      <h1 className="heading text-4xl md:text-6xl font-bold text-center">
        My <span className="text-purple">Work Experience</span>
      </h1>
      <div className="w-full mt-20 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {workExperience.map((e) => (
          <Button
            key={e.id}
            className="flex-1 border-slate-800"
            duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <div
              className="flex flex-col lg:flex-row 
            lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2
            "
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={e.thumbnail}
                alt={e.title}
                className="w-16 md:w-20 lg:w-32 flex mx-auto sm:m-0"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {e.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {e.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
