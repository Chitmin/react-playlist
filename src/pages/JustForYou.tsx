import { SidebarLayout } from "@/components/sidebar-layout";
import { SkeletonPage } from "@/components/skeleton-page";

export default function JustForYou() {
  return (
    <SidebarLayout>
      <>
        <h1>JustForYou</h1>
        <SkeletonPage />
      </>
    </SidebarLayout>
  );
}
