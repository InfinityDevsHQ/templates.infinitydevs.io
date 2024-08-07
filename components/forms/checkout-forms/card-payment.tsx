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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "$/components/ui/select";

import { Input } from "$/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CreditCard, Lock } from "lucide-react";
import { z } from "zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "$/components/ui/tabs";
import Image from "next/image";
import RedirectionAlert from "../components/redirection-alert";
const cardPaymentSchema = z.object({
  email: z.string().email({ message: "Please enter a valid Email Address" }),
  fullName: z.string().min(1, { message: "Please Enter Your Name" }),
  taxIdNumber: z.number().optional(),
  discountCode: z
    .string()
    .min(1, { message: "Please Enter a discount code" })
    .optional(),
  country: z.string({ message: "Please Select A Country" }),
  postalCode: z.string(),
  cardNumber: z
    .number()
    .min(16, { message: "Please enter a valid card number" })
    .optional(),
  cardExpiryDate: z.string().min(5).max(5).optional(),
  securityCode: z.number().min(4),
});

export default function CardPaymentForm({
  countries,
}: {
  countries: CountriesData[];
}) {
  const form = useForm<z.infer<typeof cardPaymentSchema>>({
    resolver: zodResolver(cardPaymentSchema),
    defaultValues: {
      email: "",
    },
  });
  console.log(countries);
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
                <Image
                  src={"/alipay.jpeg"}
                  width={12}
                  height={12}
                  alt="We chat pay logo"
                />
              </span>
              <span className="pt-1 text-sm">Alipay</span>
            </TabsTrigger>
            <TabsTrigger
              className="flex-col p-3 border shadow-none border-gray-200 bg-white justify-start items-start w-full text-gray-600 data-[state=active]:text-violet-600 data-[state=active]:border-violet-600 rounded-lg"
              value="we-chat-pay"
            >
              <span>
                <Image
                  src={"/we-chat.png"}
                  width={12}
                  height={12}
                  alt="We chat pay logo"
                />
              </span>
              <span className="pt-1 text-sm">WeChat Pay</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="card">
            <div className="relative">
              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel className="mb-3 text-sm checkout-form-label text-gray-800">
                      Card Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        min={16}
                        maxLength={16}
                        type="number"
                        className="checkout-form-input"
                        placeholder="1234 1234 1234 1234"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div
                className="absolute w-12 right-24 top-9"
                aria-describedby="cardBrandIconsDesc"
              >
                <p id="cardBrandIconsDesc" className="sr-only">
                  Supported cards include Visa, Mastercard, American Express,
                  Discover, Diners Club, JCB, UnionPay, and Elo.
                </p>
                <div className="flex gap-0.5 w-12 h-5 z-50">
                  <div className="p-CardBrandIcons-item flex-1">
                    <svg
                      viewBox="0 0 24 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="presentation"
                      focusable="false"
                      className="h-8 w-8"
                    >
                      <g>
                        <rect
                          stroke="#DDD"
                          fill="#FFF"
                          x=".25"
                          y=".25"
                          width="23.5"
                          height="15.5"
                          rx="2"
                        ></rect>
                        <path
                          d="M2.788 5.914A7.201 7.201 0 0 0 1 5.237l.028-.125h2.737c.371.013.672.125.77.519l.595 2.836.182.854 1.666-4.21h1.799l-2.674 6.167H4.304L2.788 5.914Zm7.312 5.37H8.399l1.064-6.172h1.7L10.1 11.284Zm6.167-6.021-.232 1.333-.153-.066a3.054 3.054 0 0 0-1.268-.236c-.671 0-.972.269-.98.531 0 .29.365.48.96.762.98.44 1.435.979 1.428 1.681-.014 1.28-1.176 2.108-2.96 2.108-.764-.007-1.5-.158-1.898-.328l.238-1.386.224.099c.553.23.917.328 1.596.328.49 0 1.015-.19 1.022-.604 0-.27-.224-.466-.882-.769-.644-.295-1.505-.788-1.491-1.674C11.878 5.84 13.06 5 14.74 5c.658 0 1.19.138 1.526.263Zm2.26 3.834h1.415c-.07-.308-.392-1.786-.392-1.786l-.12-.531c-.083.23-.23.604-.223.59l-.68 1.727Zm2.1-3.985L22 11.284h-1.575s-.154-.71-.203-.926h-2.184l-.357.926h-1.785l2.527-5.66c.175-.4.483-.512.889-.512h1.316Z"
                          fill="#1434CB"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="p-CardBrandIcons-item flex-1">
                    <svg
                      viewBox="0 0 24 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="presentation"
                      focusable="false"
                      className="h-8 w-8"
                    >
                      <rect fill="#252525" height="16" rx="2" width="24"></rect>
                      <circle cx="9" cy="8" fill="#eb001b" r="5"></circle>
                      <circle cx="15" cy="8" fill="#f79e1b" r="5"></circle>
                      <path
                        d="M12 4c1.214.912 2 2.364 2 4s-.786 3.088-2 4c-1.214-.912-2-2.364-2-4s.786-3.088 2-4z"
                        fill="#ff5f00"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-CardBrandIcons-item flex-1">
                    <svg
                      viewBox="0 0 24 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="presentation"
                      focusable="false"
                      className="h-8 w-8"
                    >
                      <rect fill="#016fd0" height="16" rx="2" width="24"></rect>
                      <path
                        d="M13.764 13.394V7.692l10.148.01v1.574l-1.173 1.254 1.173 1.265v1.608h-1.873l-.995-1.098-.988 1.102z"
                        fill="#fffffe"
                      ></path>
                      <path
                        d="M14.442 12.769v-4.45h3.772v1.026h-2.55v.695h2.49v1.008h-2.49v.684h2.55v1.037z"
                        fill="#016fd0"
                      ></path>
                      <path
                        d="m18.195 12.769 2.088-2.227-2.088-2.222h1.616l1.275 1.41 1.28-1.41h1.546v.035l-2.043 2.187 2.043 2.164v.063H22.35l-1.298-1.424-1.285 1.424z"
                        fill="#016fd0"
                      ></path>
                      <path
                        d="M14.237 2.632h2.446l.86 1.95v-1.95h3.02l.52 1.462.523-1.462h2.306v5.701H11.725z"
                        fill="#fffffe"
                      ></path>
                      <g fill="#016fd0">
                        <path d="m14.7 3.251-1.974 4.446h1.354l.373-.89h2.018l.372.89h1.387L16.265 3.25zm.17 2.558.592-1.415.592 1.415z"></path>
                        <path d="M18.212 7.696V3.25l1.903.006.98 2.733.985-2.74h1.832v4.446l-1.179.01V4.653L21.62 7.696h-1.075l-1.136-3.054v3.054z"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="p-CardBrandIcons-item p-CardBrandIcons-more flex-1">
                    <svg
                      viewBox="0 0 24 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="presentation"
                      focusable="false"
                      className="h-8 w-8"
                    >
                      <path
                        d="M21.997 15.75H22c.955.008 1.74-.773 1.751-1.746V2.006a1.789 1.789 0 0 0-.52-1.25A1.72 1.72 0 0 0 21.997.25H2.001A1.718 1.718 0 0 0 .77.757c-.33.33-.517.779-.521 1.247v11.99c.004.47.191.92.52 1.25.329.328.771.51 1.233.506h19.994Zm0 .5h-.002.002Z"
                        stroke="#ddd"
                        fill="#fff"
                      ></path>
                      <path
                        d="M12.612 16h9.385A1.986 1.986 0 0 0 24 14.03v-2.358A38.74 38.74 0 0 1 12.612 16Z"
                        fill="#F27712"
                      ></path>
                      <path
                        d="M23.172 9.296h-.852l-.96-1.266h-.091v1.266h-.695V6.152H21.6c.803 0 1.266.33 1.266.927 0 .488-.29.802-.81.902l1.116 1.315Zm-1.026-2.193c0-.306-.232-.463-.662-.463h-.215v.952h.199c.446 0 .678-.166.678-.489Zm-4.005-.951h1.97v.53h-1.275v.703h1.225v.538h-1.225v.852h1.274v.53h-1.97V6.152Zm-2.235 3.227L14.4 6.143h.761l.952 2.119.96-2.119h.745L16.295 9.38h-.389Zm-6.298-.008c-1.059 0-1.887-.72-1.887-1.655 0-.91.845-1.647 1.904-1.647.298 0 .546.058.852.19v.729a1.241 1.241 0 0 0-.869-.356c-.662 0-1.167.48-1.167 1.084 0 .637.497 1.092 1.2 1.092.315 0 .555-.1.836-.347v.728a2.13 2.13 0 0 1-.869.182ZM7.506 8.336c0 .613-.505 1.035-1.233 1.035-.53 0-.91-.182-1.233-.596l.455-.389c.157.282.422.422.753.422.315 0 .538-.19.538-.438 0-.141-.066-.249-.207-.331a2.88 2.88 0 0 0-.48-.183c-.653-.206-.877-.43-.877-.868 0-.514.48-.903 1.109-.903.397 0 .753.125 1.051.356l-.364.414a.761.761 0 0 0-.563-.248c-.298 0-.513.149-.513.347 0 .166.124.257.538.398.794.248 1.026.48 1.026.993v-.009ZM4.088 6.152h.695v3.153h-.695V6.152ZM1.854 9.305H.828V6.152h1.026c1.125 0 1.903.645 1.903 1.572 0 .472-.231.919-.637 1.217-.348.248-.737.364-1.274.364h.008Zm.81-2.367c-.23-.182-.496-.248-.95-.248h-.191v2.085h.19c.447 0 .728-.083.952-.248.24-.199.38-.497.38-.803 0-.306-.14-.596-.38-.786Z"
                        fill="#000"
                      ></path>
                      <path
                        d="M12.414 6.069c-.91 0-1.655.728-1.655 1.63 0 .96.711 1.68 1.655 1.68a1.64 1.64 0 0 0 1.655-1.655c0-.927-.72-1.655-1.655-1.655Z"
                        fill="#F27712"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FormField
                control={form.control}
                name="cardExpiryDate"
                render={({ field }) => (
                  <FormItem className="mb-6 w-full">
                    <FormLabel className="mb-3 text-sm checkout-form-label text-gray-800">
                      Expiry Date
                    </FormLabel>
                    <FormControl>
                      <Input
                        min={4}
                        maxLength={4}
                        className="checkout-form-input"
                        placeholder="10/12"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="securityCode"
                render={({ field }) => (
                  <FormItem className="mb-6 w-full">
                    <FormLabel className="mb-3 text-sm checkout-form-label">
                      Security Code
                    </FormLabel>
                    <FormControl>
                      <Input
                        min={4}
                        max={4}
                        type="number"
                        className="checkout-form-input"
                        placeholder="0000"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
            <div className="mb-8">
              <RedirectionAlert logoUrl="/alipay.jpeg" selected="Alipay" />
            </div>
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
            <div className="mb-8">
              <RedirectionAlert logoUrl="/we-chat.png" selected="WeChat Pay" />
            </div>
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
                    <SelectTrigger className="!rounded-b-none border-collapse focus:ring-0 focus:ring-offset-0 focus:border-zinc-950">
                      <SelectValue placeholder="Select Your Country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
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
            name="postalCode"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormControl>
                  <Input
                    className="checkout-form-input !rounded-t-none border-collapse focus:!ring-0 focus:!ring-offset-0 focus:border-zinc-950"
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
                Discount Code
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
