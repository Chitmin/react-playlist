import BoopingAtAdobe from "@/pages/BoopingAtAdobe";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/booping-at-adobe")({
  component: BoopingAtAdobe,
});
