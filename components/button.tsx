import { ReactNode } from "react";
import Link from "next/link";
import smoothScroll from "$/app/utils/smoothScroll";

export type ButtonProps = {
  children: ReactNode;
  type?: "submit" | "button" | "reset";
  className?: string;
  disabled?: boolean;
  scrollTarget?: string;
};
export default function Button({
  children,
  type = "button",
  className,
  disabled = false,
  scrollTarget,
}: ButtonProps) {
  return scrollTarget ? (
    <button
      className={`px-4 py-2 bg-blue-600 ${
        disabled ? "cursor-not-allowed bg-blue-300 hover:bg-blue-300" : ""
      } hover:bg-blue-400 transition-all text-base font-semibold rounded-md text-white ${className}`}
      type={type}
      disabled={disabled}
      onClick={() =>
        smoothScroll({
          sectionId: scrollTarget,
        })
      }
    >
      {children}
    </button>
  ) : (
    <Link href="/">
      <a
        className={`px-4 py-2 bg-blue-600 hover:bg-blue-400 transition-all text-base font-semibold rounded-md text-white ${className}`}
        type={type}
      >
        {children}
      </a>
    </Link>
  );
}
