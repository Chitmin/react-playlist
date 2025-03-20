import { createContext } from "react";

const SearchArtistsContext = createContext<Artists | undefined>(undefined);

export default SearchArtistsContext;
