import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "$/components/ui/sonner";
import Header from "./_components/header";
import Footer from "$/components/gernal/footer";

const notoSans = Noto_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infinity Devs",
  description:
    "Infinity Devs is a creative agency specializing in software development, website design, graphic design, and Figma design. Transform your ideas into reality with our expert team.",
  keywords: [
    "Infinity Devs",
    "infinitydevs.io",
    "infinity Devs io",
    "Software Development Company",
    "Web Development Company",
    "Software Houses",
    "Software Engineering",
    "UI/UX Design",
    "Tailwind CSS",
    "Reactjs",
    "Nextjs",
    "Wordpress",
    "Vuejs",
    "Nuxtjs",
    "TypeScript",
    "Zod",
    "SaaS",
    "SCSS",
    "Mongodb",
    "Figma",
    "Sql",
    "Django",
    "Python",
    "SQL",
    "xd",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Web Apps Development",
    "Website Builders",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Header />
        {children}
        <Footer />
        <Toaster richColors />
      </body>
    </html>
  );
}
