"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "~/components/ui/sidebar";
import { NavUser } from "./nav-user";
import NavHeader from "./nav-header";
import NavMain from "./nav-main";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { MdAdd } from "react-icons/md";
import Link from "next/link";
import { LiaProjectDiagramSolid } from "react-icons/lia";

export default function NavSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>

      <SidebarContent>
        <NavMain />
        <SidebarGroup>
          <SidebarGroupLabel>Plans</SidebarGroupLabel>
          <SidebarMenu>
            {["Fast Retirement", "Switch Jobs"].map((name, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton asChild>
                  <Link href={`/dashboard/plans/${index}`}>
                    <LiaProjectDiagramSolid />
                    <span>{name}</span>
                  </Link>
                </SidebarMenuButton>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuAction>
                      <MoreHorizontal />
                    </SidebarMenuAction>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="right" align="start">
                    <DropdownMenuItem>
                      <span>Delete Project</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Set as Master Plan</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Duplicate Project</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            ))}
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <div className="text-muted-foreground flex items-center justify-center gap-2">
                  <MdAdd />
                  <span>New</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
