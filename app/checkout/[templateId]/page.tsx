import CheckoutForm from "$/components/forms/checkout-form";

export default function TemplateCheckout({
  params,
}: {
  params: { templateId: string };
}) {
  return (
    <section className="w-full grid grid-cols-2 min-h-screen">
      <div className="bg-gray-300"></div>
      <CheckoutForm />
    </section>
  );
}
