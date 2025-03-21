import XdForLife from "@/pages/XdForLife";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/xd-for-life")({
  component: XdForLife,
});
