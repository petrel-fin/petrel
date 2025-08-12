import { Plus } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import BudgetCategoryGroup from "./budget-category-group";

export interface BudgetCategory {
  name: string;
  label: string;
  amount: number;
  current: number;
  change: number;
}

const budgetCategoriesSavings: BudgetCategory[] = [
  {
    name: "investments",
    label: "Investments",
    amount: 1500,
    current: 150,
    change: -2.5,
  },
  {
    name: "savings",
    label: "Savings",
    amount: 500,
    current: 200,
    change: 10.0,
  },
  {
    name: "emergencyFund",
    label: "Emergency Fund",
    amount: 300,
    current: 50,
    change: 5.0,
  },
  {
    name: "retirement",
    label: "Retirement",
    amount: 400,
    current: 100,
    change: -1.0,
  },
];

const budgetCategoriesExpenses: BudgetCategory[] = [
  {
    name: "housing",
    label: "Housing",
    amount: 1500,
    current: 150,
    change: -2.5,
  },
  {
    name: "transportation",
    label: "Transportation",
    amount: 400,
    current: 20,
    change: 5.0,
  },
  {
    name: "food",
    label: "Food",
    amount: 600,
    current: 580,
    change: -3.3,
  },
  {
    name: "utilities",
    label: "Utilities",
    amount: 300,
    current: 210,
    change: 3.3,
  },
  {
    name: "insurance",
    label: "Insurance",
    amount: 200,
    current: 20,
    change: 0.0,
  },
  {
    name: "entertainment",
    label: "Entertainment",
    amount: 150,
    current: 180,
    change: 20.0,
  },
  {
    name: "clothing",
    label: "Clothing",
    amount: 100,
    current: 40,
    change: -10.0,
  },
  {
    name: "healthcare",
    label: "Healthcare",
    amount: 250,
    current: 260,
    change: 4.0,
  },
  {
    name: "miscellaneous",
    label: "Miscellaneous",
    amount: 200,
    current: 75,
    change: -12.5,
  },
  {
    name: "subscriptions",
    label: "Subscriptions",
    amount: 100,
    current: 90,
    change: -5.0,
  },
];

export default function BudgetCategories() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Categories</CardTitle>
        <CardDescription>Amount spent for each category</CardDescription>
        <CardAction>
          <div className="flex items-center gap-2">
            <Select defaultValue="january">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Month</SelectLabel>
                  <SelectItem value="january">January</SelectItem>
                  <SelectItem value="february">February</SelectItem>
                  <SelectItem value="march">March</SelectItem>
                  <SelectItem value="april">April</SelectItem>
                  <SelectItem value="may">May</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Plus /> Add Category
            </Button>
          </div>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between rounded-lg border border-dashed p-4">
            <p className="text-muted-foreground">Totals</p>
            <div className="flex gap-2">
              <p className="text-xl font-semibold">$124,232</p>
              <p className="text-muted-foreground text-sm">Net Income</p>
              <p className="text-xl font-semibold">-</p>
              <p className="text-xl font-semibold">$110,212</p>
              <p className="text-muted-foreground text-sm">Expenses</p>
              <p className="text-xl font-semibold">=</p>
              <p className="text-xl font-semibold">$4,232.00</p>
              <p className="text-muted-foreground text-sm"></p>
            </div>
          </div>
          <BudgetCategoryGroup
            title="Savings"
            categories={budgetCategoriesSavings}
          />
          <BudgetCategoryGroup
            title="Expenses"
            categories={budgetCategoriesExpenses}
          />
        </div>
      </CardContent>
    </Card>
  );
}
