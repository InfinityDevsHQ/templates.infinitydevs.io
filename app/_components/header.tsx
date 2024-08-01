"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import DesktopNav from "./navigation";
import smoothScroll from "../utils/smoothScroll";

export type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  return (
    <header
      className={`flex z-50 left-0 items-end justify-between bg-transparent w-full px-4 md:px-10 lg:px-12 py-4 lg:py-8 ${className}`}
    >
      <Link href={"/"}>
        <Image
          src={"/logo-light.png"}
          width={200}
          height={200}
          className="hidden lg:inline-block"
          alt="Infinity Devs Logo"
        />
        <Image
          src={"/logo-light.png"}
          width={170}
          height={170}
          className="lg:hidden"
          alt="Infinity Devs Logo"
        />
      </Link>

      <div>
        <div className="lg:hidden">
          <button
            aria-label="Sidebar-menu-open-button"
            type="button"
            className="text-white font-bold pt-1 mt-1"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-full" />
          </button>
          <AnimatePresence>
            {sidebarOpen && (
              <motion.div
                className="flex fixed top-0 z-50 right-0 h-screen w-screen"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sidebarVariants}
              >
                <div className="bg-gray-900 h-full w-full">
                  <div className="px-6 py-4">
                    <button
                      aria-label="Sidebar menu close button"
                      type="button"
                      className="text-white text-4xl w-full flex justify-end"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <X size={32} />
                    </button>
                  </div>
                  <nav className="flex items-center justify-center text-zinc-300 text-2xl capitalize font-bold h-full">
                    <ol className="h-full flex flex-col items-center justify-center gap-14 mb-24">
                      <li>
                        <button
                          type="button"
                          onClick={() => {
                            smoothScroll({ sectionId: "about-us" });
                            setSidebarOpen(false);
                          }}
                        >
                          About Us
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={() => {
                            smoothScroll({ sectionId: "Testimonials" });
                            setSidebarOpen(false);
                          }}
                        >
                          Testimonials
                        </button>
                      </li>
                      <li>
                        <Link href={"/portfolio"}>Portfolio</Link>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={() => {
                            smoothScroll({ sectionId: "contact-us" });
                            setSidebarOpen(false);
                          }}
                        >
                          Contact Us
                        </button>
                      </li>
                      {/* <li>
                        <Link href={"/"}></Link>
                      </li> */}
                    </ol>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <DesktopNav className="hidden lg:flex justify-between" />
    </header>
  );
}
