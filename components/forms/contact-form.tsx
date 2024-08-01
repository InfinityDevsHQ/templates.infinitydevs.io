"use client";
import { Loader, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import Timings from "../landing-page/_components/timings";
import { Textarea } from "../ui/textarea";
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
import { Label } from "../ui/label";
const contactFormSchema = z.object({
  name: z.string().min(3, { message: "Name must be 3 characters long." }),
  email: z.string().email({ message: "Please Enter a valid email address" }),
  message: z.string().min(1, { message: "Message cannot be empty." }),
});
export default function ContactForm() {
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
      text: `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`,
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

  return (
    <Form {...form}>
      <form
        className="grid lg:grid-cols-2 gap-12 bg-indigo-900/10 border rounded-3xl border-blue-400/30 text-zinc-300 px-6 py-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Timings />
        <div className="uppercase flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Label htmlFor="name">Name *</Label>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="flex flex-col gap-4">
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="bg-blue-900/40 placeholder:text-zinc-400 border border--white/30 outline-none !ring-0 ring-offset-transparent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="email">Email *</Label>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="flex flex-col gap-4">
                    <Input
                      placeholder="someone@domain.com"
                      {...field}
                      className="bg-blue-900/40 placeholder:text-zinc-400 border border--white/30 outline-none !ring-0 ring-offset-transparent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="message">Message *</Label>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="flex flex-col gap-4">
                    <Textarea
                      placeholder="Type your message"
                      {...field}
                      className="bg-blue-900/40 placeholder:text-zinc-400 border border--white/30 outline-none !ring-0 ring-offset-transparent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <button
            type="submit"
            aria-label="form-submit button"
            className="bg-blue-900/40 flex items-center gap-2 px-4 py-2 self-start common-border rounded-full"
          >
            SUBMIT
            {isLoading ? (
              <Loader size={20} className="animate-spin" />
            ) : (
              <Send className="rotate-45" size={20} />
            )}
          </button>
        </div>
      </form>
    </Form>
  );
}
