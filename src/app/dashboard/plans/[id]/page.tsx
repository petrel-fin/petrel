import TimelineGraph from "~/components/charts/timeline/timeline-graph";
import FinancialItemGroup from "~/components/financial-items/financial-item-group";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { CiCreditCard1 } from "react-icons/ci";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { HiOutlineCash } from "react-icons/hi";
import HoldingsSection from "~/components/financial-sections/holdings-section";
import PossessionsSection from "~/components/financial-sections/possessions-section";

export default function DashboardPlanningPage() {
  return (
    <div className="flex w-full flex-col gap-4 px-4">
      <Card className="w-full bg-transparent">
        <CardHeader>
          <CardTitle>Timeline of Financial Planning</CardTitle>
          <CardDescription>
            Visualize your financial journey and plan for the future
          </CardDescription>
          <CardAction>
            <Tabs defaultValue="1-year">
              <TabsList>
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="ytd">YTD</TabsTrigger>
                <TabsTrigger value="1-year">1 Year</TabsTrigger>
                <TabsTrigger value="5-years">5 Years</TabsTrigger>
                <TabsTrigger value="10-years">10 Years</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardAction>
        </CardHeader>
        <CardContent>
          <TimelineGraph />
        </CardContent>
      </Card>

      <Tabs defaultValue="cash-flow" className="gap-4">
        <TabsList>
          <TabsTrigger value="cash-flow">Cash Flow</TabsTrigger>
          <TabsTrigger value="holdings">Holdings</TabsTrigger>
          <TabsTrigger value="possessions">Possessions</TabsTrigger>
        </TabsList>
        <TabsContent value="cash-flow">
          <div className="flex gap-4">
            <FinancialItemGroup
              title="Income"
              icon={<HiOutlineCash className="h-5 w-5" />}
            >
              <div className="text-muted-foreground flex items-center justify-center pt-4 pb-16">
                No items
              </div>
            </FinancialItemGroup>
            <FinancialItemGroup
              title="Expenses"
              icon={<CiCreditCard1 className="h-5 w-5" />}
            >
              <div className="text-muted-foreground flex items-center justify-center pt-4 pb-16">
                No items
              </div>
            </FinancialItemGroup>
          </div>
        </TabsContent>
        <TabsContent value="holdings">
          <HoldingsSection />
        </TabsContent>
        <TabsContent value="possessions">
          <PossessionsSection />
        </TabsContent>
      </Tabs>
    </div>
  );
}
