import MemberProfiles from "../components/MemberProfiles";

export default function Members() {
  return (
    <>
      <h1 className="text-center text-3xl  mt-10 mb-5">Members</h1>
      <p className="text-center xl:text-xl">All members of Nonchalant.</p>
      <div className="flex flex-row flex-wrap xl:gap-24 xl:px-24 gap-8">
        <MemberProfiles />
      </div>
    </>
  );
}
