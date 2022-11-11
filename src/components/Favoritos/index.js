import styled from "styled-components";

const FavTubes = styled.section`
  display: flex;
  flex-wrap: wrap;

  gap: 10px 26px;
  padding: 20px;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
    width: 100%;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }
`;

export const Favoritos = ({ favorites }) => {
  return (
    <FavTubes>
      <h2>Aluratubes Favoritos</h2>

      {favorites.map((item) => {
        return (
          <div key={item.name}>
            <img src={item.picture} />
            <span>{`@${item.name}`}</span>
          </div>
        );
      })}
    </FavTubes>
  );
};
