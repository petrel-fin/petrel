import { TbBuildingEstate } from "react-icons/tb";
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineWatch } from "react-icons/md";
import { PiSailboat } from "react-icons/pi";
import LargePossessionCard from "./components/large-possession-card/large-possession-card";
import CardGroup from "~/components/dashboard/card-group/card-group";

export default function DashboardPossessionsPage() {
  return (
    <div className="flex flex-col gap-4 px-4">
      <CardGroup
        title="Real Estate"
        icon={<TbBuildingEstate className="h-5 w-5" />}
      >
        <div className="grid grid-cols-3 gap-4">
          <LargePossessionCard
            title="Primary Residence"
            value="$500,000"
            changePercentage="+5%"
            monthlyExpenses="$2,000"
            interestRate="3.5%"
            equity="$200,000"
          />
          <LargePossessionCard
            title="Vacation Home"
            value="$300,000"
            changePercentage="+3%"
            monthlyExpenses="$1,500"
            interestRate="4.0%"
            equity="$150,000"
          />
          <LargePossessionCard
            title="Rental Property"
            value="$400,000"
            changePercentage="+4%"
            monthlyExpenses="$1,800"
            interestRate="3.8%"
            equity="$180,000"
          />
        </div>
      </CardGroup>

      <CardGroup
        title="Vehicles"
        icon={<IoCarSportOutline className="h-5 w-5" />}
      >
        <div className="grid grid-cols-3 gap-4">
          <LargePossessionCard
            title="Car"
            value="$30,000"
            changePercentage="+2%"
            monthlyExpenses="$300"
            interestRate="5.0%"
            equity="$20,000"
          />
          <LargePossessionCard
            title="Motorcycle"
            value="$15,000"
            changePercentage="+1%"
            monthlyExpenses="$150"
            interestRate="6.0%"
            equity="$10,000"
          />
        </div>
      </CardGroup>

      <CardGroup
        title="Valuables"
        icon={<MdOutlineWatch className="h-5 w-5" />}
      >
        <div className="text-muted-foreground flex items-center justify-center pt-4 pb-16">
          No items
        </div>
      </CardGroup>

      <CardGroup title="Other" icon={<PiSailboat className="h-5 w-5" />}>
        <div className="grid grid-cols-3 gap-4">
          <LargePossessionCard
            title="Boat"
            value="$25,000"
            changePercentage="+3%"
            monthlyExpenses="$200"
            interestRate="4.5%"
            equity="$15,000"
          />
          <LargePossessionCard
            title="Art Collection"
            value="$100,000"
            changePercentage="+10%"
            monthlyExpenses="$0"
            interestRate="0%"
            equity="$100,000"
          />
          <LargePossessionCard
            title="Jewelry"
            value="$50,000"
            changePercentage="+5%"
            monthlyExpenses="$0"
            interestRate="0%"
            equity="$50,000"
          />
        </div>
      </CardGroup>
    </div>
  );
}
