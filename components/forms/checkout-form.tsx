"use client";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { z } from "zod";
const checkoutFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid Email Address" }),
  fullName: z.string().min(1, { message: "Please Enter Your Name" }),
  taxIdNumber: z.number().optional(),
  discountCode: z.string().min(1, { message: "Please Enter a discount code" }),
  country: z.string(),
  address: z.string(),
  postalCode: z.string(),
});
export default function CheckoutForm() {
  const form = useForm();
  return (
    <Form {...form}>
      <form className="bg-white"></form>
    </Form>
  );
}
