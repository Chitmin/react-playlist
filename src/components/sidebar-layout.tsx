import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { AudioPlayer } from "./audio-player";
import { useAlbumQuery, useAlbumTracksQuery } from "@/hooks/use-audio-api";

const DEFAULT_ALBUM_ID = 2115888;

export function SidebarLayout({ children }: { children: ReactNode }) {
  const { data: albumQ } = useAlbumQuery({ id: DEFAULT_ALBUM_ID });
  const { data: tracksQ } = useAlbumTracksQuery({ id: DEFAULT_ALBUM_ID });

  return (
    <div className="min-h-svh bg-gradient-to-r from-pink-500 to-rose-500">
      <SidebarProvider className="min-h-auto h-210 max-h-210 rounded-b-[65px] overflow-hidden">
        <AppSidebar />
        <SidebarInset className="md:peer-data-[variant=inset]:mb-0 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:mb-0 md:peer-data-[variant=inset]:mr-0 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:mr-o md:peer-data-[variant=inset]:rounded-none rounded-none md:peer-data-[variant=inset]:rounded-br-[65px] overflow-scroll">
          {children}
        </SidebarInset>
      </SidebarProvider>
      <div className="p-4 text-white">
        <AudioPlayer album={albumQ?.album} tracks={tracksQ?.tracks} />
      </div>
    </div>
  );
}
