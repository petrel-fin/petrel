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

const budgetCategories: Array<{
  name: string;
  label: string;
  amount: number;
  current: number;
  change: number;
}> = [
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
    name: "savings",
    label: "Savings",
    amount: 500,
    current: 200,
    change: 10.0,
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
        <div className="flex flex-col gap-3">
          {budgetCategories.map((category) => (
            <div key={category.name} className="flex w-full flex-col gap-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold">{category.label}</p>
                <div className="flex gap-4">
                  <p className="text-sm">
                    ${category.current}{" "}
                    <span className="text-muted-foreground">of</span> $
                    {category.amount}
                  </p>
                  <p
                    className={`w-10 text-center text-sm ${category.change < 0 ? "text-gray-500" : "text-blue-500"}`}
                  >
                    {category.change}%
                  </p>
                </div>
              </div>
              <Progress
                className={`h-[12px] rounded-xs bg-gray-500/10 ${category.current > category.amount ? "[&>div]:bg-gray-500" : "[&>div]:bg-blue-500"}`}
                value={Math.min(1, category.current / category.amount) * 100}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
