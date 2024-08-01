import Image from "next/image";
import Link from "next/link";

export default function TemplateCard() {
  return (
    <article className="relative">
      <Link href={"/"}>
        <Image
          src={"/templates/template-1.png"}
          alt="Template Thumbnail"
          width={348}
          height={484}
          className="w-full h-full bg-white"
        />

        <div className="flex items-center p-4 bg-gradient-to-r from-primary/90 to-primary-dark/90 absolute w-full bottom-0 left-0">
          <div className="flex justify-between w-full text-accent-foreground">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg uppercase self-start">
                PORTFOLIO
              </h3>
              <p className="text-xs">Next.js Template for Recruiters</p>
            </div>
            <span className="font-bold text-lg">$ 50</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
