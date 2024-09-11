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
    <section className="py-8 md:py-12 lg:py-16 p-6 relative lg:mb-16">
      <div className="max-w-screen-xl w-full mx-auto text-center flex flex-col gap-12 lg:gap-8">
        <div className="uppercase">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ">
            <span
              style={{}}
              className="bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-primary-purple"
            >
              Latest
            </span>{" "}
            Templates
          </h1>
        </div>
        <Carousel setApi={setCarouselApi}>
          <CarouselContent className="items-center w-full h-full">
            {Templates.map((template, index) => (
              <CarouselItem
                className={`lg:basis-1/3 duration-300 transition-all lg:scale-75 ${
                  index === selectedIndex + 1 ? " lg:!scale-100" : ""
                }`}
                key={template.id}
              >
                <TemplateCard template={template} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="hidden sm:flex right-10 !h-12 !w-12 bg-accent-purple/50 border-none text-slate-50 mt-11" />
          <CarouselPrevious className="hidden sm:flex left-10 !h-12 !w-12 bg-accent-purple/50 text-slate-50 border-none mt-11" />
        </Carousel>
      </div>
    </section>
  );
}
