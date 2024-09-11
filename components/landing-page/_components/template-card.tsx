"use client";

import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TemplateCard({ template }: { template: TemplateCard }) {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <article className="relative shadow-2xl">
      {isLoading && (
        <div className="absolute w-full h-full bg-black opacity-80">
          <span className="flex items-center justify-center absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
            <Loader
              color="white"
              size={40}
              className="animate-spin fill-white"
            />
          </span>
        </div>
      )}

      <Link
        href={`/checkout/${template.id}`}
        onClick={handleClick}
        className="max-h-[650px] max-w-[1167px] lg:max-w-full lg:max-h-full w-fit"
      >
        <Image
          src={template.imgUrl}
          alt="Template Thumbnail"
          width={850}
          height={990}
          className="w-fit h-full max-h-[650px] lg:max-h-full mx-auto"
          quality={100}
        />

        <div className="flex items-center p-4 bg-gradient-to-r from-primary/90 to-primary-dark/90 mx-auto absolute w-full sm:max-w-[494px] lg:max-w-full bottom-0 lg:left-0 left-0 translate-x-0 sm:left-1/2 sm:-translate-x-1/2 lg:translate-x-0">
          <div className="flex justify-between w-full text-accent-foreground">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg uppercase self-start">
                {template.title}
              </h3>
              <p className="text-xs">{template.description}</p>
            </div>
            <span className="font-bold text-lg">
              {template.price || "Free"}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
