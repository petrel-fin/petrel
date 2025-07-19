"use client";

import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbTestPipe2Filled } from "react-icons/tb";

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between p-4">
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px]"
      />
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon">
          <TbTestPipe2Filled />
        </Button>
        <Button variant="outline" size="icon">
          <MdOutlineLightMode />
        </Button>
        <Button variant="outline" size="icon">
          <IoMdNotificationsOutline />
        </Button>
      </div>
    </div>
  );
}
