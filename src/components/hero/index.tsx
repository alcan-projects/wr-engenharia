import { ContainerStyled, HeroStyled } from "./style";
import logo from "../../assets/images/logo.png";
import { GlobalButtonStyled } from "../../global/styles";

export function Hero() {
  return (
    <ContainerStyled>
      <img src={logo} alt="" />
      <HeroStyled>
        <h1>Engenharia</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed saepe
          veniam commodi. Enim provident voluptatem cum nostrum et, quaerat
          praesentium deleniti nobis dolore ipsa neque ratione quisquam eum
          expedita pariatur.
        </p>
        <GlobalButtonStyled>Entrar em contato</GlobalButtonStyled>
      </HeroStyled>
    </ContainerStyled>
  );
}
