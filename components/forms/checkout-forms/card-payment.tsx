import { Button } from "$/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "$/components/ui/form";
import { Input } from "$/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CreditCard, Lock } from "lucide-react";
import { z } from "zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "$/components/ui/tabs";
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

export default function CardPaymentForm() {
  const form = useForm<z.infer<typeof cardPaymentSchema>>({
    resolver: zodResolver(cardPaymentSchema),
    defaultValues: {
      email: "",
    },
  });
  return (
    <Form {...form}>
      <form>
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

        <Tabs className="mb-6" defaultValue="card">
          <TabsList className="bg-transparent w-full gap-2 mb-8">
            <TabsTrigger
              className="flex-col p-3 border shadow-none border-gray-200 bg-white justify-start items-start w-full text-gray-600 data-[state=active]:text-violet-600 data-[state=active]:border-violet-600 rounded-lg"
              value="card"
            >
              <span>
                <CreditCard className="h-3 w-3" />
              </span>
              <span className="pt-1 text-sm">Card</span>
            </TabsTrigger>
            <TabsTrigger
              className="flex-col p-3 border shadow-none border-gray-200 bg-white justify-start items-start w-full text-gray-600 data-[state=active]:text-violet-600 data-[state=active]:border-violet-600 rounded-lg"
              value="alipay"
            >
              <span>
                <CreditCard className="h-3 w-3" />
              </span>
              <span className="pt-1 text-sm">Alipay</span>
            </TabsTrigger>
            <TabsTrigger
              className="flex-col p-3 border shadow-none border-gray-200 bg-white justify-start items-start w-full text-gray-600 data-[state=active]:text-violet-600 data-[state=active]:border-violet-600 rounded-lg"
              value="we-chat-pay"
            >
              <span>
                <CreditCard className="h-3 w-3" />
              </span>
              <span className="pt-1 text-sm">WeChat Pay</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="card">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="mb-6">
                  <FormLabel className="mb-3 text-sm checkout-form-label">
                    Cardholder name
                  </FormLabel>
                  <FormControl>
                    <Input className="checkout-form-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TabsContent>
          <TabsContent value="alipay">
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
          </TabsContent>
          <TabsContent value="we-chat-pay">
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
          </TabsContent>
        </Tabs>

        <FormField
          control={form.control}
          name="taxIdNumber"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="mb-3 text-sm checkout-form-label">
                Tax ID number{" "}
                <span className="text-xs text-gray-500">(optional)</span>
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
                <span className="text-xs text-gray-500">(optional)</span>
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
        <Button className="w-full py-2.5 bg-violet-500 mb-8">Pay $50.00</Button>
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
  );
}
