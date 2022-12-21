import { useState } from "react";
import config from "../config.json";

import { Nav } from "../src/components/Nav";
import { Timeline } from "../src/components/Timeline";
import { Header } from "../src/components/Header";
import { Favoritos } from "../src/components/Favoritos";
import RegisterVideo from "../src/components/RegisterVideo";


export default function HomePage() {
  const [valorDoFiltro, setFiltro] = useState("");
  const [newVideo, setNewVideo] = useState("");

  return (
    <div>
      <Nav valorDoFiltro={valorDoFiltro} setFiltro={setFiltro} />
      <Header />
      <Timeline searchValue={valorDoFiltro} newVideo={newVideo} />
      <RegisterVideo setNewVideo={setNewVideo}/>
      <Favoritos favorites={config.favorites} />
    </div>
  );
}
