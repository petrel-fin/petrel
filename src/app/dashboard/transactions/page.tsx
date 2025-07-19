import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function TransactionsPage() {
  return (
    <div className="flex h-full w-full gap-4 px-4">
      <Card className="h-[910px] w-full">
        <CardHeader>
          <CardTitle>Transactions List</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="h-[910px] w-full">
        <CardHeader>
          <CardTitle>Recurring</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
