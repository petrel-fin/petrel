import { SiChase } from "react-icons/si";
import { MdOutlineAccountBalance } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { GoGraph } from "react-icons/go";
import { PiHandCoins } from "react-icons/pi";
import { SiWellsfargo } from "react-icons/si";
import { SiRobinhood } from "react-icons/si";
import FinancialItemGroup from "~/components/financial-items/financial-item-group";
import HoldingsCard from "~/components/financial-items/holdings-card/holdings-card";

export default function HoldingsSection() {
  return (
    <div className="flex flex-col gap-4">
      <FinancialItemGroup
        title="Depositories"
        icon={<MdOutlineAccountBalance className="h-5 w-5" />}
      >
        <div className="grid grid-cols-3 gap-4">
          <HoldingsCard
            title="Primary Residence"
            institution="Chase Bank"
            amount="$350,000"
            changePercentage="+4.2"
            icon={<SiChase className="h-6 w-6" />}
          />
          <HoldingsCard
            title="Savings Account"
            institution="Chase Bank"
            amount="$15,000"
            changePercentage="+2.5"
            icon={<SiChase className="h-6 w-6" />}
          />
          <HoldingsCard
            title="Checking Account"
            institution="Chase Bank"
            amount="$5,000"
            changePercentage="+1.8"
            icon={<SiWellsfargo className="h-6 w-6" />}
          />
          <HoldingsCard
            title="Investment Account"
            institution="Chase Bank"
            amount="$20,000"
            changePercentage="+3.1"
            icon={<SiChase className="h-6 w-6" />}
          />
          <HoldingsCard
            title="Retirement Account"
            institution="Chase Bank"
            amount="$50,000"
            changePercentage="+5.0"
            icon={<SiChase className="h-6 w-6" />}
          />
        </div>
      </FinancialItemGroup>

      <FinancialItemGroup
        title="Credit Cards"
        icon={<CiCreditCard1 className="h-5 w-5" />}
      >
        <div className="grid grid-cols-3 gap-4">
          <HoldingsCard
            title="Visa Card"
            institution="Chase Bank"
            amount="$2,500"
            changePercentage="-1.2"
            icon={<SiWellsfargo className="h-6 w-6" />}
          />
          <HoldingsCard
            title="MasterCard"
            institution="Chase Bank"
            amount="$1,800"
            changePercentage="+0.5"
            icon={<SiChase className="h-6 w-6" />}
          />
          <HoldingsCard
            title="American Express"
            institution="Chase Bank"
            amount="$3,200"
            changePercentage="+2.0"
            icon={<SiRobinhood className="h-6 w-6" />}
          />
        </div>
      </FinancialItemGroup>

      <FinancialItemGroup
        title="Investments"
        icon={<GoGraph className="h-5 w-5" />}
      >
        <div className="text-muted-foreground flex items-center justify-center pt-4 pb-16">
          No items
        </div>
      </FinancialItemGroup>

      <FinancialItemGroup
        title="Loans"
        icon={<PiHandCoins className="h-5 w-5" />}
      >
        <div className="grid grid-cols-3 gap-4">
          <HoldingsCard
            title="Mortgage"
            institution="Chase Bank"
            amount="$250,000"
            changePercentage="-0.5"
            icon={<SiChase className="h-6 w-6" />}
          />
          <HoldingsCard
            title="Car Loan"
            institution="Chase Bank"
            amount="$15,000"
            changePercentage="+1.0"
            icon={<SiChase className="h-6 w-6" />}
          />
          <HoldingsCard
            title="Personal Loan"
            institution="Chase Bank"
            amount="$5,000"
            changePercentage="+0.8"
            icon={<SiChase className="h-6 w-6" />}
          />
        </div>
      </FinancialItemGroup>
    </div>
  );
}
