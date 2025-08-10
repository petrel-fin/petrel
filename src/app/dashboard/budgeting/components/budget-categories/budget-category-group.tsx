import { Progress } from "~/components/ui/progress";
import type { BudgetCategory } from "./budget-categories";
import { Separator } from "~/components/ui/separator";
import BudgetCategoryRow from "./budget-category-row";

interface BudgetCategoryGroupProps {
  title: string;
  categories: BudgetCategory[];
}

export default function BudgetCategoryGroup({
  title,
  categories,
}: BudgetCategoryGroupProps) {
  return (
    <div className="flex flex-col rounded-lg">
      <div className="flex justify-between">
        <p className="text-muted-foreground ml-3 pb-1">{title}</p>
        <p className="mr-3 pb-1 font-semibold">
          <span className="text-muted-foreground text-sm font-medium">
            Total:{" "}
          </span>
          <span>$4,232</span>
        </p>
      </div>
      <div className="flex flex-col gap-1 border-t-1 border-dashed pt-1">
        {categories.map((category) => (
          <BudgetCategoryRow key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
}
