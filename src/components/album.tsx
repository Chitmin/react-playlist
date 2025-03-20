export function AlbumSmall({ album }: { album: Album }) {
  const src = album.strAlbumThumbHQ || album.strAlbumThumb || null;

  return (
    <div className="relative flex flex-col my-6">
      {src ? (
        <div className="relative m-2.5 overflow-hidden text-white rounded-md">
          <img src={src} alt={album.strArtist} />
        </div>
      ) : (
        <div className="relative m-2.5 rounded-md bg-muted/50" />
      )}
      <div className="p-4">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
          {album.strAlbum}
        </h6>
        <p className="text-slate-600 leading-normal font-light">
          {album.strArtist}
        </p>
      </div>
    </div>
  );
}
