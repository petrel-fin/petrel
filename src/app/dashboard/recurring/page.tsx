import TransactionsCards from "./components/section-cards";
import TransactionsTable from "./components/transactions-table/transactions-table";
import data from "./data.json";

export default function DashboardPossessionsPage() {
  return (
    <div className="flex flex-col gap-4 px-4 pb-4">
      <TransactionsCards />
      <TransactionsTable data={data} />
    </div>
  );
}
