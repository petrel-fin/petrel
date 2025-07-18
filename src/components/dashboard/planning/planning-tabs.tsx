import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function PlanningTabs() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="mb-2">
          <TabsTrigger value="account">Income</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="possessions">Possessions</TabsTrigger>
          <TabsTrigger value="trips">Trips</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="w-full">
          <Card className="h-[450px] w-full">
            <CardHeader>
              <CardTitle>Income</CardTitle>
              <CardDescription>
                Showing total visitors for the last 3 months
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full"></CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
