import styled from "styled-components";

export const HeroContainerStyled = styled.div`
  border-right: 1px solid #3c3c3c1f;
  display: flex;
  flex-direction: column;
  background-color: #101c34;
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
    color: #fff;
  }

  p {
    color: #fff;
  }
`;

export const HeroButtonStyled = styled.div`
  text-decoration: solid;
  font-weight: 900;
  cursor: pointer;
  color: #fff;
  font-size: 1.4rem;
  transition: all 0.3s;

  &:hover {
    text-decoration: underline;
  }
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
    color: #fff;
  }
`;
