import React from "react";
import smoothScroll from "../utils/smoothScroll";
import Link from "next/link";

export type DesktopNavProps = {
  className?: string;
};
export default function DesktopNav({ className }: DesktopNavProps) {
  return (
    <nav className={`text-white text-lg capitalize ${className || ""}`}>
      <ol className="flex items-center justify-between gap-12 xl:gap-16 text-center">
        <li>
          <button
            type="button"
            className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-primary"
            onClick={() => smoothScroll({ sectionId: "about-us" })}
          >
            About Us
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-primary"
            onClick={() => smoothScroll({ sectionId: "Testimonials" })}
          >
            Testimonials
          </button>
        </li>
        <li>
          <Link
            href={"/portfolio"}
            className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-primary"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <button
            type="button"
            className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-primary self-end"
            onClick={() => smoothScroll({ sectionId: "contact-us" })}
          >
            Contact Us
          </button>
        </li>
      </ol>
    </nav>
  );
}
