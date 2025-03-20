import { SidebarLayout } from "@/components/sidebar-layout";
import { SkeletonPage } from "@/components/skeleton-page";

export default function Songs() {
  return (
    <SidebarLayout>
      <>
        <h1>Songs</h1>
        <SkeletonPage />
      </>
    </SidebarLayout>
  );
}
