import NotFound from "@/app/components/NotFound";
import { getMemberData } from "../members";
import Link from "next/link";

export default async function name(context) {
  const memberData = await getMemberData(context.params.name);
  if (memberData === null || undefined) {
    return <NotFound />;
  }
  return (
    <>
      <div className="w-[80vw] max-w-3xl mx-auto my-24">
        <img src={memberData.gif} alt="" className="rounded-t-xl w-full" />
        <div className=" relative bg-neutral-950 rounded-b-xl flex  flex-col p-4 ">
          <div className="absolute top-4 right-4 flex flex-col items-end gap-4">
            <div className="flex flex-row gap-2">
              <a target="_blank" href={memberData.instagram}>
                <img src="/assets/instagram.png" alt="" className="w-8 h-8" />
              </a>
              <a target="_blank" href={memberData.instagram}>
                <img src="/assets/twitter.png" alt="" className="w-8 h-8" />
              </a>
              <a target="_blank" href={memberData.instagram}>
                <img src="/assets/discord.png" alt="" className="w-8 h-8" />
              </a>
            </div>
            <div>
              <p className="text-white/60">
                {memberData.age} | {memberData.location}
              </p>
            </div>
          </div>
          <img
            src={memberData.imageUrl}
            alt="404 - Image Not Found"
            className=" absolute top-2 left-2 rounded-full w-28 xl:w-40 xl:h-40 object-cover h-28"
          />
          <div className="flex mt-28 xl:mt-40 gap-8 xl:gap-14 flex-wrap">
            <div>
              <label htmlFor="name" className="text-white/60 text-sm">
                Name:
              </label>
              <h4>{memberData.name}</h4>
            </div>
            <div>
              <label
                htmlFor="description"
                className="text-white/60 mt-4 text-sm"
              >
                Description:
              </label>
              <p>{memberData.description}</p>
            </div>
            <div>
              <label htmlFor="favSong" className="text-white/60 mt-4 text-sm">
                Favorite Song:
              </label>
              <p>
                <Link
                  className=" hover:underline"
                  target="_blank"
                  href={
                    memberData.favoriteSongUrl
                      ? memberData.favoriteSongUrl
                      : "/"
                  }
                >
                  {memberData.favoriteSong}
                </Link>
              </p>
            </div>
            <div>
              <label htmlFor="favWord" className="text-white/60 mt-4 text-sm">
                Favorite Word:
              </label>
              <p>{memberData.favoriteWord}</p>
            </div>
            <div>
              <label htmlFor="favArtist" className="text-white/60 mt-4 text-sm">
                Favorite Artist:
              </label>
              <p>{memberData.favoriteArtist}</p>
            </div>
            <div>
              <label htmlFor="favColor" className="text-white/60 mt-4 text-sm">
                Favorite Color:
              </label>
              <p>{memberData.favoriteColor}</p>
            </div>
            <div>
              <label htmlFor="playlist" className="text-white/60 mt-4 text-sm">
                Playlist:
              </label>
              <p>
                <Link
                  className="hover:underline"
                  target="_blank"
                  href={memberData.playlistUrl}
                >
                  Click Me
                </Link>
              </p>
            </div>
          </div>

          <div className="my-4">
            <label htmlFor="hobbies" className="text-white/60 mt-4 text-sm">
              Hobbies:
            </label>
            <div className="flex flex-row flex-wrap gap-2 mt-2">
              {memberData.hobbies.map((hobby) => {
                return (
                  <span className="text-md border border-solid w-fit p-1 rounded-md text-white/80">
                    {hobby}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="my-4">
            <div>
              <label htmlFor="role" className="text-white/60 mt-4 text-sm">
                Roles:
              </label>
              <div className="flex flex-row flex-wrap gap-2 mt-2">
                {memberData.roles.map((role) => {
                  return (
                    <span className="text-md  border border-solid w-fit p-1 rounded-md text-white/80">
                      {role}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="interests" className="text-white/60 mt-4 text-sm">
                Interests:
              </label>
              <div className="flex flex-row flex-wrap gap-2 mt-2">
                {memberData.interests.map((interest) => {
                  return (
                    <span className="text-md  border border-solid w-fit p-1 rounded-md text-white/80">
                      {interest}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="my-4 mt-8 h-fit">
            <iframe
              src={memberData.favoriteSongEmbed}
              width="100%"
              height="152"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; "
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
