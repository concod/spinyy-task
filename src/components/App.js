import React from "react";
import SearchAnime from "./SearchAnime";
import Anime from "./Anime";

import { AnimeContextProvider } from "../contexts/AnimeContext";

function App() {
  return (
    <div className="App">
      <AnimeContextProvider>
        <SearchAnime />
        <Anime />
      </AnimeContextProvider>
    </div>
  );
}

export default App;
