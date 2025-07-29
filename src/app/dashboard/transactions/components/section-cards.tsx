import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { FaSpotify } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "~/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SiDoordash } from "react-icons/si";

export default function TransactionsCards() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Card className="p-4">
        <CardHeader className="px-2">
          <CardDescription>Total Income</CardDescription>
          <CardTitle className="text-2xl font-semibold">$12,250.00</CardTitle>
          <CardAction>
            <Badge variant="outline">+12.5%</Badge>
          </CardAction>
        </CardHeader>
      </Card>
      <Card className="p-4">
        <CardHeader className="px-2">
          <CardDescription>Total Expenses</CardDescription>
          <CardTitle className="text-2xl font-semibold">$8,250.00</CardTitle>
          <CardAction>
            <Badge variant="outline">-20%</Badge>
          </CardAction>
        </CardHeader>
      </Card>
      <Card className="col-span-2 gap-1 pt-4 pb-2">
        <CardHeader className="px-6">
          <div className="flex justify-between">
            <p className="text-muted-foreground text-sm">Recurring Expenses</p>
            <Button variant="link" className="h-4 p-0">
              See All <ArrowRight />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative w-full">
            {/* Container for the gradient overlay */}
            <div className="flex items-center gap-2 overflow-hidden">
              <div className="flex items-center">
                <div className="flex items-center gap-2 rounded-sm border px-3 py-1">
                  <FaSpotify className="h-5 w-5 text-green-500" />
                  <p className="text-md font-bold">$14.99</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center gap-2 rounded-sm border px-3 py-1">
                  <FaAmazon className="h-5 w-5" />
                  <p className="text-md font-bold">$12.99</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center gap-2 rounded-sm border px-3 py-1">
                  <RiNetflixFill className="h-5 w-5 text-red-500" />
                  <p className="text-md font-bold">$15.99</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center gap-2 rounded-sm border px-3 py-1">
                  <FaXTwitter className="h-5 w-5" />
                  <p className="text-md font-bold">$8.99</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center gap-2 rounded-sm border px-3 py-1">
                  <SiDoordash className="h-5 w-5" />
                  <p className="text-md font-bold">$9.99</p>
                </div>
              </div>
            </div>
            {/* Gradient overlay for fade effect */}
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l to-transparent dark:from-[var(--card)]"
              style={{ zIndex: 10 }}
            ></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
