"use client";

import { useState, useEffect } from "react";
import { Templates } from "$/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "../ui/carousel";
import TemplateCard from "./_components/template-card";
import Link from "next/link";

export default function LatestTemplates() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setSelectedIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  return (
    <section className="py-16 p-6 relative mb-16">
      <Link
        className="absolute text-white text-xl font-medium right-12 uppercase"
        href={"#"}
      >
        View all
      </Link>
      <div className="max-w-screen-xl w-full mx-auto text-center flex flex-col gap-8">
        <div className="uppercase">
          <h1 className="text-white text-xl lg:text-4xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-primary-purple">
              Latest
            </span>{" "}
            Templates
          </h1>
        </div>
        <Carousel
          setApi={setCarouselApi}
          className="max-h-[600px] max-w-[1167px] mx-auto -mt-11"
        >
          <CarouselContent className="items-center w-full h-full">
            {Templates.map((template, index) => (
              <CarouselItem
                className={`lg:basis-1/4 transition-transform duration-300 pl-0 ${
                  index === selectedIndex + 1
                    ? "lg:basis-1/2 scale-90"
                    : "scale-85"
                }`}
                key={template.id}
              >
                <TemplateCard template={template} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="right-10 !h-12 !w-12 bg-accent-purple/50 border-none text-slate-50 mt-11" />
          <CarouselPrevious className="left-10 !h-12 !w-12 bg-accent-purple/50 text-slate-50 border-none mt-11" />
        </Carousel>
      </div>
    </section>
  );
}
