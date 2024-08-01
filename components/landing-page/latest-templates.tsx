import { Templates } from "$/constants";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import TemplateCard from "./_components/template-card";

export default function LatestTemplates() {
  return (
    <section className="py-16 p-6">
      <div className="max-w-screen-xl w-full mx-auto text-center flex flex-col gap-8">
        <h1 className="text-white text-xl lg:text-4xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-primary-purple">
            Latest
          </span>{" "}
          Templates
        </h1>
        <Carousel>
          <CarouselContent>
            {Templates.map((template) => (
              <CarouselItem className="basis-1/3" key={template.id}>
                <TemplateCard template={template} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
