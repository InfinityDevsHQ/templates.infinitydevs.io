import { Templates } from "$/constants";
import TemplateCard from "./_components/template-card";

export default function AllTemplates() {
  return (
    <section className="py-16 p-6">
      <div className="max-w-screen-xl w-full mx-auto text-center flex flex-col gap-8">
        <h1 className="text-white text-xl lg:text-4xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-primary-purple">
            Our
          </span>{" "}
          Templates
        </h1>
        <div className="grid lg:grid-cols-3 gap-16">
          {Templates.map((template) => (
            <TemplateCard template={template} key={template.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
