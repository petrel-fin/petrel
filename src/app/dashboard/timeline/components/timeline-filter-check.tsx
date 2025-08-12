import { Checkbox } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/label";

interface TimelineFilterCheckProps {
  name: string;
  amount: string;
  change: string;
  defaultChecked?: boolean;
}

export default function TimelineFilterCheck({
  name,
  amount,
  change,
  defaultChecked = false,
}: TimelineFilterCheckProps) {
  return (
    <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-2 has-[[aria-checked=true]]:border dark:has-[[aria-checked=true]]:border">
      <Checkbox id="toggle-2" defaultChecked={defaultChecked} />
      <div className="grid w-full grid-cols-4 items-center gap-1.5 font-normal">
        <p className="col-span-2 text-sm leading-none font-medium">{name}</p>
        <p className="text-sm text-green-400">{change}</p>
        <p className="text-muted-foreground text-end text-sm">{amount}</p>
      </div>
    </Label>
  );
}

{
  /* <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-2 has-[[aria-checked=true]]:border-blue-500 dark:has-[[aria-checked=true]]:border-blue-500">
<Checkbox
  id="toggle-2"
  defaultChecked={defaultChecked}
  className="data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-500 dark:data-[state=checked]:bg-blue-500"
/>
<div className="grid w-full grid-cols-4 items-center gap-1.5 font-normal">
  <p className="col-span-2 text-sm leading-none font-medium">{name}</p>
  <p className="text-sm text-green-400">{change}</p>
  <p className="text-muted-foreground text-end text-sm">{amount}</p>
</div>
</Label> */
}
