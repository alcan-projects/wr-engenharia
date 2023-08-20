import { DefaultButton } from "../default-button";
import { SideBarContainer } from "./style";
import { useState } from "react";

export function Sidebar() {
  const [sideOn, setSideOn] = useState(true);
  return (
    <SideBarContainer side={sideOn}>
      <DefaultButton onClick={() => setSideOn(!sideOn)}>teste</DefaultButton>
      <h1>lau</h1>
    </SideBarContainer>
  );
}
