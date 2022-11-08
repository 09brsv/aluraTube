import React, { useEffect } from "react";
import config from "../config.json";
import styled from "styled-components";

import { CSSReset } from "../src/components/CSSReset";
import { Menu } from "../src/components/Menu";
import { Timeline } from "../src/components/Timeline";
import { Header } from "../src/components/Header";
import { Favoritos } from "../src/components/Favoritos";


const BodyPage = styled.div`

`;


export default function HomePage() {
  // const valorDoFiltro = ''
  const [valorDoFiltro, setFiltro] = React.useState("");
  const [onTheme, setOnTheme] = React.useState(false)


  // console.log(config.playlists);

  return (
    <>
      <CSSReset />
      <BodyPage theme={onTheme}>

        <Menu 
        valorDoFiltro={valorDoFiltro} 
        setFiltro={setFiltro}
        currenceTheme={onTheme}
        setTheme={setOnTheme}
        />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
          Conteúdo
        </Timeline>
        <Favoritos favoritos={config.favorites} />
      </BodyPage>
    </>
  );
}
