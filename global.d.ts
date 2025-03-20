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

type SingleArtist = {
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
