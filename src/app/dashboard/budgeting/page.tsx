import CurrentMonthlyBudget from "./components/current-monthly-budget";
import PastBudgetPerformance from "./components/past-budget-performance";
import BudgetBreakdown from "./components/budget-breakdown";
import BudgetCategories from "./components/budget-categories/budget-categories";

export default function TransactionsPage() {
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
