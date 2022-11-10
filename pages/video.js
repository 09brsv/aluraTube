import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { VideoContext } from "../src/components/Context/EmbedVideo";

export const StyledVideoSection = styled.div`
  width: 100%;
  padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  align-items: center;

  h1 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.textColorBase}
  }
`;

export default function Video() {
  const { url, title } = React.useContext(VideoContext);
  const getParams = url.slice(url.indexOf("=") + 1);

  return (
    <StyledVideoSection>
      <Link href={"/"} passHref legacyBehavior>
          <a>Retorne a página anterior</a>
        </Link>
      {url && (
        ((<h1>{title}</h1>),
        (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${getParams}`}
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        ))
      )}
    </StyledVideoSection>
  );
}
