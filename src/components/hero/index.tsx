import {
  HeroButtonStyled,
  HeroContainerStyled,
  LogoStyled,
  SocialContainer,
  TextContainerStyled,
} from "./styles";

import logo from "../../assets/images/logo.png";

export function Hero() {
  return (
    <HeroContainerStyled>
      <LogoStyled>
        <img src={logo} alt="logo-wr_engenharia" />
      </LogoStyled>
      <TextContainerStyled>
        <h1>WR Engenharia</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure error
          magnam nobis labore numquam nulla praesentium deleniti repellendus
          commodi, atque debitis inventore voluptatum at id. Mollitia vitae
          dolorem sequi dolore?
        </p>
        <HeroButtonStyled>Entrar em contato</HeroButtonStyled>
      </TextContainerStyled>
      <SocialContainer>
        <a href="insta">Instagram</a>
        <a href="insta">Facebook</a>
        <a href="insta">Whatsapp</a>
      </SocialContainer>
    </HeroContainerStyled>
  );
}
