import styled from "styled-components";

type SideType = {
  side: boolean;
};

export const SideBarContainer = styled.div<SideType>`
  width: ${(props) => (props.side ? "20px" : "200px")};
  background-color: #101c34;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
`;
