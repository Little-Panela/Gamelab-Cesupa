import { Container, ProjectsContainer } from "./styles";
import { Element } from "react-scroll";

import db from "../../../lib/db.json"

export function ProjectSection(): JSX.Element {
  return (
    <>
      <Element name="Projects"></Element>
      <Container>
        <h1>Lista de Jogos</h1>
        <ProjectsContainer>
          <div className="container">
            {db.Project.map((Project) => (
              <div className="card">
                <iframe
                  src={Project.iframeLink}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                >
                  <a href={Project.aLink}>{Project.subtitle}</a>
                </iframe>
              </div>
            ))}
          </div>
        </ProjectsContainer>
      </Container>
    </>
  );
}
