import LineGraph from "./components/line-graph";
import MainGraph from "./components/main-graph";
import MonthlyGraph from "./components/monthly-graph";

export default function Overview() {
  return (
    <div className="flex flex-col gap-4 px-4">
      <MainGraph />
      <LineGraph />
      <MonthlyGraph />
    </div>
  );
}
