"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { Input } from "../ui/input";
const checkoutFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid Email Address" }),
  fullName: z.string().min(1, { message: "Please Enter Your Name" }),
  taxIdNumber: z.number().optional(),
  discountCode: z
    .string()
    .min(1, { message: "Please Enter a discount code" })
    .optional(),
  country: z.string(),
  address: z.string(),
  postalCode: z.string(),
});
export default function CheckoutForm() {
  const form = useForm<z.infer<typeof checkoutFormSchema>>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: "",
    },
  });
  return (
    <Form {...form}>
      <form className="bg-white">
        <div className="max-w-70 w-full mx-auto px-8 pb-20 pt-12 md:pt-32">
          <div>
            <div>
              <Tabs defaultValue="Pay by Card" className="w-full">
                <TabsList className="w-full mb-8 0.5 rounded-lg">
                  <TabsTrigger
                    className="w-1/2 py-1.5 px-4 text-sm"
                    value="Pay by Card"
                  >
                    Pay by Card
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-1/2 py-1.5 px-4 text-sm"
                    value="Pay With Paypal"
                  >
                    Password
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="Pay by Card">
                  <div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="mb-6">
                          <FormLabel className="mb-3 text-sm checkout-form-label">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="checkout-form-input"
                              placeholder="eg. john@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem className="mb-6">
                          <FormLabel className="mb-3 text-sm checkout-form-label">
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input className="checkout-form-input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="taxIdNumber"
                      render={({ field }) => (
                        <FormItem className="mb-6">
                          <FormLabel className="mb-3 text-sm checkout-form-label">
                            Tax ID number{" "}
                            <span className="text-xs text-gray-500">
                              (optional)
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input className="checkout-form-input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="discountCode"
                      render={({ field }) => (
                        <FormItem className="mb-6">
                          <FormLabel className="mb-3 text-sm checkout-form-label">
                            Tax ID number{" "}
                            <span className="text-xs text-gray-500">
                              (optional)
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input className="checkout-form-input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="Pay With Paypal">
                  <div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="mb-6">
                          <FormLabel className="mb-3 text-sm checkout-form-label">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="checkout-form-input"
                              placeholder="eg. john@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-sm mt-3" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem className="mb-6">
                          <FormLabel className="mb-3 text-sm checkout-form-label">
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input className="checkout-form-input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="taxIdNumber"
                      render={({ field }) => (
                        <FormItem className="mb-6">
                          <FormLabel className="mb-3 text-sm checkout-form-label">
                            Tax ID number{" "}
                            <span className="text-xs text-gray-500">
                              (optional)
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input className="checkout-form-input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="discountCode"
                      render={({ field }) => (
                        <FormItem className="mb-6">
                          <FormLabel className="mb-3 text-sm checkout-form-label">
                            Tax ID number{" "}
                            <span className="text-xs text-gray-500">
                              (optional)
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input className="checkout-form-input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
