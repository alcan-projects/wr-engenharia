import {
  ButtonStyleds,
  ContainerProjectStyled,
  ContainerSlideButtons,
  StyledProjects,
} from "./styled";
import { useState } from "react";
import { MockedProjects } from "./projects";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

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
          <img src={projects[indice].foto} />
        </div>
      </ContainerProjectStyled>

      <ContainerSlideButtons>
        {indice > 0 ? (
          <ButtonStyleds onClick={() => prevProject(indice - 1)}>
            <FaArrowUp />
          </ButtonStyleds>
        ) : (
          ""
        )}
        {indice >= 0 && indice < projects.length - 1 ? (
          <ButtonStyleds onClick={() => nextProject(indice + 1)}>
            <FaArrowDown />
          </ButtonStyleds>
        ) : (
          ""
        )}
      </ContainerSlideButtons>
    </StyledProjects>
  );
}
