import { ReactNode } from "react";
import Heading from "$/app/_components/heading";
export type CardProps = {
  icon?: ReactNode;
  title?: string;
  children: string;
  className?: string;
};
export default function Card({ icon, title, children, className }: CardProps) {
  return (
    <div
      className={`flex flex-col gap-5 sm:gap-6 sm:mt-5 items-center px-2 lg:px-0 py-6 rounded-3xl text-center  border border-purple-400/30 ${className}`}
    >
      <span>{icon}</span>
      <Heading size="h3" className="uppercase font-bold">
        {title}
      </Heading>
      <p className=" lg:text-lg 2xl:text-xl text-zinc-300 px-2 sm:px-6 md:px-8">
        {children}
      </p>
    </div>
  );
}
