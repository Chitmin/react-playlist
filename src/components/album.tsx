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

export function AlbumJumbo({ album }: { album: Album }) {
  const img = album.strAlbumThumbHQ || album.strAlbumThumb || null;

  return (
    <div
      className={`bg-cover bg-center lg:min-w-140 h-full text-white py-4 px-8 mb-4 shadow-lg hover:shadow-2xl rounded-lg`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="flex flex-col justify-between min-h-[24rem]">
        <h2 className="text-4xl uppercase">{album.strAlbum}</h2>
        <h3 className="text-2xl">{album.strArtist}</h3>
      </div>
    </div>
  );
}
