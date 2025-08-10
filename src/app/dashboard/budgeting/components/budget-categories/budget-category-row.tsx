"use client";

import { Progress } from "~/components/ui/progress";
import type { BudgetCategory } from "./budget-categories";
import { useState } from "react";

interface BudgetCategoryRowProps {
  category: BudgetCategory;
}

export default function BudgetCategoryRow({
  category,
}: BudgetCategoryRowProps) {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`grid grid-cols-3 items-center gap-2 rounded-lg border px-3 py-1.5 hover:border-gray-400/20 ${selected ? "border-gray-400/20 bg-gray-400/5" : "border-transparent"}`}
      onClick={() => setSelected(!selected)}
    >
      <p className="text-sm">{category.label}</p>
      <div className="col-span-2 flex items-center gap-2">
        <p className="text-muted-foreground min-w-[50px]">
          ${category.current}
        </p>
        <Progress
          className={`h-[6px] rounded-xs bg-gray-500/10 ${category.current > category.amount ? "[&>div]:bg-gray-500" : ""}`}
          value={Math.min(1, category.current / category.amount) * 100}
        />
        <p className="text-muted-foreground min-w-[50px]">${category.amount}</p>
      </div>
    </div>
  );
}
