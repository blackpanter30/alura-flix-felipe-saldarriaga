import Button from "@mui/material/Button";

function Boton(props) {

  let variante = "";

  switch (props.estado) {
    case "selected":
      variante = "contained";
      break;
    case "unSelected":
      variante = "outlined";
      break;
  }

  return (
    <Button variant={variante} size="large" onClick={props.onClick}>{props.texto}</Button>
  )

}

export default Boton;