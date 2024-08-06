import CheckoutForm from "$/components/forms/checkout-form";
import { Templates } from "$/constants";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
export default function TemplateCheckout({
  params,
}: {
  params: { templateId: string };
}) {
  const template = Templates.find(
    (template) => template.id === Number(params.templateId)
  );
  if (!template) return notFound();
  return (
    <section className="w-full grid grid-cols-2 min-h-screen">
      <div className="bg-gray-300">
        <div className="mx-auto max-w-[512px] px-8 pb-12 pt-32 md:pb-32">
          <div>
            <div className="mb-8">
              <div className="flex items-start">
                <h1 className="text-2xl font-medium">
                  <span>{template?.title}</span>
                </h1>
                <p className="ml-auto flex-shrink-1">
                  <span className="ml-2 text-xl">
                    <span className="text-xl">{template?.price || "Free"}</span>
                  </span>
                </p>
              </div>
            </div>
            <div className="relative rounded-lg mb-8">
              <div className="rounded-lg  flex items-center justify-center">
                <Image
                  src={template?.imgUrl || ""}
                  width={448}
                  height={336}
                  alt="Template Thumbnail"
                />
              </div>
            </div>
            <div>
              <div>
                <p className="mb-4">{template?.description}</p>
                <p>
                  Live Demo at{" "}
                  <Link className="text-primary-blue" href={template?.link}>
                    {template.link}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CheckoutForm />
    </section>
  );
}
