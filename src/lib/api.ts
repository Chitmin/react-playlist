interface Artist {
  idArtist: string;
  strArtist: string;
  strStyle: string;
  strGenre: string;
  strWebsite: string | null;
  strBiographyEN: string | null;
  strArtistThumb: string | null;
  strArtistWideThumb: string | null;
  strArtistBanner: string | null;
  strMusicBrainzID: string | null;
  strCountry: string | null;
}

interface Album {
  idAlbum: string;
  idArtist: string;
  idLabel: string;
  strAlbum: string;
  strArtist: string;
  intYearReleased: string;
  strStyle: string;
  strGenre: string;
  strLabel: string;
  strReleaseFormat: string | null;
  strAlbumThumb: string | null;
  strAlbumThumbHQ: string | null;
  strDescriptionEN: string | null;
}

interface Track {
  idTrack: string;
  idAlbum: string;
  idArtist: string;
  strTrack: string;
  strAlbum: string;
  strArtist: string;
  intDuration: string;
  strGenre: string;
}

type SingleArtists = {
  artists: [Artist];
};

type Artists = { artists: Artist[] };

type SingleAlbum = {
  album: [Album];
};

type Albums = { album: Album[] };

type SingleTrack = {
  track: [Track];
};

type Tracks = { track: Track[] };

const BASE_API_URL = `${import.meta.env.VITE_API_URL}/api`;

export async function getArtistById(
  id: string | number
): Promise<SingleArtists> {
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
