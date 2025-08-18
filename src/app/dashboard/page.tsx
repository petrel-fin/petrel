import PrimaryFigureCard from "./components/overview/primary-figure-card";
import FinancialScoreCard from "./components/overview/financial-score-card";
import OverviewGraphCard from "./components/overview/overview-graph-card";
import NetWorthCard from "./components/overview/net-worth-card";
import TransactionsCard from "./components/overview/transactions-card";
import CurrentMonthlyBudget from "./budgeting/components/current-monthly-budget";
import { auth } from "~/server/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardOverviewPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex w-full px-4">
      <div className="grid w-full grid-cols-10 gap-4">
        <div className="col-span-2">
          <PrimaryFigureCard
            title="Net Worth"
            figure="$320,345.67"
            change="+2.5%"
          />
        </div>
        <div className="col-span-2">
          <PrimaryFigureCard
            title="Income"
            figure="$120,345.67"
            change="+2.5%"
          />
        </div>
        <div className="col-span-2">
          <PrimaryFigureCard
            title="Expenses"
            figure="$32,345.67"
            change="-2.5%"
          />
        </div>
        <div className="col-span-4">
          <FinancialScoreCard />
        </div>
        <div className="col-span-6">
          <OverviewGraphCard />
        </div>
        <div className="col-span-4">
          <CurrentMonthlyBudget />
        </div>
        <div className="col-span-6">
          <TransactionsCard />
        </div>
        <div className="col-span-4">
          <NetWorthCard />
        </div>
      </div>
    </div>
  );
}
