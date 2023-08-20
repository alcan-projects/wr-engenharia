import styled from "styled-components";

type BannerType = {
  imgUrl: string;
};

export const HeroContainerStyled = styled.div<BannerType>`
  border-right: 1px solid #3c3c3c1f;
  display: flex;
  flex-direction: column;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  gap: 10px;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
`;

export const TextContainerStyled = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 5rem;
    color: #cd8032;
  }
`;

export const HeroButtonStyled = styled.div`
  text-decoration: solid;
  font-weight: 900;
  cursor: pointer;
  font-size: 1.4rem;
`;

export const LogoStyled = styled.div`
  position: absolute;
  width: 100px;
  top: 40px;
  left: 140px;

  img {
    width: 100%;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 120px;

  a {
    text-decoration: none;
    font-weight: 900;
    color: #000;
  }
`;
