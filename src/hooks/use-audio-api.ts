import {
  getAlbumById,
  getArtistAlbumsById,
  getArtistById,
  searchArtistByName,
} from "@/lib/api";
import { useSuspenseQuery } from "@tanstack/react-query";

export function useAritstByIDQuery(id: string | number) {
  return useSuspenseQuery({
    queryKey: ["get-artist", id],
    queryFn: () => getArtistById(id),
  });
}

export function useAritstAlbumsByIDQuery(id: string | number) {
  return useSuspenseQuery({
    queryKey: ["artist-albums", id],
    queryFn: () => getArtistAlbumsById(id),
  });
}

export function useAlbumByIDQuery(id: string | number) {
  return useSuspenseQuery({
    queryKey: ["get-album", id],
    queryFn: () => getAlbumById(id),
  });
}

export function useSearchArtists(name: string) {
  return useSuspenseQuery({
    queryKey: ["search-artists", name],
    queryFn: () => searchArtistByName(name),
  });
}
