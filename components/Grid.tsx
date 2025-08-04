import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((b) => (
          <BentoGridItem
            key={b.id}
            id={b.id}
            className={b.className}
            title={b.title}
            titleClassName={b.titleClassName}
            description={b.description}
            img={b.img}
            imgClassName={b.imgClassName}
            spareImg={b.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
