import Treemap from "~/components/charts/treemap/treemap";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function NetWorthCard() {
  return (
    <Card className="col-span-4 gap-0 pb-2">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Treemap />
      </CardContent>
    </Card>
  );
}
