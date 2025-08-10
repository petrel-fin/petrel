import { TbBuildingEstate } from "react-icons/tb";
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineWatch } from "react-icons/md";
import { PiSailboat } from "react-icons/pi";
import FinancialItemGroup from "~/components/financial-items/financial-item-group";
import PossessionCard from "~/components/financial-items/possession-card/possession-card";

export default function PossessionsSection() {
  return (
    <div className="flex flex-col gap-4">
      <FinancialItemGroup
        title="Real Estate"
        icon={<TbBuildingEstate className="h-5 w-5" />}
      >
        <div className="grid grid-cols-3 gap-4">
          <PossessionCard
            title="Primary Residence"
            value="$500,000"
            changePercentage="+5%"
            monthlyExpenses="$2,000"
            interestRate="3.5%"
            equity="$200,000"
          />
          <PossessionCard
            title="Vacation Home"
            value="$300,000"
            changePercentage="+3%"
            monthlyExpenses="$1,500"
            interestRate="4.0%"
            equity="$150,000"
          />
          <PossessionCard
            title="Rental Property"
            value="$400,000"
            changePercentage="+4%"
            monthlyExpenses="$1,800"
            interestRate="3.8%"
            equity="$180,000"
          />
        </div>
      </FinancialItemGroup>

      <FinancialItemGroup
        title="Vehicles"
        icon={<IoCarSportOutline className="h-5 w-5" />}
      >
        <div className="grid grid-cols-3 gap-4">
          <PossessionCard
            title="Car"
            value="$30,000"
            changePercentage="+2%"
            monthlyExpenses="$300"
            interestRate="5.0%"
            equity="$20,000"
          />
          <PossessionCard
            title="Motorcycle"
            value="$15,000"
            changePercentage="+1%"
            monthlyExpenses="$150"
            interestRate="6.0%"
            equity="$10,000"
          />
        </div>
      </FinancialItemGroup>

      <FinancialItemGroup
        title="Valuables"
        icon={<MdOutlineWatch className="h-5 w-5" />}
      >
        <div className="text-muted-foreground flex items-center justify-center pt-4 pb-16">
          No items
        </div>
      </FinancialItemGroup>

      <FinancialItemGroup
        title="Other"
        icon={<PiSailboat className="h-5 w-5" />}
      >
        <div className="grid grid-cols-3 gap-4">
          <PossessionCard
            title="Boat"
            value="$25,000"
            changePercentage="+3%"
            monthlyExpenses="$200"
            interestRate="4.5%"
            equity="$15,000"
          />
          <PossessionCard
            title="Art Collection"
            value="$100,000"
            changePercentage="+10%"
            monthlyExpenses="$0"
            interestRate="0%"
            equity="$100,000"
          />
          <PossessionCard
            title="Jewelry"
            value="$50,000"
            changePercentage="+5%"
            monthlyExpenses="$0"
            interestRate="0%"
            equity="$50,000"
          />
        </div>
      </FinancialItemGroup>
    </div>
  );
}
