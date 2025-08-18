import { headers } from "next/headers";
import { redirect } from "next/navigation";
import PossessionsSection from "~/components/financial-sections/possessions-section";
import { auth } from "~/server/auth";

export default async function DashboardPossessionsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="px-4">
      <PossessionsSection />
    </div>
  );
}
