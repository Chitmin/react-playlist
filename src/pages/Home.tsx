import { ArtistAlbums } from "@/components/artist-albums";
import { SearchArtists } from "@/components/search-artists";
import { SidebarLayout } from "@/components/sidebar-layout";
import SearchArtistsContext from "@/contexts/SearchArtistsContext";
import {
  useAlbumTracksQuery,
  useAritstAlbumsQuery,
  useSearchArtists,
} from "@/hooks/use-audio-api";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { NotificationBell } from "@/components/notification-bell";
import { RecentlyPlayed, RecommendForYou } from "@/components/playlists";
import { AlbumJumbo } from "@/components/album";

const DEAFULT_ALBUM_ID = 2115888;
const DEAFULT_ARTIST_ID = 112024;

export default function Home() {
  const [name, setName] = useState("");
  const [start, setStart] = useState(false);
  const { data, isLoading } = useSearchArtists({
    name,
    start: start && !!name,
  });

  const { data: albumsQ } = useAritstAlbumsQuery(DEAFULT_ARTIST_ID);
  const { data: tracksQ } = useAlbumTracksQuery({ id: DEAFULT_ALBUM_ID });

  const maxItems = {
    albums: 2,
    recents: 5,
    recommends: 3,
  };

  return (
    <SidebarLayout>
      <div className="px-8 py-4">
        <SearchArtistsContext.Provider value={data}>
          <div className="flex justify-between item-center mb-8">
            <SearchArtists startSearch={setStart} setName={setName} />
            <NotificationBell count={3} />
          </div>
          {(isLoading || !data) && (
            <>
              <div className="flex justify-between mb-4">
                {albumsQ.albums.slice(maxItems.albums * -1).map((album) => (
                  <AlbumJumbo album={album} key={album.idAlbum} />
                ))}
              </div>
              <div className="flex justify-between mb-4">
                {tracksQ && (
                  <>
                    <RecentlyPlayed
                      tracks={tracksQ.tracks.slice(maxItems.recents * -1)}
                    />
                    <RecommendForYou
                      tracks={tracksQ.tracks.slice(maxItems.recommends * -1)}
                    />
                  </>
                )}
              </div>
            </>
          )}
          {data?.artists && (
            <div className="mb-4">
              {data.artists.map((artist) => (
                <ArtistAlbums id={artist.idArtist} key={artist.idArtist} />
              ))}
              <Separator className="my-4" />
            </div>
          )}
        </SearchArtistsContext.Provider>
      </div>
    </SidebarLayout>
  );
}
