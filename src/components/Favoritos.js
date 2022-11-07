import config from "../../config.json";

import styled from "styled-components";

const Favoritos = (props) => {

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
        align-items: center;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
  `;

  const favoritos = props.favoritos;

  return (
    <FavTubes>
        
      <h2>Aluratubes Favoritos</h2>
      
      {favoritos.map((item) => {
        return( 
        <div>
          <img src={item.foto} />
          <span>{`@${item.nome}`}</span>
        </div>
        )
      })}
    </FavTubes>
  );
};

export default Favoritos;
