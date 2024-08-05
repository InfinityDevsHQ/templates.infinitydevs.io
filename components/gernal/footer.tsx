import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Instagram } from "lucide-react";
export default function Footer() {
  return (
    <footer className="p-8 mx-auto max-w-screen-2xl">
      <div className="p-12 rounded-3xl bg-gradient-to-r from-primary-blue/10 via-light-velvet/10 to-primary-purple/10">
        <div className="flex flex-col gap-4 lg:flex-row items-center  justify-between border-b-2 border-lines pb-4">
          <div className="flex items-center justify-center">
            <Image
              src={"/logo-light.png"}
              alt="Infinity Devs lOGO"
              width={237}
              height={48}
            />
          </div>
          {/* <DesktopNav /> */}
          <div className="flex gap-4 text-white">
            <Link
              href={"https://www.linkedin.com/company/infinitydevshq/"}
              target="_blank"
              className="common-gradient hover:-translate-y-1.5 transition-all ease-in-out duration-300 p-2  md:p-3 rounded-full"
            >
              <Linkedin size={28} fill="transparent" />
            </Link>
            <Link
              href={"https://twitter.com/InfinityDevsHQ"}
              target="_blank"
              className="common-gradient hover:-translate-y-1.5 transition-all ease-in-out duration-300 p-2  md:p-3 rounded-full"
            >
              <Twitter size={28} fill="transparent" />
            </Link>
            <Link
              href={"https://www.instagram.com/infinitydevshq"}
              target="_blank"
              className="common-gradient hover:-translate-y-1.5 transition-all ease-in-out duration-300 p-2   md:p-3 rounded-full"
            >
              <Instagram size={28} fill="transparent" />
            </Link>
          </div>
        </div>
        <p className="main-description text-white text-center pt-5 lg:text-xl font-medium">
          Infinity Devs &copy; 2024, All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
