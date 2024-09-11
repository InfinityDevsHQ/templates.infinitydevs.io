export default function HeroSection() {
  return (
    <section className="p-2.5 flex items-center justify-center">
      <div className="max-w-screen-lg flex flex-col gap-4 lg:gap-8 text-center py-20 sm:py-24 md:py-32 lg:py-36">
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light text-base md:text-lg xl:text-2xl font-bold">
          HIGH PERFORMANT
        </p>
        <h1 className="text-white text-4xl md:text-5xl lg:text-primary-xl font-bold">
          Website{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-primary-purple">
            Templates
          </span>{" "}
          and
          <br /> Landing Pages
        </h1>
        <p className="text-white font-medium sm:text-lg lg:text-2xl px-4 sm:px-8 lg:px-0">
          Choose from 9+ website templates and landing pages. Explore high
          quality templates with high page speed score.
        </p>
      </div>
    </section>
  );
}
