import { ContainerProjectStyled, StyledProjects } from "./styled";
import { useState } from "react";
import { MockedProjects } from "./projects";

type projectType = {
  nome: string;
  foto: string;
  descricao: string;
};

export function Projects() {
  const [projects] = useState<projectType[]>(MockedProjects);
  const [indice, setIndice] = useState(0);

  function nextProject(index: number): void {
    if (index > projects.length) {
      setIndice(0);
      return;
    }
    setIndice(index);
  }

  return (
    <StyledProjects>
      <ContainerProjectStyled>
        <h2>{projects[indice].nome}</h2>
        <img src={projects[indice].foto} />
        <p>{projects[indice].descricao}</p>
      </ContainerProjectStyled>

      <button onClick={() => nextProject(indice + 1)}>proximo</button>
    </StyledProjects>
  );
}
