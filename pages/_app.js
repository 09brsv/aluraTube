import React from "react";
import { ThemeProvider } from "styled-components";

import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, {
  ColorModeContext,
} from "../src/components/Context/ColorMode";
import EmbedVideoProvider from "../src/components/Context/EmbedVideo";

const theme = {
  light: {
    backgroundBase: "#f9f9f9",
    backgroundLevel1: "#ffffff",
    backgroundLevel2: "#f0f0f0",
    backgroundSwitch: "#313131",
    borderBase: "#e5e5e5",
    textColorBase: "#222222",
  },
  dark: {
    backgroundBase: "#181818",
    backgroundLevel1: "#202020",
    backgroundLevel2: "#313131",
    backgroundSwitch: "#f0f0f0",
    borderBase: "#383838",
    textColorBase: "#FFFFFF",
  },
};

const ProviderWrapper = ({ children }) => {
  return <ColorModeProvider initialMode={"dark"}>{children}</ColorModeProvider>;
};

function MyApp({ Component, pageProps }) {
  const { mode } = React.useContext(ColorModeContext);

  return (
    <ThemeProvider theme={theme[mode]}>
      <EmbedVideoProvider>
        <CSSReset />

        <Component {...pageProps} />
      </EmbedVideoProvider>
    </ThemeProvider>
  );
}

export default function _App(children) {
  return (
    <ProviderWrapper>
      <MyApp {...children} />
    </ProviderWrapper>
  );
}
