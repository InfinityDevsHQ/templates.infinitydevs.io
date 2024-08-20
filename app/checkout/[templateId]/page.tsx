import CheckoutForm from "$/components/forms/checkout-form";
import FreeCheckoutForm from "$/components/forms/free-checkout-form";
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
    <section>
      <div className="w-full grid lg:grid-cols-2 relative">
        <Image
          src="/logo-dark.png"
          alt="Infinity devs logo"
          className="ml-6 mt-6 absolute top-1 left-1"
          width={144}
          height={24}
        />
        <div className="bg-gray-50 text-gray-900">
          <div className="mx-auto sm:max-w-[400px] md:max-w-[512px] px-8 pb-12 pt-32 md:pb-32">
            <div>
              <div className="mb-8">
                <div className="flex items-start">
                  <h1 className="text-2xl font-medium">
                    <span>{template?.title}</span>
                  </h1>
                  <p className="ml-auto flex-shrink-1">
                    <span className="ml-2 text-xl">
                      <span className="text-xl text-gray-400 font-semibold">
                        {template?.price || "Free"}
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="relative rounded-lg mb-8">
                <div className="rounded-lg  flex items-center justify-center p-4 bg-gradient-to-r from-primary-blue via-light-velvet to-primary">
                  <Image
                    src={template?.imgUrl || ""}
                    width={448}
                    height={336}
                    alt="Template Thumbnail"
                  />
                </div>
              </div>
              <div>
                <div className="text-sm lg:text-base">
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
        {/* <div onLoad={handleLoad}></div> */}
        {template?.price === "Free" ? (
          <FreeCheckoutForm template={template} />
        ) : (
          <CheckoutForm />
        )}
      </div>
    </section>
  );
}
