"use client";

import * as React from "react";
import { MdOutlineDashboard } from "react-icons/md";

import { MdOutlineSsidChart } from "react-icons/md";
import { MdPhonelink } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";
import { LuBrain } from "react-icons/lu";
import { LuRepeat2 } from "react-icons/lu";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTimeline } from "react-icons/fa6";
import { MdFormatListBulleted } from "react-icons/md";
import { BsPieChart } from "react-icons/bs";
import type { NavPage } from "./types";
import { Badge } from "~/components/ui/badge";

const visualizationPages: NavPage[] = [
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
  },
  {
    title: "Recurring",
    url: "/dashboard/recurring",
    icon: <LuRepeat2 />,
    badge: "12",
  },
  {
    title: "Budgeting",
    url: "/dashboard/budgeting",
    icon: <BsPieChart />,
  },
];

const dataPages: NavPage[] = [
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

const aiPages: NavPage[] = [
  {
    title: "Chat",
    url: "/dashboard/chat",
    icon: <LuBrain />,
  },
];

export default function NavMain() {
  const pathname = usePathname();

  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Visualization</SidebarGroupLabel>
        <SidebarMenu>
          {visualizationPages.map((item) => (
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

      <SidebarGroup>
        <SidebarGroupLabel>Data</SidebarGroupLabel>
        <SidebarMenu>
          {dataPages.map((item) => (
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

      <SidebarGroup>
        <SidebarGroupLabel>AI</SidebarGroupLabel>
        <SidebarMenu>
          {aiPages.map((item) => (
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
    </>
  );
}
