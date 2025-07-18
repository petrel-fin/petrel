import type { PropsWithChildren } from "react";
import DashboardHeader from "~/components/dashboard/header/dashboard-header";
import NavSidebar from "~/components/dashboard/sidebar/nav-sidebar";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

export default function Page({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <NavSidebar />
      <SidebarInset>
        <div className="h-full">
          <DashboardHeader />
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
