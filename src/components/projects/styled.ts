import styled from "styled-components";

export const StyledProjects = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100vh;
  background-color: #34e3;
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
    }
  }
`;

export const DescriptionContainerStyled = styled.div`
  background-color: #101c34;
  padding: 10px;
  width: 100%;
  max-width: 400px;

  p {
    color: #fff;
  }
`;

export const ButtonStyleds = styled.button`
  background-color: #101c34;
  color: black;
  width: 100px;
  height: 40px;
  font-size: 1.1rem;
  color: white;
  border: none;
`;

export const ContainerSlideButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin: 0 auto;
  gap: 10px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
