"use client";

import * as React from "react";
import { MdOutlineDashboard } from "react-icons/md";

import { MdOutlineSsidChart } from "react-icons/md";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { MdPhonelink } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";
import { TbChartTreemap } from "react-icons/tb";
import { CiDollar } from "react-icons/ci";
import { SlGraph } from "react-icons/sl";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import { NavPage } from "./types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTimeline } from "react-icons/fa6";
import { MdFormatListBulleted } from "react-icons/md";
import { BsPieChart } from "react-icons/bs";

const mainPages: NavPage[] = [
  {
    title: "Overview",
    url: "/dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    title: "Timeline",
    url: "/dashboard/timeline",
    icon: <FaTimeline />,
  },
  {
    title: "Cash Flow",
    url: "/dashboard/cash-flow",
    icon: <MdOutlineSsidChart />,
  },
  {
    title: "Transactions",
    url: "/dashboard/transactions",
    icon: <MdFormatListBulleted />,
    badge: "5",
  },
  {
    title: "Budgeting",
    url: "/dashboard/budgeting",
    icon: <BsPieChart />,
  },
  {
    title: "Net Worth",
    url: "/dashboard/net-worth",
    icon: <TbChartTreemap />,
  },
  {
    title: "Investments",
    url: "/dashboard/investments",
    icon: <LuChartNoAxesCombined />,
    badge: "22",
  },
  {
    title: "Income",
    url: "/dashboard/income",
    icon: <SlGraph />,
    badge: "2",
  },
  {
    title: "Expenses",
    url: "/dashboard/expenses",
    icon: <CiDollar />,
    badge: "4",
  },
  {
    title: "Holdings",
    url: "/dashboard/holdings",
    icon: <FaRegCreditCard />,
    badge: "18",
  },
  {
    title: "Possessions",
    url: "/dashboard/possessions",
    icon: <MdPhonelink />,
    badge: "9",
  },
];

export default function NavMain() {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Navigation</SidebarGroupLabel>
      <SidebarMenu>
        {mainPages.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild isActive={pathname === item.url}>
              <Link href={item.url}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>

            {item.badge ? (
              <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
            ) : null}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
