import { SidebarLayout } from "@/components/sidebar-layout";
import { SkeletonPage } from "@/components/skeleton-page";

export default function Playlists() {
  return (
    <SidebarLayout>
      <>
        <h1>Playlists</h1>
        <SkeletonPage />
      </>
    </SidebarLayout>
  );
}
