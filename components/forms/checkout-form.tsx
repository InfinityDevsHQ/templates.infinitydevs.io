import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import PayPalPayment from "./checkout-forms/paypal-payment";
import CardPaymentForm from "./checkout-forms/card-payment";
import { getAllCountries } from "$/lib/get-countries-data";

export default function CheckoutForm() {
  const countries = getAllCountries();
  console.log(countries);
  return (
    <div className="bg-white">
      <div className="max-w-70 w-full mx-auto px-8 pb-20 pt-12 md:pt-32">
        <div>
          <div>
            <Tabs defaultValue="Pay by Card" className="w-full">
              <TabsList className="w-full mb-8 0.5 rounded-lg">
                <TabsTrigger
                  className="w-1/2 py-1.5 px-4 text-sm rounded-lg"
                  value="Pay by Card"
                >
                  Pay by Card
                </TabsTrigger>
                <TabsTrigger
                  className="w-1/2 py-1.5 px-4 text-sm rounded-lg"
                  value="Pay With Paypal"
                >
                  Pay With Paypal
                </TabsTrigger>
              </TabsList>
              <TabsContent value="Pay by Card">
                <CardPaymentForm countries={countries} />
              </TabsContent>
              <TabsContent value="Pay With Paypal">
                <PayPalPayment countries={countries} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
