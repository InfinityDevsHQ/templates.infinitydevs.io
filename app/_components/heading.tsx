import { ReactNode } from "react";

export type Headng = {
  children: ReactNode;
  size?: "h2" | "h3" | "h3" | "h4" | "h5" | "h6";
  className?: string;
};
export default function Heading({ children, size = "h2", className }: Headng) {
  switch (size) {
    case "h2":
      return (
        <h2
          className={`text-3xl lg:text-4xl 2xl:text-5xl text-white ${className}`}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`text-2xl lg:text-3xl 2xl:text-4xl text-white ${className}`}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={`text-xl lg:text-xl 2xl:text-2xl text-white  ${className}`}
        >
          {children}
        </h4>
      );
    default:
      break;
  }
}
