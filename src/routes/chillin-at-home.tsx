import ChillinAtHome from "@/pages/ChillinAtHome";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/chillin-at-home")({
  component: ChillinAtHome,
});
