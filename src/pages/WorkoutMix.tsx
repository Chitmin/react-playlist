import { SidebarLayout } from "@/components/sidebar-layout";
import { SkeletonPage } from "@/components/skeleton-page";

export default function WorkoutMix() {
  return (
    <SidebarLayout>
      <div className="px-8 py-4">
        <h1 className="font-bold text-center text-2xl mb-8">Workout Mix</h1>
        <SkeletonPage />
      </div>
    </SidebarLayout>
  );
}
