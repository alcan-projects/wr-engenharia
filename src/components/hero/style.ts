import styled from "styled-components";

export const HeroStyled = styled.div`
  width: 100%;
  max-width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    color: #fff;
  }

  p {
    color: #fff;
  }
`;

export const ContainerStyled = styled.div`
  background-color: #101c34;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  height: 100vh;
  position: relative;
  img {
    width: 100%;
    max-width: 100px;
    position: absolute;
    top: 30px;
    left: 30px;
  }
`;
