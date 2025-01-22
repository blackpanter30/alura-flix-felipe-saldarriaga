import styled from "styled-components";
import { HomeContext } from "../../context/HomeContext";
import { useContext } from "react";

const CardStyled = styled.div`
  box-sizing: border-box;
  
  @media (max-width: 430px) {
    height: 280px;
    width: 360px;
  }

  @media (min-width: 430px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    height: auto;  // 320
    width: auto;   // 380
    border-radius: 15px;
    border: 5px solid #777777;
    background: rgba(0, 0, 0, 0.9);
    background-blend-mode: normal;
  }

`;

const CardVideoStyled = styled.iframe`
  box-sizing: border-box;
  height: 260px;
  width: 360px;
  border: none;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 5px solid #777777;
`;

const BotonesCardStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 70px;

  button {
    background: none;
    border: none;
  }
`;

export default function CardVideo(props) {

  const { openModal, eliminarVideo } = useContext(HomeContext);  

  return (
    <CardStyled>
      <CardVideoStyled
        src={props.fuente}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
      <BotonesCardStyled>
        <button onClick={() => eliminarVideo(props.id)}>
          <img src="/public/iconos/TablerTrashX.svg" height="35px" alt="Borrar" />
        </button>

        <button onClick={() => openModal(props.id)}>
          <img src="/public/iconos/LineMdEdit.svg" height="35px" alt="Editar" />
        </button>
      </BotonesCardStyled>
    </CardStyled>
  );
}
