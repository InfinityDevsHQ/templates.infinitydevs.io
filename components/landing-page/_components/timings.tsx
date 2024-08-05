import Heading from "$/app/_components/heading";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
// import { Lock, Clock } from "lucide-react";
export default function Timings() {
  return (
    <div className="pl-2">
      <Heading className="uppercase font-bold mb-8 text-accent-heading">
        Contact Us
      </Heading>
      <p className="mb-7 font-medium lg:text-xl text-accent-text">
        If you have any questions or need any assistance after business hours
        please get in touch
      </p>
      <div className="grid lg:grid-cols-2 mb-6 uppercase gap-y-2 gap-x-12 text-accent-text lg:text-xl font-medium">
        <div className="flex flex-col gap-2 lg:gap-5">
          <p>Location:</p>
          <p className="flex gap-3">
            <MapPin />
            <span className="capitalize">lahore, pakistan.</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:gap-5">
          <p>Phone:</p>
          <p className="flex gap-3">
            <Phone />
            <a href="tel:+923186807809" className="capitalize">
              +92 318 680 7809
            </a>
          </p>
        </div>
      </div>
      {/* <p className="uppercase mb-2">business hours</p>
      <div className="flex flex-col gap-3">
        <p className="flex gap-3">
          <span>
            <Clock />
          </span>
          <span className="capitalize">
            Monday to friday:8:30am to 5:30pm [GMT]
          </span>
        </p>
        <p className="flex gap-3">
          <span>
            <Lock />
          </span>
          <span className="capitalize">Closed on weekends</span>
        </p>
      </div> */}
    </div>
  );
}
