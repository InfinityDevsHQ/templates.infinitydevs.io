import React from "react";
import smoothScroll from "../utils/smoothScroll";
import Link from "next/link";

export type DesktopNavProps = {
  className?: string;
};
export default function DesktopNav({ className }: DesktopNavProps) {
  return (
    <nav className={`text-white text-lg capitalize ${className || ""}`}>
      <ol className="flex items-center justify-between gap-12 text-center">
        <li>
          <Link
            href={"https://infinitydevs.io/"}
            className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-primary"
          >
            Home
          </Link>
        </li>
        <li>
          <button
            type="button"
            className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-primary"
            onClick={() => smoothScroll({ sectionId: "templates" })}
          >
            Templates
          </button>
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
