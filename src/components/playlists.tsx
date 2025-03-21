import { nanoToMinutes } from "@/lib/utils";
import { Heart } from "lucide-react";

export function RecentlyPlayed({ tracks }: { tracks: Track[] }) {
  return (
    <div className="w-full mr-4">
      <h3 className="text-xl fond-bold mb-4 tracking-widest">
        Recently Played
      </h3>
      <ul className="text-sm text-gray-400">
        {tracks.map((track) => (
          <li
            key={track.idTrack}
            className="flex items-center justify-between mb-4"
          >
            <img src="https://picsum.photos/200" className="w-12 h-12 mr-4" />
            <span className="flex-1">{track.strTrack}</span>
            <span className="flex-1">{track.strArtist}</span>
            <span className="flex-1">{nanoToMinutes(+track.intDuration)}</span>
            <Heart className="w-4 h-4" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RecommendForYou({ tracks }: { tracks: Track[] }) {
  return (
    <div className="w-full">
      <h3 className="text-xl fond-bold mb-4 tracking-widest">
        Recently Played
      </h3>
      <div className="flex justify-between">
        {tracks.map((track) => (
          <div className="relative flex flex-col my-6" key={track.idTrack}>
            <div className="relative m-2.5 overflow-hidden text-white rounded-md">
              <img src="https://picsum.photos/400" alt={track.strArtist} />
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-base font-semibold">
                  {track.strTrack}
                </h6>
                <p className="text-slate-600 leading-normal text-sm font-light">
                  {track.strArtist}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
