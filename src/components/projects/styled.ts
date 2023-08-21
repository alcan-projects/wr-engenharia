import styled from "styled-components";

export const StyledProjects = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

export const ContainerProjectStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  .project__container {
    margin-top: 40px;
    flex-direction: column;
    gap: 20px;
    display: flex;
    padding: 0px 10px;
    position: absolute;
    left: -179px;
    top: 50px;
    img {
      width: 400px;
      transition: all 0.4s;
    }
  }
`;

export const ButtonStyleds = styled.button`
  font-size: 3rem;
  color: #101c34;
  border: none;
  background-color: transparent;
`;

export const ContainerSlideButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  gap: 110px;
`;
