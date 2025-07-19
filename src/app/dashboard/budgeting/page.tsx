import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import CurrentMonthlyBudget from "./components/current-monthly-budget";
import PastBudgetPerformance from "./components/past-budget-performance";
import BudgetBreakdown from "./components/budget-breakdown";
import BudgetGoals from "./components/budget-goals";
import BudgetCategories from "./components/budget-categories";

export default function TransactionsPage() {
  return (
    <div className="grid w-full grid-cols-12 gap-4 px-4">
      <div className="col-span-4">
        <div className="flex flex-col gap-4">
          <CurrentMonthlyBudget />
          <BudgetBreakdown />
          <BudgetGoals />
        </div>
      </div>
      <div className="col-span-8">
        <div className="flex flex-col gap-4">
          <PastBudgetPerformance />
          <BudgetCategories />
        </div>
      </div>
    </div>
  );
}
