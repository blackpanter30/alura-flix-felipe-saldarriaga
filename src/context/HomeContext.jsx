import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";


// Crea el contexto:
export const HomeContext = createContext(false);

// Crea el proveedor:
export const HomeProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videos, setVideos] = useState([]);
  const [cardSelected, setCardSelected] = useState(null);
  const [botonSeleccionado, setBotonSeleccionado] = useState("home"); // Administra botones del <Header/>.

  const [datos, setDatos] = useState({
    id: uuidv4(),
    titulo: "",
    categoria: "",
    imgURL: "",
    videoURL: "",
    descripcion: "",
  }); // Gestiona los datos de un video en Formulario.

  const [errores, setErrores] = useState({
    titulo: false,
    categoria: false,
    imgURL: false,
    videoURL: false,
    descripcion: false,
  }); // Estado para manejar errores en los campos del Formulario.


  // Funciones:
  // -----------------------------------------------------------
  const openModal = (id) => {
    setIsModalOpen(true);
    setCardSelected(videos.find((video) => video.id === id));
  };

  const closeModal = () => setIsModalOpen(false);

  // Función para limpiar Formulario:
  const limpiarFormulario = () => {
    setDatos({
      id: uuidv4(),
      titulo: "",
      categoria: "",
      imgURL: "",
      videoURL: "",
      descripcion: "",
    });

    setErrores({
      titulo: false,
      categoria: false,
      imgURL: false,
      videoURL: false,
      descripcion: false,
    });
  };
  // -----------------------------------------------------------

  // Funciones asíncronas:
  async function eliminarVideo(id) {
    try {
      const url = `http://localhost:3001/videos/${id}`; // Usar el ID de la tarjeta seleccionada.
      // Llamada a la API para eliminar el producto del db.json:
      const conexion = await fetch(url, {
        method: "DELETE",
      });

      if (conexion.ok) {
        // Si la eliminación es exitosa, elimina el elemento:
        setVideos((videos) => videos.filter((video) => video.id !== id));
        console.log(`Video con ID ${id} eliminado exitosamente.`);
      } else {
        console.error("Error al eliminar el video:", conexion.status);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  }


  //const closeModal = () => setIsModalOpen(false);

  return (
    <HomeContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        videos,
        setVideos,
        cardSelected,
        setCardSelected,
        eliminarVideo,
        botonSeleccionado,
        setBotonSeleccionado,
        datos,
        setDatos,
        errores,
        setErrores,
        limpiarFormulario
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};