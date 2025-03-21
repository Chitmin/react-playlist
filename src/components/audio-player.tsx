import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { SkeletonAudioPlayer } from "./skeleton-page";
import {
  CirclePlay,
  ListMusic,
  MonitorSmartphone,
  Repeat,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";

export function AudioPlayer({
  album,
  tracks,
}: {
  album?: Album | undefined;
  tracks?: Track[] | undefined;
}) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  useEffect(() => {
    if (tracks) {
      setCurrentTrack(tracks[0]);
    }
  }, [tracks]);

  return album && currentTrack ? (
    <div className="flex items-center justify-between w-full overflow-hidden">
      <div className="flex gap-4 items-center mx-2">
        <div>
          <Avatar className="h-18 w-18 rounded-full">
            <AvatarImage
              src={album.strAlbumThumb || undefined}
              alt={album.strAlbum}
            />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col">
          <p className="text-white font-bold text-xl">
            {currentTrack.strTrack}
          </p>
          <p className="text-xs text-gray-100 text-md font-light">
            {album.strAlbum}
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center mx-2">
        <SkipBack className="h-6 w-6" />
        <CirclePlay className="h-10 w-10" />
        <SkipForward className="h-6 w-6" />
        <Repeat className="h-6 w-6" />
        <div className="flex gap-2 items-center">
          <span className="text-xs">0:00</span>
          <Slider
            defaultValue={[0]}
            max={100}
            step={1}
            className="min-w-60 w-100 max-w-100"
          />
          <span className="text-xs">3:00</span>
        </div>
        <ListMusic className="h-6 w-6" />
        <MonitorSmartphone className="h-6 w-6" />
        <div className="flex items-center gap-2">
          <Volume2 className="h-6 w-6" />
          <Slider
            defaultValue={[0]}
            max={100}
            step={1}
            className="min-w-30 w-100 max-w-100"
          />
        </div>
      </div>
      <div className=""></div>
    </div>
  ) : (
    <SkeletonAudioPlayer />
  );
}
