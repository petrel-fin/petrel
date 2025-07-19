import TimelineGraph from "~/components/charts/timeline/timeline-graph";
import PlanningTabs from "~/components/dashboard/planning/planning-tabs";

export default function DashboardPlansPage() {
  return (
    <div className="flex h-full w-full flex-col gap-4 px-4">
      <TimelineGraph />
      <PlanningTabs />
    </div>
  );
}
