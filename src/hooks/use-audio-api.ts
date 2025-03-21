import {
  getAlbumById,
  getAlbumTracksById,
  getArtistAlbumsById,
  getArtistById,
  getTrackById,
  searchArtistByName,
} from "@/lib/api";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

export function useAritstQuery(id: string | number) {
  return useSuspenseQuery({
    queryKey: ["get-artist", id],
    queryFn: () => getArtistById(id),
  });
}

export function useAritstAlbumsQuery(id: string | number) {
  return useSuspenseQuery({
    queryKey: ["artist-albums", id],
    queryFn: () => getArtistAlbumsById(id),
  });
}

export function useAlbumQuery({
  id,
  start = true,
}: {
  id: string | number;
  start?: boolean;
}) {
  return useQuery({
    queryKey: ["get-album", id],
    queryFn: () => getAlbumById(id),
    enabled: start,
  });
}

export function useAlbumTracksQuery({
  id,
  start = true,
}: {
  id: string | number;
  start?: boolean;
}) {
  return useQuery({
    queryKey: ["album-tracks", id],
    queryFn: () => getAlbumTracksById(id),
    enabled: start,
  });
}

export function useTrackQuery(id: string | number) {
  return useSuspenseQuery({
    queryKey: ["get-track", id],
    queryFn: () => getTrackById(id),
  });
}

export function useSearchArtists({
  name,
  start = true,
}: {
  name: string;
  start?: boolean;
}) {
  return useQuery({
    queryKey: ["search-artists", name],
    queryFn: () => searchArtistByName(name),
    enabled: start,
  });
}
