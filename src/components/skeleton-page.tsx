import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <Skeleton className="aspect-video rounded-xl bg-muted/50" />
        <Skeleton className="aspect-video rounded-xl bg-muted/50" />
        <Skeleton className="aspect-video rounded-xl bg-muted/50" />
      </div>
      <Skeleton className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  );
}

export function SkeletonCards({ count = 3 }: { count?: number | string }) {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className={`grid auto-rows-min gap-4 md:grid-cols-${count}`}>
        {Array(count)
          .fill(0)
          .map((_) => (
            <Skeleton className="aspect-video rounded-xl bg-muted/50" />
          ))}
      </div>
    </div>
  );
}

export function SkeletonAudioPlayer() {
  return (
    <div className="flex flex-wrap justify-between">
      <Skeleton className="aspect-3/1 rounded-xl h-18 bg-muted/50" />
      <Skeleton className="aspect-3/1 rounded-xl h-18 bg-muted/50" />
      <Skeleton className="aspect-3/1 rounded-xl h-18 bg-muted/50" />
      <Skeleton className="aspect-3/1 rounded-xl h-18 bg-muted/50" />
      <Skeleton className="aspect-3/1 rounded-xl h-18 bg-muted/50" />
    </div>
  );
}
