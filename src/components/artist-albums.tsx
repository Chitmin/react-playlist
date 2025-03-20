import { useAritstAlbumsQuery } from "@/hooks/use-audio-api";
import { Suspense } from "react";
import { SkeletonCards } from "./skeleton-page";
import { AlbumSmall } from "./album";

export function ArtistAlbums({ id }: { id: string | number }) {
  const { data } = useAritstAlbumsQuery(id);
  return (
    <Suspense fallback={<SkeletonCards />}>
      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        {data.albums.map((album) => (
          <AlbumSmall album={album} key={album.idAlbum} />
        ))}
      </div>
    </Suspense>
  );
}
