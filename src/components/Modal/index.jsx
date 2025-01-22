// Estados y Contexto:
import { useContext } from "react";
import { HomeContext } from "../../context/HomeContext";

// styled-component y Material UI:
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

// Fuentes:
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Componentes:
import Formulario from "../Formulario";


const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ModalStyled = styled.form`
  box-sizing: border-box;
  position: absolute;
  top: 130px;
  left: 50%;
  transform: translateX(-50%);
  height: 760px;  //720
  border: 5px solid #6bd1ff;
  border-radius: 10px;
  background: #dcf3ff;
  background-blend-mode: normal;

  @media (max-width: 430px) {
    width: 370px;
    padding: 0px 15px;
  }

  @media (min-width: 431px) and (max-width: 1023px) {
    width: 80%;
    padding: 0px 25px;
  }

  @media (min-width: 1024px) {
    width: 824px;
    padding: 0px 100px;
  }

  h1 {
    margin: 75px 0px 20px 0px;
    color: #2271d1;
  }

  .BtnCerrar {
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;

export default function Modal() {
  const { isModalOpen, closeModal } = useContext(HomeContext);
  
  /* Sube la ventana al inicio: */
  {window.scrollTo({ top: 0, behavior: "smooth" });}

  if (!isModalOpen) return null;

  return (
    <>
      <Overlay />
      <ModalStyled>
        <Typography variant="h3" align="center" component="h1">Editar Card</Typography>
        <Formulario />
        <Button className="BtnCerrar" variant="contained" size="large" onClick={closeModal}>Cerrar</Button>
      </ModalStyled>
    </>
  );
}



