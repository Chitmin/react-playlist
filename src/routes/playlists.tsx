import Playlists from "@/pages/Playlists";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/playlists")({
  component: Playlists,
});
