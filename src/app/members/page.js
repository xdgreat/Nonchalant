import Link from "next/link";
import NotFound from "../components/NotFound";
import ActivityCard from "../components/ActivityCard";
import { membersData } from "./members";
import MemberProfiles from "../components/MemberProfiles";

export default function Members() {
  return (
    <>
      <h1 className="text-center text-3xl mt-10 mb-5">Members</h1>
      <p className="text-center">All members of Nonchalant.</p>
      <div>
        <MemberProfiles />
      </div>
    </>
  );
}
