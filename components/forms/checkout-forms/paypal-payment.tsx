"use client";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "$/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const paypalSchema = z.object({
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
export default function PayPalPayment({
  countries,
}: {
  countries: CountriesData[];
}) {
  const form = useForm<z.infer<typeof paypalSchema>>({
    resolver: zodResolver(paypalSchema),
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
                <span className="text-accent-foreground">Email</span>
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
        {/* Billing Address */}
        <>
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Billing Address</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="!rounded-b-none border-collapse text-accent-heading bg-primary-dark focus:ring-0 focus:ring-offset-0">
                      <SelectValue placeholder="Select Your Country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-primary rounded-lg text-accent-heading border-primary-dark">
                    {countries.map((country) => (
                      <SelectItem
                        key={country.status}
                        value={country.name.common}
                      >
                        {country.name.common}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="discountCode"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormControl>
                  <Input
                    className="checkout-form-input !rounded-t-none focus:!ring-0 focus:!ring-offset-0 focus:border-zinc-950"
                    placeholder="Postal Code"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </>
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="mb-3 text-sm checkout-form-label">
                <span className="text-accent-foreground">Full Name</span>
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
                <span className="text-accent-foreground">Tax ID number </span>
                <span className="text-xs text-accent-text">(optional)</span>
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
                <span className="text-accent-foreground">Tax ID number </span>

                <span className="text-xs text-accent-text">(optional)</span>
              </FormLabel>
              <FormControl>
                <Input className="checkout-form-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="my-6 text-accent-foreground">
          <div className="flex items-center justify-center py-2">
            <span>Subtotal</span>
            <span className="ml-auto">$50</span>
          </div>
          <div className="flex items-center justify-center py-2 font-medium">
            <span>Total</span>
            <span className="ml-auto">$50</span>
          </div>
        </div>
        <Button type="submit" className="w-full bg-yellow-500 mb-8">
          Pay With Paypal
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
  );
}
