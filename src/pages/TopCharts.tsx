import { SidebarLayout } from "@/components/sidebar-layout";
import { SkeletonPage } from "@/components/skeleton-page";

export default function TopCharts() {
  return (
    <SidebarLayout>
      <>
        <h1>TopCharts</h1>
        <SkeletonPage />
      </>
    </SidebarLayout>
  );
}
