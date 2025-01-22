import Formulario from "../components/Formulario";

// styled-component y Material UI:
import styled from "styled-components";
import Typography from "@mui/material/Typography";

// Fuentes:
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useEffect, useContext } from "react";
import { HomeContext } from "../context/HomeContext";


const FormStyled = styled.form`
  background-color: #dcf3ff;

  h1 {
    padding: 35px 0px;
    text-transform: uppercase;
    font-weight: 700;
    color: #2271d1;
  }

  @media (max-width: 430px) {
    padding: 0px 20px 40px 20px;
  }

  @media (min-width: 431px) and (max-width: 1023px) {
    padding: 0px 60px 30px 60px;
  }

  @media (min-width: 1024px) {
    padding: 0px 300px 50px 300px;
  }
`;


export default function NuevoVideo() {

  const { limpiarFormulario } = useContext(HomeContext);

  useEffect(()=>{limpiarFormulario();}, [])

  return (
    <FormStyled>
      <Typography variant="h3" align="center" component="h1">
        nuevo video
      </Typography>
      <Formulario />
    </FormStyled>
  );
}
