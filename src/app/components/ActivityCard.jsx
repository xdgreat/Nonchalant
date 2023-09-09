"use client";

import Link from "next/link";

export default function ActivityCard({
  imageSrc,
  title,
  subtitle,
  linkToCard,
  activityDate,
}) {
  return (
    <div className="relative flex w-80 z-10 flex-col mx-auto rounded-xl bg-clip-border bg-neutral-950">
      <img
        src={imageSrc}
        className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg"
      />
      <div className="p-6">
        <p className="block font-sans text-base opacity-75 leading-relaxed text-inherit antialiased">
          {activityDate}
        </p>
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {subtitle}
        </p>
      </div>
      <div className="p-6 pt-0">
        <Link
          data-ripple-light="true"
          className="select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-medium uppercase text-white border border-solid border-white/20 transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          href={linkToCard}
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
