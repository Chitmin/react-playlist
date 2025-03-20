import { SidebarContent } from "@/components/sidebar-content";
import { SkeletonPage } from "@/components/skeleton-page";

export default function Home() {
  return (
    <SidebarContent>
      <>
        <h1>Home</h1>
        <SkeletonPage />
      </>
    </SidebarContent>
  );
}
