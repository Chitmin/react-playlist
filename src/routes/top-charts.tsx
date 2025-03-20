import TopCharts from "@/pages/TopCharts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/top-charts")({
  component: TopCharts,
});
