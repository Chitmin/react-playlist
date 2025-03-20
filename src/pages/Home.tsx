import { ArtistAlbums } from "@/components/artist-albums";
import { SearchArtists } from "@/components/search-artists";
import { SidebarLayout } from "@/components/sidebar-layout";
import { SkeletonPage } from "@/components/skeleton-page";
import SearchArtistsContext from "@/contexts/SearchArtistsContext";
import { useSearchArtists } from "@/hooks/use-audio-api";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { NotificationBell } from "@/components/notification-bell";

export default function Home() {
  const [name, setName] = useState("");
  const [start, setStart] = useState(false);
  const { data, isLoading } = useSearchArtists({
    name,
    start: start && !!name,
  });

  return (
    <SidebarLayout>
      <div className="px-8 py-4">
        <SearchArtistsContext.Provider value={data}>
          <div className="flex justify-between item-center mb-4">
            <SearchArtists startSearch={setStart} setName={setName} />
            <NotificationBell count={3} />
          </div>
          {(isLoading || !data) && <SkeletonPage />}
          {data?.artists && (
            <div className="mb-4">
              {data.artists.map((artist) => (
                <ArtistAlbums id={artist.idArtist} />
              ))}
              <Separator className="my-4" />
            </div>
          )}
        </SearchArtistsContext.Provider>
      </div>
    </SidebarLayout>
  );
}
