import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function FinancialScoreCard() {
  return (
    <Card className="col-span-4 flex gap-1">
      <CardHeader>
        <CardTitle className="text-muted-foreground">Financial Score</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-2">
        <h4 className="text-2xl font-semibold">
          8.9<span className="text-muted-foreground">/10</span>
        </h4>
      </CardContent>
      <CardFooter>
        <p className="text-muted-foreground text-sm">
          <span className="text-blue-400">+0.1</span> last month
        </p>
      </CardFooter>
    </Card>
  );
}
