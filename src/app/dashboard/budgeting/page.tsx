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
          <CardTitle>Categories</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="flex w-full flex-col gap-4">
        <Card className="h-[293px] w-full">
          <CardHeader>
            <CardTitle>Circle Graph</CardTitle>
            <CardDescription>
              Showing total visitors for the last 3 months
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="h-[293px] w-full">
          <CardHeader>
            <CardTitle>Previous Month</CardTitle>
            <CardDescription>
              Showing total visitors for the last 3 months
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="h-[293px] w-full">
          <CardHeader>
            <CardTitle>Recurring</CardTitle>
            <CardDescription>
              Showing total visitors for the last 3 months
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
