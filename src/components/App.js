import React from "react";
import SearchAnime from "./SearchAnime";
import Anime from "./Anime";

import { AnimeContextProvider } from "../contexts/AnimeContext";
import Pagination from "./Pagination";

function App() {
  return (
    <div className="App">
      <AnimeContextProvider>
        <SearchAnime />
        <Pagination />
        <Anime />
      </AnimeContextProvider>
    </div>
  );
}

export default App;
