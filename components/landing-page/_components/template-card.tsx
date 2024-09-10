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
      {isLoading ? (
        <span className="flex items-center justify-center">
          <Loader color="white" size={40} className="animate-spin fill-white" />
        </span>
      ) : (
        <Link href={`/checkout/${template.id}`} onClick={handleClick}>
          <Image
            src={template.imgUrl}
            alt="Template Thumbnail"
            width={348}
            height={485}
            className="w-full h-full object-fill lg:max-h-[650px]"
            quality={100}
          />

          <div className="flex items-center p-4 bg-gradient-to-r from-primary/90 to-primary-dark/90 absolute w-full bottom-0 left-0">
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
      )}
    </article>
  );
}
