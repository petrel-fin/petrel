import SankeyChart from "~/components/charts/sankey/sankey-chart";

export default function DashboardCashFlowPage() {
  return (
    <div className="flex h-full w-full items-center justify-center pb-24">
      <SankeyChart />
    </div>
  );
}
