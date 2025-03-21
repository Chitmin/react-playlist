import WorkoutMix from "@/pages/WorkoutMix";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/workout-mix")({
  component: WorkoutMix,
});
