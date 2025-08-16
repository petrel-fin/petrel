import { headers } from "next/headers";
import { redirect } from "next/navigation";
import HoldingsSection from "~/components/financial-sections/holdings-section";
import { auth } from "~/server/auth";

export default async function DashboardHoldingsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="px-4">
      <HoldingsSection />
    </div>
  );
}
