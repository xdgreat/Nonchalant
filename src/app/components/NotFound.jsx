import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[90dvh]">
      <img src="/assets/lost.png" alt="Lost Image" />
      <h1 className="text-center text-4xl mt-10">Page Not Found :(</h1>
      <Link
        href={"/"}
        className="text-lg my-10 border border-solid border-white/50 p-2 rounded-lg"
      >
        Click Me!
      </Link>
    </div>
  );
}
