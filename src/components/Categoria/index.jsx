import styled from "styled-components";
import CardVideo from "../CardVideo";

const CategoriaStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 90px 10px;
  width: auto;

  @media (max-width: 430px) {
    margin-top: 30px;
    margin-bottom: 90px;
  }

  padding-bottom: 25px;
  border-bottom: 2px solid ${(props) => props.fondo};
  border-radius: 15px;
  box-shadow: 0px 5px 29px ${(props) => props.fondo};
  background: #262626;
  background-blend-mode: normal;

  h1 {
    box-sizing: border-box;
    height: 70px;
    width: max-content;
    padding: 0px 10px;
    margin: 0;
    border-radius: 15px;
    background: ${(props) => props.fondo};
    background-blend-mode: normal;
    color: #f5f5f5;
    line-height: 70px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 32px;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
  }

  div.cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 30px;
  }
`;


export default function Categoria(props) {
  return (
    <CategoriaStyled fondo={props.fondo}>
      <h1> {props.nombre} </h1>
      <div className="cards">
        {props.videos
          .filter((video) => video.categoria === props.nombre)
          .map((video) => (
            <CardVideo key={video.id} id={video.id} fuente={video.videoURL} />
          ))}
      </div>
    </CategoriaStyled>
  );
}
