import config from "../config.json";
import styled from "styled-components";

import { CSSReset } from "../src/components/CSSReset";
import { Menu } from "../src/components/Menu";
import { Timeline } from "../src/components/Timeline";
import { Header } from "../src/components/Header";
import Favoritos from "../src/components/Favoritos";


function HomePage() {
    const HeaderInfo = styled.div `
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    `

    // console.log(config.playlists);

    return (
        <>
            <CSSReset />
            <HeaderInfo>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists}>
                    Conteúdo
                </Timeline>
                <Favoritos favoritos={config.favoritos} />
            </HeaderInfo>
        </>
    );
}

export default HomePage