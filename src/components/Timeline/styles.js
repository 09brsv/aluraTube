import styled from "styled-components";

export const StyledTimeline = styled.main`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;

  section {
    overflow: hidden;
    padding: 16px;
    h2 {
      font-size: 16px;
      margin-bottom: 16px;
      text-transform: capitalize;
    }

    div {
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px, 1fr);
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      ::-webkit-scrollbar {
        width: 7px;
      }

      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 7px;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 7px;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
        background-color: ${({ theme }) => theme.backgroundSwitch};
      }
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
        img {
          aspect-ratio: 16/9;
          font-weight: 500;
          object-fit: cover;
          width: 100%;
          max-width: 210px;
          height: auto;
        }
      }
    }
  }
`;