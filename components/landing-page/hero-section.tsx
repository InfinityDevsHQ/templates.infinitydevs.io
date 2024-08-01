export default function HeroSection() {
  return (
    <section className="p-2.5 flex items-center justify-center h-container">
      <div className="max-w-screen-lg flex flex-col gap-8 text-center">
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light text-lg lg:text-2xl font-bold">
          HIGH PERFORMANT
        </p>
        <h1 className="text-white text-5xl lg:text-primary-xl font-bold">
          Website{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-primary-purple">
            Templates
          </span>{" "}
          and Landing Pages
        </h1>
        <p className="text-white font-medium text-lg lg:text-2xl">
          Choose from 9+ website templates and landing pages. Explore high
          quality templates with high page speed score.
        </p>
      </div>
    </section>
  );
}
