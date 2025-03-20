import Songs from "@/pages/Songs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/songs")({
  component: Songs,
});
