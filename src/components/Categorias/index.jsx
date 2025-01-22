import styled from "styled-components";
import Categoria from "../Categoria";
import { useContext, useEffect, useState } from "react";
import { HomeContext } from "../../context/HomeContext";


const CategoriasStyled = styled.div`
  background: #420085;
  background-blend-mode: normal;
`;


function Categorias() {
  
  const { videos, setVideos } = useContext(HomeContext);

  // Efecto para cargar la lista completa de videos desde json-server
  useEffect(() => {
    async function listarVideos() {
      try {
        const conexion = await fetch("http://localhost:3001/videos");
        const conexionJSON = await conexion.json();
        setVideos(conexionJSON);
      } catch (error) {
        console.error("Error al obtener los videos: ", error);
      }
    }

    listarVideos();
    
  }, [setVideos]);

  return (
    <CategoriasStyled>
      <Categoria nombre="Frontend" fondo="#ff9500" videos={videos} />
      <Categoria nombre="Backend" fondo="#6cb928" videos={videos} />
      <Categoria nombre="Innovación y Gestión" fondo="#ff058a" videos={videos} />
    </CategoriasStyled>
  );
}

export default Categorias;