import HoldingCard from "~/components/dashboard/holdings/holding-card";

export default function DashboardHoldingsPage() {
  return (
    <div className="flex h-full w-full gap-4 px-4">
      <div className="rounded-2xl border border-dashed">
        <div className="flex justify-between rounded-t-2xl bg-gray-400/10">
          <h2 className="p-4 text-xl font-semibold">Depositories</h2>
          <h2 className="text-muted-foreground p-4 text-xl font-semibold">
            $10,240
          </h2>
        </div>

        <div className="flex flex-col gap-4 p-4">
          <HoldingCard title="Checking College" description="Chase Bank" />
          <HoldingCard title="House Savings" description="Chase Bank" />
          <HoldingCard title="Emergency Savings" description="Chase Bank" />
        </div>
      </div>

      <div className="rounded-2xl border border-dashed">
        <div className="flex justify-between rounded-t-2xl bg-gray-400/10">
          <h2 className="p-4 text-xl font-semibold">Credit Cards</h2>
          <h2 className="text-muted-foreground p-4 text-xl font-semibold">
            $3,012
          </h2>
        </div>

        <div className="flex flex-col gap-4 p-4">
          <HoldingCard title="Sapphire Preferred" description="Chase Bank" />
          <HoldingCard title="Amazon" description="Chase Bank" />
        </div>
      </div>

      <div className="rounded-2xl border border-dashed">
        <div className="flex justify-between rounded-t-2xl bg-gray-400/10">
          <h2 className="p-4 text-xl font-semibold">Investments</h2>
          <h2 className="text-muted-foreground p-4 text-xl font-semibold">
            $122,140
          </h2>
        </div>

        <div className="flex flex-col gap-4 p-4">
          <HoldingCard title="Vanguard Small Cap" description="Vanguard" />
          <HoldingCard title="Vanguard Mid Cap" description="Vanguard" />
          <HoldingCard title="Vanguard Large Cap" description="Vanguard" />
        </div>
      </div>

      <div className="rounded-2xl border border-dashed">
        <div className="flex justify-between rounded-t-2xl bg-gray-400/10">
          <h2 className="p-4 text-xl font-semibold">Loans</h2>
          <h2 className="text-muted-foreground p-4 text-xl font-semibold">
            $122,140
          </h2>
        </div>

        <div className="flex flex-col gap-4 p-4">
          <HoldingCard title="SoFi Loan" description="SoFi" />
          <HoldingCard title="Cyber Truck Loan" description="Tesla" />
        </div>
      </div>
    </div>
  );
}
