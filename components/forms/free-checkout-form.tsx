"use client";
import { Loader, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMail } from "$/lib/send-mail";
import { toast } from "sonner";
const contactFormSchema = z.object({
  email: z.string().email({ message: "Please Enter a valid email address" }),
});
export default function FreeCheckoutForm({
  template,
}: {
  template: TemplateCard;
}) {
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    try {
    } catch (error) {}
    const res = await sendMail({
      subject: `Free ${template.title} template request.`,
      text: `Email: ${values?.email}\nMessage: I want the ${template.title} template fro free.`,
    });
    console.log(res);
    if (res?.messageId) {
      toast.success("Message Sent Successfully");
    }
    if (!res?.messageId) toast.error("Failed To send Message");
  }
  return (
    <Form {...form}>
      <form
        className="bg-[url('/templates-bg.png')] bg-cover bg-no-repeat"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="uppercase flex flex-col gap-6 text-primary-foreground">
          <div className="md:max-w-2xl w-full mx-auto px-8 pb-20 pt-12 md:pt-32">
            <div className="flex flex-col h-fit  md:h-screen p-4">
              <div className="md:p-8 w-full">
                <h2 className="text-2xl font-semibold text-center md:text-start mb-2">
                  Want this for free?
                </h2>
                <p className="text-center md:text-start mb-10">
                  Enter the email address we should send it to below.
                </p>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl className="flex flex-col gap-4">
                        <Input
                          placeholder="someone@domain.com"
                          {...field}
                          className="w-full p-2.5 border rounded-lg mb-4 focus:outline-none focus:ring focus:ring-light-velvet"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  aria-label="form-submit button"
                  className="w-full p-2.5 bg-light-velvet text-white font-semibold rounded-lg flex justify-center items-center gap-2 hover:bg-light-velvet/90 transition duration-300 ease-in-out"
                >
                  SUBMIT
                  {isLoading ? (
                    <Loader size={20} className="animate-spin" />
                  ) : (
                    <Send className="rotate-45" size={20} />
                  )}
                </button>
                <div className="flex justify-center space-x-2 mt-6 text-sm">
                  <span>Powered by Lemon Squeezy</span>
                  <span>·</span>

                  <a href="#" className="hover:underline">
                    Terms
                  </a>
                  <span>·</span>
                  <a href="#" className="hover:underline">
                    Privacy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
