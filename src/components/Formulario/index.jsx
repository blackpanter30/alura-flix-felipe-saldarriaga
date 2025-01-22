import { v4 as uuidv4 } from "uuid";
import TextField from "@mui/material/TextField";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  FormHelperText,
} from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { HomeContext } from "../../context/HomeContext";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function Formulario() {
  
  const { setVideos, datos, setDatos, errores, setErrores, cardSelected, isModalOpen, limpiarFormulario } = useContext(HomeContext);

  useEffect(() => {
    limpiarFormulario();
  }, [isModalOpen]);
  
  useEffect(() => {
    
    if (cardSelected) {
      setDatos({
        id: cardSelected.id || uuidv4(),
        titulo: cardSelected.titulo || "",
        categoria: cardSelected.categoria || "",
        imgURL: cardSelected.imgURL || "",
        videoURL: cardSelected.videoURL || "",
        descripcion: cardSelected.descripcion || "",
      });
    }
  }, [cardSelected]);

  

  // Se establece la tarea a realizar según el Formulario abierto:
  function tareaFormulario(e) {
    e.preventDefault();

    // 1. Validar campos:
    if (!validarCampos()) {
      console.log("Errores en los datos:", errores);
      return; // Detener el flujo si hay errores
    }

    // 2. Realizar la acción correspondiente:
    if (isModalOpen) {
      actualizarVideo();

    } else {
      nuevoVideo(e);
    }
  }

  // Función asíncrona (POST) para enviar Video:
  async function nuevoVideo() {
    // 1. Validar campos antes de realizar cualquier operación
    if (!validarCampos()) {
      console.log("Errores en los datos:", errores);
      return; // Detener el envío si hay errores
    }

    try {
      const conexion = await fetch("http://localhost:3001/videos", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(datos),
      });

      if (conexion.ok) {
        alert("¡Video guardado exitosamente!");

        setDatos({
          id: "",
          titulo: "",
          categoria: "",
          imgURL: "",
          videoURL: "",
          descripcion: "",
        }); // Resetear el formulario.

        setErrores({
          titulo: false,
          categoria: false,
          imgURL: false,
          videoURL: false,
          descripcion: false,
        });
      } else {
        alert("Error al guardar el video.");
      }
    } catch (error) {
      console.error("Error en el POST:", error);
    }
  }

  // Función asíncrona (PUT) para actualizar Video :
  async function actualizarVideo() {
    try {
      // Verificar si estamos editando una tarjeta existente
      const url = `http://localhost:3001/videos/${cardSelected.id}`; // Usar el ID de la tarjeta seleccionada para actualizar
      const conexion = await fetch(url, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(datos),
      });

      if (conexion.ok) {

        const videoActualizado = await conexion.json();
        setVideos((prevVideos) =>
          prevVideos.map((video) => 
          video.id === cardSelected.id ? videoActualizado : video));

        alert("¡Video actualizado exitosamente!");
        
        setDatos({
          titulo: "",
          categoria: "",
          imgURL: "",
          videoURL: "",
          descripcion: "",
        }); // Resetear el formulario

        setErrores({
          titulo: false,
          categoria: false,
          imgURL: false,
          videoURL: false,
          descripcion: false,
        });

      } else {
        alert("Error al actualizar el video.");
      }
    } catch (error) {
      console.error("Error en el PUT:", error);
    }
  }


  /* Maneja el valor del campo Select: */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const validarCampos = () => {
    const nuevosErrores = {
      titulo: datos.titulo.trim() === "", // Error si el campo está vacío.
      categoria: datos.categoria === "", // Error si no se selecciona una categoría.
      imgURL: datos.imgURL.trim() === "",
      videoURL: datos.videoURL.trim() === "",
      descripcion: datos.descripcion.trim() === "",
    };
    setErrores(nuevosErrores);

    // Retorna true si no hay errores:
    return !Object.values(nuevosErrores).some((error) => error);
  };

  return (
    <>
      <TextField
        id="titulo"
        label="Título"
        name="titulo"
        value={datos.titulo}
        error={errores.titulo} // Indica si hay un error.
        helperText={errores.titulo ? "Ingrese un título para el video" : ""}
        onChange={handleChange}
        onFocus={() => setErrores({ ...errores, titulo: false })}
        variant="outlined"
        margin="normal"
        size="medium"
        placeholder="Ingrese un título para el video ..."
        fullWidth
      />

      <FormControl fullWidth>
        <InputLabel id="cat">Categoria</InputLabel>
        <Select
          labelId="cat"
          label="Categoria"
          name="categoria"
          value={datos.categoria}
          error={errores.categoria} // Indica si hay un error.
          onChange={handleChange}
          onFocus={() => setErrores({ ...errores, categoria: false })}
          fullWidth
        >
          <MenuItem value="Frontend">Frontend</MenuItem>
          <MenuItem value="Backend">Backend</MenuItem>
          <MenuItem value="Innovación y Gestión">Innovación y Gestión</MenuItem>
        </Select>
        <FormHelperText>
          {errores.categoria ? "Seleccione una categoría válida" : ""}
        </FormHelperText>
      </FormControl>

      <TextField
        id="imagen"
        label="Imagen"
        name="imgURL"
        value={datos.imgURL}
        error={errores.imgURL} // Indica si hay un error.
        helperText={
          errores.imgURL ? "Ingrese una URL para la miniatura del vídeo" : ""
        }
        onChange={handleChange}
        onFocus={() => setErrores({ ...errores, imgURL: false })}
        variant="outlined"
        margin="normal"
        size="medium"
        placeholder="Ingrese la URL de la imagen ..."
        fullWidth
      />

      <TextField
        id="video"
        label="Vídeo"
        name="videoURL"
        value={datos.videoURL}
        error={errores.videoURL} // Indica si hay un error.
        helperText={errores.videoURL ? "Ingrese una URL para el vídeo" : ""}
        onChange={handleChange}
        onFocus={() => setErrores({ ...errores, videoURL: false })}
        variant="outlined"
        margin="normal"
        size="medium"
        placeholder="Ingrese la URL del video ..."
        fullWidth
      />

      <TextField
        id="descripcion"
        label="Descripcion"
        name="descripcion"
        value={datos.descripcion}
        error={errores.descripcion} // Indica si hay un error.
        helperText={
          errores.descripcion ? "Ingrese una descripción para el vídeo" : ""
        }
        onChange={handleChange}
        onFocus={() => setErrores({ ...errores, descripcion: false })}
        variant="outlined"
        margin="normal"
        size="medium"
        placeholder="Ingrese una descripción para el video ..."
        fullWidth
        multiline
        minRows={3}
        maxRows={3}
      />

      <Div>
        <Button
          variant="contained"
          size="large"
          onClick={(e) => tareaFormulario(e)}
        >
          Guardar
        </Button>
        <Button variant="contained" size="large" onClick={limpiarFormulario}>
          Limpiar
        </Button>
      </Div>
    </>
  );
}

export default Formulario;
