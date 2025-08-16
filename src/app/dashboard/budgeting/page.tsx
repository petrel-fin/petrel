import CurrentMonthlyBudget from "./components/current-monthly-budget";
import PastBudgetPerformance from "./components/past-budget-performance";
import BudgetBreakdown from "./components/budget-breakdown";
import BudgetCategories from "./components/budget-categories/budget-categories";
import { auth } from "~/server/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function TransactionsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="grid w-full grid-cols-3 gap-4 px-4">
      <div className="col-span-2">
        <BudgetCategories />
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <PastBudgetPerformance />
          <CurrentMonthlyBudget />
          <BudgetBreakdown />
        </div>
      </div>
    </div>
  );
}
