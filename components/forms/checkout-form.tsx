"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { Input } from "../ui/input";
import PayPalPayment from "./checkout-forms/paypal-payment";
import { Button } from "../ui/button";
const cardPaymentSchema = z.object({
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
  const card = useForm<z.infer<typeof cardPaymentSchema>>({
    resolver: zodResolver(cardPaymentSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <div className="bg-white">
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
                  Pay With Paypal
                </TabsTrigger>
              </TabsList>
              <TabsContent value="Pay by Card">
                <Form {...card}>
                  <form>
                    <FormField
                      control={card.control}
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
                      control={card.control}
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
                      control={card.control}
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
                      control={card.control}
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
                    <div className="my-6">
                      <div className="flex items-center justify-center py-2">
                        <span>Subtotal</span>
                        <span className="ml-auto">$50</span>
                      </div>
                      <div className="flex items-center justify-center py-2 font-medium">
                        <span>Total</span>
                        <span className="ml-auto">$50</span>
                      </div>
                    </div>
                    <Button className="w-full py-2.5 bg-violet-500 mb-8">
                      Pay $50.00
                    </Button>
                    <Button
                      type="button"
                      className="w-full bg-gray-300 text-zinc-600"
                      disabled
                    >
                      <Lock className="h-6 w-6 mr-2" />
                      <span>Payments are secure and encrypted</span>
                    </Button>
                  </form>
                </Form>
              </TabsContent>
              <TabsContent value="Pay With Paypal">
                <PayPalPayment />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
