import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function TimelineDateFilter() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="1-year">
        <TabsList>
          <TabsTrigger value="month">Month</TabsTrigger>
          <TabsTrigger value="ytd">YTD</TabsTrigger>
          <TabsTrigger value="1-year">1 Year</TabsTrigger>
          <TabsTrigger value="5-years">5 Years</TabsTrigger>
          <TabsTrigger value="10-years">10 Years</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
