import { SidebarContent } from "@/components/sidebar-content";
import { SkeletonPage } from "@/components/skeleton-page";

export default function JustForYou() {
  return (
    <SidebarContent>
      <>
        <h1>JustForYou</h1>
        <SkeletonPage />
      </>
    </SidebarContent>
  );
}
