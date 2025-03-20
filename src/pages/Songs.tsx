import { SidebarContent } from "@/components/sidebar-content";
import { SkeletonPage } from "@/components/skeleton-page";

export default function Songs() {
  return (
    <SidebarContent>
      <>
        <h1>Songs</h1>
        <SkeletonPage />
      </>
    </SidebarContent>
  );
}
