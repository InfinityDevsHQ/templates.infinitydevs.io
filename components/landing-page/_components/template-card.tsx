import Image from "next/image";
import Link from "next/link";

export default function TemplateCard({ template }: { template: TemplateCard }) {
  return (
    <article className="relative shadow-2xl">
      <Link href={`/checkout/${template.id}`}>
        <Image
          src={template.imgUrl}
          alt="Template Thumbnail"
          width={348}
          height={485}
          className="w-full h-full object-cover"
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
    </article>
  );
}
