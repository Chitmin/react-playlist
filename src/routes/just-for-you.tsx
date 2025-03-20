import JustForYou from "@/pages/JustForYou";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/just-for-you")({
  component: JustForYou,
});
