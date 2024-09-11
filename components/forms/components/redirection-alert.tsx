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
    <section className="border bg-primary border-primary rounded-lg p-3">
      <Image
        src={logoUrl}
        alt={selected}
        width={30}
        height={30}
        className="mb-3"
      />
      <p className="text-sm text-accent-foreground">
        {selected} <span className="text-accent-text"> (selected)</span>
      </p>
      <div className="h-px bg-gray-100 my-3"></div>
      <div className="flex items-center text-xs">
        <span className="mr-3 text-accent-heading">
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
