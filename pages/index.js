import React from "react";
import config from "../config.json";

import { Nav } from "../src/components/Menu";
import { Timeline } from "../src/components/Timeline";
import { Header } from "../src/components/Header";
import { Favoritos } from "../src/components/Favoritos";

export default function HomePage() {
  const [valorDoFiltro, setFiltro] = React.useState("");

  return (
    <div>
      <Nav valorDoFiltro={valorDoFiltro} setFiltro={setFiltro} />
      <Header />
      <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
        Conteúdo
      </Timeline>
      <Favoritos favorites={config.favorites} />
    </div>
  );
}
