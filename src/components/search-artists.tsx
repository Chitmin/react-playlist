import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  startSearch: (start: true) => void;
  setName: (value: string) => void;
};

export function SearchArtists({ startSearch, setName }: Props) {
  const handleKeyDown = (event: KeyDownEvent): void => {
    if (event.key === "Enter") {
      startSearch(true);
    }
  };

  const handleOnChange = (event: ChangeEvent) => setName(event.target.value);

  return (
    <div className="relative flex flex-1 items-center mb-4 mr-4">
      <div role="button" className="cursor-pointer mr-4">
        <Search size={30} />
      </div>
      <input
        type="text"
        name="artists-search"
        data-slot="input"
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        className={cn(
          "dark:bg-input/30 border-0 flex h-12 w-full min-w-0 rounded-none border-0 bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-0 focus-visible:shadow-md focus-visible:shadow-md",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive "
        )}
      />
    </div>
  );
}
