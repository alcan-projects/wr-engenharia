import { createGlobalStyle, styled } from "styled-components";

export const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
}



body{
  background-color: white;
}
`;

export const StyledContainerApp = styled.div`
  display: flex;
`;

export const GlobalButtonStyled = styled.button`
  background-color: #cd8032;
  color: black;
  width: 300px;
  height: 40px;
  font-size: 1.1rem;
  color: white;
  border: none;
`;
