import {
  getAlbumById,
  getAlbumTracksById,
  getArtistAlbumsById,
  getArtistById,
  getTrackById,
  searchArtistByName,
} from "@/lib/api";
import { useSuspenseQuery } from "@tanstack/react-query";

export function useAritstQuery(id: string | number) {
  return useSuspenseQuery({
    queryKey: ["get-artist", id],
    queryFn: () => getArtistById(id),
  });
}

export function useAritstAlbumsDQuery(id: string | number) {
  return useSuspenseQuery({
    queryKey: ["artist-albums", id],
    queryFn: () => getArtistAlbumsById(id),
  });
}

export function useAlbumQuery(id: string | number) {
  return useSuspenseQuery({
    queryKey: ["get-album", id],
    queryFn: () => getAlbumById(id),
  });
}

export function useAlbumTracksQuery(id: string | number) {
  return useSuspenseQuery({
    queryKey: ["album-tracks", id],
    queryFn: () => getAlbumTracksById(id),
  });
}

export function useTrackQuery(id: string | number) {
  return useSuspenseQuery({
    queryKey: ["get-track", id],
    queryFn: () => getTrackById(id),
  });
}

export function useSearchArtists(name: string) {
  return useSuspenseQuery({
    queryKey: ["search-artists", name],
    queryFn: () => searchArtistByName(name),
  });
}
