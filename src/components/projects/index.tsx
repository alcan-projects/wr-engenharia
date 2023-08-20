import {
  ButtonStyleds,
  ContainerProjectStyled,
  ContainerSlideButtons,
  DescriptionContainerStyled,
  StyledProjects,
} from "./styled";
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

  function prevProject(index: number): void {
    if (index > projects.length) {
      setIndice(0);
      return;
    }
    setIndice(index);
  }

  return (
    <StyledProjects>
      <ContainerProjectStyled>
        <div className="project__container">
          <h2>{projects[indice].nome}</h2>
          <img src={projects[indice].foto} />
        </div>
        <DescriptionContainerStyled>
          <p>{projects[indice].descricao}</p>
        </DescriptionContainerStyled>
      </ContainerProjectStyled>

      <ContainerSlideButtons>
        {indice > 0 ? (
          <ButtonStyleds onClick={() => prevProject(indice - 1)}>
            anterior
          </ButtonStyleds>
        ) : (
          ""
        )}
        {indice >= 0 && indice < projects.length - 1 ? (
          <ButtonStyleds onClick={() => nextProject(indice + 1)}>
            Proximo
          </ButtonStyleds>
        ) : (
          ""
        )}
      </ContainerSlideButtons>
    </StyledProjects>
  );
}
