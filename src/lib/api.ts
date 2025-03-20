const BASE_API_URL = `${import.meta.env.VITE_API_URL}/api`;

export async function getArtistById(
  id: string | number
): Promise<SingleArtist> {
  return fetch(`${BASE_API_URL}/artists/${id}`).then((res) => res.json());
}

export async function getArtistAlbumsById(
  id: string | number
): Promise<Albums> {
  return fetch(`${BASE_API_URL}/artists/${id}/albums`).then((res) =>
    res.json()
  );
}

export async function getAlbumById(id: string | number): Promise<SingleAlbum> {
  return fetch(`${BASE_API_URL}/albums/${id}`).then((res) => res.json());
}

export async function getAlbumTracksById(id: string | number): Promise<Tracks> {
  return fetch(`${BASE_API_URL}/albums/${id}/tracks`).then((res) => res.json());
}

export async function getTrackById(id: string | number): Promise<SingleTrack> {
  return fetch(`${BASE_API_URL}/tracks/${id}`).then((res) => res.json());
}

export async function searchArtistByName(name: string): Promise<Artists> {
  return fetch(`${BASE_API_URL}/search/artists/${name}`).then((res) =>
    res.json()
  );
}
