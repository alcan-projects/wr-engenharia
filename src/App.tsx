import { Route, Routes } from "react-router-dom";
import { Projects } from "./components/projects";
import { StyledContainerApp } from "./global/styles";
import { Hero } from "./components/hero";

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
