import styled from "styled-components";
import BannerVideo from "./BannerVideo";

const BannerStyled = styled.section`
  box-sizing: border-box;

  @media (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 1024px){
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 832px;
    width: 100%;
    background: rgba(0, 18, 51, 0.56);
    background-blend-mode: normal;
    background-image: url("images/Banner_Fondo.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    div.tarjeta {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 333px;
      width: 100%;
      margin: 190px 40px 0px 40px;
    }
    
    div.contenido {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    h1 {
      height: 92px;
      width: 296px;
      margin: 0;
      border-radius: 15px;
      background: #6bd1ff;
      background-blend-mode: normal;
      color: #f5f5f5;
      text-align: center;
      line-height: 92px;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      font-size: 48px;
      font-weight: 400;
      text-transform: uppercase;
    }

    h2 {
      margin: 40px 0px 9px 0px;
      color: #f5f5f5;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      font-size: 46px;
      font-weight: 400;
    }

    p {
      max-width: 340px;
      text-align: justify;
      height: auto;
      color: #f5f5f5;
      background-color: rgba(60, 60, 60, 0.22);
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      font-size: 18px;
      font-weight: 300;
    }
  }
`;


export default function Banner() {
  return (
    <BannerStyled>
      <div className="tarjeta">
        <div className="contenido">
          <h1>Front end</h1>
          <h2>Challenge React</h2>
          <p>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </p>
        </div>
        <BannerVideo />
      </div>
    </BannerStyled>
  );
}
