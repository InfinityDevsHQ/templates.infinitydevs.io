import CardOutSvg from "$/components/svg/card-out-svg";
import Image from "next/image";

export default function RedirectionAlert({
  logoUrl,
  selected,
}: {
  logoUrl: string;
  selected: string;
}) {
  return (
    <section className="border border-gray-200 p-3">
      <Image
        src={logoUrl}
        alt={selected}
        width={30}
        height={30}
        className="mb-3"
      />
      <p className="text-sm text-gray-800">{selected} selected</p>
      <div className="h-px bg-gray-100 my-3"></div>
      <div className="flex items-center text-xs">
        <span className="mr-3 text-gray-700">
          <CardOutSvg />
        </span>
        <p>
          After submission, you will be redirected to securely complete next
          steps.
        </p>
      </div>
    </section>
  );
}
