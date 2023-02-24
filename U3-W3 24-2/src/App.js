import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import AlbumPage from "./components/AlbumPage";
import ArtistPage from "./components/ArtistPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<AlbumPage />} />
          <Route path="/artist" element={<ArtistPage />} />
        </Routes>
        <Sidebar />
        <Player />
      </BrowserRouter>
    </>
  );
}

export default App;
