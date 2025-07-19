import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function DashboardPossessionsPage() {
  return (
    <div className="flex h-full w-full gap-4 px-4">
      <Card className="h-[910px] w-full">
        <CardHeader>
          <CardTitle>Miscellaneous</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="flex w-full flex-col gap-4">
        <Card className="h-[447px] w-full">
          <CardHeader>
            <CardTitle>Vehicles</CardTitle>
            <CardDescription>
              Showing total visitors for the last 3 months
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="h-[447px] w-full">
          <CardHeader>
            <CardTitle>Real Estate</CardTitle>
            <CardDescription>
              Showing total visitors for the last 3 months
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
