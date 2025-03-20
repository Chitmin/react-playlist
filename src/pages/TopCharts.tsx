import { SidebarContent } from "@/components/sidebar-content";
import { SkeletonPage } from "@/components/skeleton-page";

export default function TopCharts() {
  return (
    <SidebarContent>
      <>
        <h1>TopCharts</h1>
        <SkeletonPage />
      </>
    </SidebarContent>
  );
}
