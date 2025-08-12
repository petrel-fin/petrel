import { Plus } from "lucide-react";
import { Button } from "~/components/ui/button";

interface FinancialItemGroupProps {
  icon?: React.ReactNode;
  title?: string;
  children?: React.ReactNode;
}

export default function FinancialItemGroup({
  icon,
  title,
  children,
}: FinancialItemGroupProps) {
  return (
    <div className="flex w-full flex-col gap-4 rounded-xl border border-dashed p-4">
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-2 pl-2">
          {icon}
          <h4 className="text-md scroll-m-20 font-semibold tracking-tight">
            {title}
          </h4>
        </div>
        <Button variant="outline">
          <Plus /> Add
        </Button>
      </div>
      {children}
    </div>
  );
}
