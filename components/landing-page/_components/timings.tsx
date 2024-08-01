import Heading from "$/app/_components/heading";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
// import { Lock, Clock } from "lucide-react";
export default function Timings() {
  return (
    <div>
      <Heading className="uppercase font-bold mb-4">Contact Us</Heading>
      <p className="mb-2">
        Get in touch with Infinity Devs today to discuss your software needs and
        start turning your ideas into reality. Whether you need a web app, MVP,
        landing page, or proof of concept, our team of talented developers and
        designers are here to help. Reach out to us for top-notch solutions
        crafted with innovation and expertise.
      </p>
      <div className="grid lg:grid-cols-2 mb-6 uppercase gap-3 lg:gap-0">
        <div className="flex flex-col gap-2">
          <p>Location:</p>
          <p className="flex gap-3">
            <MapPin />
            <span className="capitalize ">lahore, pakistan.</span>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p>Phone:</p>
          <p className="flex gap-3">
            <Phone />
            <a
              href="tel:+923186807809"
              className="capitalize text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-primary"
            >
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
