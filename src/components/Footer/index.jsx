import styled from "styled-components";
import { Link } from "react-router-dom";
import Boton from "../Boton";
import { useContext } from "react";
import { HomeContext } from "../../context/HomeContext";

const FooterStyled = styled.footer`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  width: 100%;
  height: 125px;
  border: 1px solid #2271d1;
  background: #1f003e;
  background-blend-mode: normal;
  box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.7);
`;

const LogoStyled = styled.img`
  width: 168.45px;
  height: 40px;
  align-content: center;

  @media (max-width: 430px) {
    display: none;
  }

  @media (min-width: 1024px){
    display: block;
  }
`;

const BotonesStyled = styled.div`
  // Phone:
  @media (max-width: 430px) {
    display: flex;
    flex-direction: row;
    gap: 25px;
    padding-right: 30px;
  }

  // Desktops mayores:
  @media (min-width: 431px) {
    display: none;
  }
`;


export default function Footer() {

  const {botonSeleccionado, setBotonSeleccionado} = useContext(HomeContext);
  
    function alternarSeleccion(boton) {
      setBotonSeleccionado(boton);
    }

    return (
      <FooterStyled>
        <LogoStyled src="images/Logo_AluraFlix.png" alt="Logo Alura" />
        <BotonesStyled>
          <Link to="/">
            <Boton
              texto="home"
              estado={botonSeleccionado === "home" ? "selected" : "unSelected"}
              onClick={() => alternarSeleccion("home")}
            />
          </Link>

          <Link to="/NuevoVideo">
            <Boton
              texto="nuevo video"
              estado={
                botonSeleccionado === "nuevo video" ? "selected" : "unSelected"
              }
              onClick={() => alternarSeleccion("nuevo video")}
            />
          </Link>
        </BotonesStyled>
      </FooterStyled>
    );
}
