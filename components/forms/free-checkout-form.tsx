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
  name: z.string().min(0, { message: "Name must be 3 characters long." }),
  email: z.string().email({ message: "Please Enter a valid email address" }),
  message: z.string().min(0, { message: "Message cannot be empty." }),
});
export default function FreeCheckoutForm() {
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    try {
    } catch (error) {}
    const res = await sendMail({
      subject: "New Contact Us Form Submission",
      text: `Name: ${values?.name}\nEmail: ${values?.email}\nMessage: ${values?.message}`,
    });
    console.log(res);
    if (res?.messageId) {
      toast.success("Message Sent Successfully");
      const res = await sendMail({
        sendTo: values.email,
        subject: "Thank You Letter from Infinity Devs",
        html: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Thank You for Contacting Infinity Devs</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
              }
              .container {
                width: 80%;
                margin: 0 auto;
                background-color: #fff;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              }
              .header {
                text-align: center;
                padding-bottom: 10px;
              }
              .header h1 {
                margin: 0;
                background-image: linear-gradient(to right, #3d81df, #834ad8, #bb41e1);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
                font-size: 24px;
              }
              .content {
                margin-bottom: 20px;
              }
              .footer {
                text-align: center;
                padding-top: 20px;
                border-top: 1px solid #e4e4e4;
                font-size: 0.9em;
                color: #777;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="content">
                <div class="header">
                <h1>
                  Thank you for reaching out to <br/> Infinity Devs!  
                </h1>
                </div>
                <p>Dear ${values.name},</p>
                <p>
                  We have received your message and our team will get back to you as soon as possible.
                </p>
                <p>Best regards,</p>
                <p><a href='https://infinitydevs.io/'>Infinity Devs</a></p>
              </div>
            </div>
          </body>
        </html>
        `,
      });
      console.log("Here it is ", res);
    }
    if (!res?.messageId) toast.error("Failed To send Message");
  }

  // Email Sent
  // <div className="md:max-w-2xl w-full mx-auto px-8 pb-20 pt-12 md:pt-32">
  //            <div className="flex flex-col h-fit  md:h-screen p-4">
  //              <div className="md:p-8 w-full">
  //                <h2 className="text-2xl font-semibold text-center md:text-start mb-2">
  //                  Email Sent
  //                </h2>
  //              </div>
  //            </div>
  //          </div>

  return (
    <Form {...form}>
      <form className="bg-white" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="uppercase flex flex-col gap-6">
          <div className="md:max-w-2xl w-full mx-auto px-8 pb-20 pt-12 md:pt-32">
            <div className="flex flex-col h-fit  md:h-screen p-4">
              <div className="md:p-8 w-full">
                <h2 className="text-2xl font-semibold text-center md:text-start mb-2">
                  Want this for free?
                </h2>
                <p className="text-lines text-center md:text-start mb-10">
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
                          className="w-full p-2.5 border rounded-lg mb-4 focus:outline-none focus:ring-1 focus:ring-light-velvet"
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
                <div className="flex justify-center space-x-2 mt-6 text-lines text-sm">
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
