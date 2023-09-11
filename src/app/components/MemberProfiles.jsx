import Link from "next/link";
import { membersData } from "../members/members";

export default function MemberProfiles() {
  return (
    <>
      {Object.values(membersData).map((members) => {
        return (
          <div className="w-[80vw] max-w-md mx-auto my-24">
            <img src={members.gif} alt="" className="rounded-t-xl w-full" />
            <div className=" relative bg-neutral-950 rounded-b-xl flex  flex-col p-4 ">
              <div className="absolute top-4 right-4 flex flex-col items-end gap-4">
                <div className="flex flex-row gap-2">
                  <a href={members.instagram}>
                    <img
                      src="/assets/instagram.png"
                      alt=""
                      className="w-8 h-8"
                    />
                  </a>
                  <a href={members.instagram}>
                    <img src="/assets/twitter.png" alt="" className="w-8 h-8" />
                  </a>
                  <a href={members.instagram}>
                    <img src="/assets/discord.png" alt="" className="w-8 h-8" />
                  </a>
                </div>
                <div>
                  <p className="text-white/60">
                    {members.age} | {members.location}
                  </p>
                </div>
              </div>
              <img
                src={members.imageUrl}
                alt=""
                className=" absolute top-2 left-2 rounded-full w-28 object-cover h-28"
              />
              <label htmlFor="name" className="text-white/60 mt-28 text-sm">
                Name:
              </label>
              <h4>{members.name}</h4>
              <label
                htmlFor="description"
                className="text-white/60 mt-4 text-sm"
              >
                Description:
              </label>
              <p>{members.description}</p>
              <div className="mt-4 flex flex-row flex-wrap gap-2">
                {members.roles.map((role) => {
                  return (
                    <span className="text-md  border border-solid w-fit p-1 rounded-md text-white/80">
                      {role}
                    </span>
                  );
                })}
              </div>
              <Link
                href={`${members.link}`}
                className="text-center mt-8 border-white/40 text-white/70 border border-solid rounded-sm p-2"
              >
                Visit Profile
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
