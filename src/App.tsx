import { Route, Routes } from "react-router-dom";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { StyledContainerApp } from "./global/styles";

function App() {
  return (
    <StyledContainerApp>
      <Hero />
      <Routes>
        <Route path="/" element={<Projects />} />
      </Routes>
    </StyledContainerApp>
  );
}

export default App;
