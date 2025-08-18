import { headers } from "next/headers";
import TransactionsTable from "./components/transactions-table/transactions-table";
import data from "./data.json";
import { auth } from "~/server/auth";
import { redirect } from "next/navigation";

export default async function DashboardPossessionsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col gap-4 px-4 pb-4">
      <TransactionsTable data={data} />
    </div>
  );
}
