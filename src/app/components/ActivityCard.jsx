"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function ActivityCard({
  imageSrc,
  title,
  subtitle,
  linkToCard,
  activityDate,
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <div
      className={`relative flex w-80 xl:w-[30rem] opacity-0 translate-x-[50%] z-10 flex-col mx-auto rounded-xl bg-clip-border bg-neutral-950 ${
        inView ? "animation-X" : ""
      }`}
      ref={ref}
    >
      <img
        src={imageSrc}
        className="relative mx-4 -mt-6 aspect-video overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"
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
          className="select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-white/10 transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          href={linkToCard}
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
