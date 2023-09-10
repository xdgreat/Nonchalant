import NotFound from "@/app/components/NotFound";
import { getMemberData } from "../members";

export default async function name(context) {
  console.log(context.params.name);
  const memberData = await getMemberData(context.params.name);
  if (memberData === null || undefined) {
    return <NotFound />;
  }
  return <h1>hi {memberData.name}</h1>;
}
