import { SidebarLayout } from "@/components/sidebar-layout";
import { SkeletonPage } from "@/components/skeleton-page";

export default function Home() {
  return (
    <SidebarLayout>
      <>
        <h1>Home</h1>
        <SkeletonPage />
      </>
    </SidebarLayout>
  );
}
