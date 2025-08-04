import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/MovingCards";

const Clients = () => {
  return (
    <div className="py-20 text-white" id="testimonials">
      <h1 className="heading text-4xl md:text-6xl font-bold text-center">
        Kind Words From <span className="text-purple">Satisfied Clients</span>
      </h1>
      <div className="flex justify-center items-center flex-col mt-20">
        <InfiniteMovingCards
          items={testimonials}
          speed="slow"
          direction="right"
        />
        <div className="flex flex-row flex-wrap justify-center items-center gap-8 mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex max-w-32 md:max-w-60 gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt={name} className="w-20 md:w-24" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={nameImg} alt={name} className="w-20 md:w-24" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
