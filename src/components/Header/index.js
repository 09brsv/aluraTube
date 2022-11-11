import ImgBanner from "../../assets/img/banner.jpg";
import config from "../../../config.json";
import styled from "styled-components";
import Image from "next/image";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  .user-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <Image src={ImgBanner} alt="ok" quality={100} priority={true} />
      <section className="user-info">
        <img
          className="user-image"
          src={`https://github.com/${config.github}.png`}
        />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}
