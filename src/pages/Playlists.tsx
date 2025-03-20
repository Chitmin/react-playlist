import { SidebarContent } from "@/components/sidebar-content";
import { SkeletonPage } from "@/components/skeleton-page";

export default function Playlists() {
  return (
    <SidebarContent>
      <>
        <h1>Playlists</h1>
        <SkeletonPage />
      </>
    </SidebarContent>
  );
}
