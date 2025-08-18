// import { Button } from "~/components/ui/button";
// import {
//   Card,
//   CardAction,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "~/components/ui/card";
import { auth } from "~/server/auth";
import CashFlowSankey from "./components/cash-flow-sankey";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardCashFlowPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 px-4">
      <CashFlowSankey />
      {/* <div className="grid w-full grid-cols-2 gap-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Income</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Expenses</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div> */}
    </div>
  );
}
