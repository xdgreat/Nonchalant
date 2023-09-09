"use client";

import Link from "next/link";
import ActivityCard from "./components/ActivityCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [randomQuote, setRandomQuote] = useState({});
  useEffect(() => {
    const getRandomQuote = fetch(
      "https://uselessfacts.jsph.pl/api/v2/facts/random"
    )
      .then((res) => res.json())
      .then((data) => setRandomQuote(data));
  }, []);

  return (
    <>
      <section className="px-2 text-center">
        <div>
          <h1 className=" text-3xl block mt-14 mb-5">
            Welcome to{" "}
            <span className="underline underline-offset-4">Nonchalant</span>
          </h1>
          <span>
            Step into our world, where connections thrive in engaging
            interactions, weaving a tapestry of camaraderie that enriches every
            moment.
          </span>
        </div>
        <div className="my-8 flex gap-6 justify-center items-center">
          <Link
            href={"/members"}
            className="outline outline-1 outline-white py-1 text-lg px-3 rounded"
          >
            Our Members
          </Link>
          <Link href={"/events"} className=" text-lg hover:underline">
            Explore Events
          </Link>
        </div>
        <img src="/assets/stress.png" className="w-[80dvw] h-auto mx-auto" />
      </section>
      <section className="p-4 mx-auto text-center mt-14">
        <div className="flex rounded-lg flex-col gap-2 border border-white/50 border-solid">
          <h3 className="text-center text-3xl mt-10">
            Useless <span className="underline underline-offset-4">Fact</span>
            {""} Of The Day
          </h3>
          <p className="p-6">
            {randomQuote.text ? randomQuote.text : "Fetching Quotes..."}
          </p>
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-center underline underline-offset-4 text-3xl mb-24">
          Recent Activities
        </h2>
        <div className="flex flex-col gap-20">
          <ActivityCard
            imageSrc={"/assets/DC.jpg"}
            title={"Damodar City Hunt"}
            subtitle={"Yummy yummy ice tea"}
            linkToCard={"/events"}
            activityDate={"06/09/23"}
          />
          <ActivityCard
            imageSrc={"/assets/MTKBB2.jpg"}
            title={"Mount Korobaba Pt 2"}
            subtitle={
              "Hiking up to mount korobaba for the second time ft. Gagan"
            }
            linkToCard={"/events"}
            activityDate={"02/09/23"}
          />
          <ActivityCard
            imageSrc={"/assets/RIPDarav.jpg"}
            title={"RIP Darav Beef Eater"}
            subtitle={"Darav gets caught eating beef"}
            linkToCard={"/events"}
            activityDate={"30/08/23"}
          />
        </div>
      </section>
      <section className="mt-10 p-2 pt-6">
        <h3 className="text-3xl mb-8  text-center underline underline-offset-4">
          FAQ's
        </h3>
        <div className="mx-auto w-fit">
          <details className=" border border-white/50 rounded border-solid my-2 p-4">
            <summary className=" list-disc text-md">
              How many members are there in Nonchalant?
            </summary>
            <p className="mt-2 bg-neutral-950 text-white/90 p-2 rounded">
              Nonchalant currently consists of 12 members. 😊👥
            </p>
          </details>
          <details className="border border-white/50 rounded border-solid my-2 p-4">
            <summary className="list-disc">
              Where are Nonchalant members located?
            </summary>
            <p className="mt-2 bg-neutral-950 text-white/90 p-2 rounded">
              Nonchalant originates from Suva, Fiji, with members spread
              worldwide. 🌍
            </p>
          </details>
          <details className=" border border-white/50 rounded border-solid my-2 p-4">
            <summary className=" list-disc">
              When was Nonchalant founded?
            </summary>
            <p className="mt-2 bg-neutral-950 text-white/90 p-2 rounded">
              Nonchalant was founded in 2020. 🎉
            </p>
          </details>
          <details className=" border border-white/50 rounded border-solid my-2 p-4">
            <summary className=" list-disc">
              What's the vision for Nonchalant?
            </summary>
            <p className="mt-2 bg-neutral-950 text-white/90 p-2 rounded">
              To stop racism, one laugh at a time! 😄.
            </p>
          </details>
          <details className=" border border-white/50 rounded border-solid my-2 p-4">
            <summary className=" list-disc">
              Who are the founders of Nonchalant?
            </summary>
            <p className="mt-2 bg-neutral-950 text-white/90 p-2 rounded">
              Nonchalant was founded by Shahaan, Shane, Gagan, Ethan, Waji, and
              Aanush. 👏👏
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
