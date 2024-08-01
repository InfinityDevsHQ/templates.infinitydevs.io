import { Templates } from "$/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import TemplateCard from "./_components/template-card";

export default function LatestTemplates() {
  return (
    <section className="py-16 p-6 relative">
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
              <CarouselItem className="lg:basis-1/3" key={template.id}>
                <TemplateCard template={template} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="right-10" />
          <CarouselPrevious className="left-10" />
        </Carousel>
      </div>
    </section>
  );
}
