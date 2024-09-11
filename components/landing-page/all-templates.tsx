import { Templates } from "$/constants";
import TemplateCard from "./_components/template-card";

export default function AllTemplates() {
  return (
    <section className="pt-8 pb-8 p-6 relative" id="templates">
      <div className="max-w-screen-xl w-full mx-auto text-center flex flex-col gap-12 md:gap-8">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-primary-purple">
            Our
          </span>{" "}
          Templates
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-16">
          {Templates.map((template) => (
            <TemplateCard template={template} key={template.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
