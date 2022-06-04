import { Container, ProjectsContainer } from "./styles";
import { Element } from "react-scroll";

const Project = [
  {
    iframeLink: "https://itch.io/embed/1540590",
    aLink: "https://cesupagamelab.itch.io/blitroidz",
    subtitle: "BlitzRoids by Cesupa GameLab",
  },
  {
    iframeLink: "https://itch.io/embed/1540739",
    aLink: "https://cesupagamelab.itch.io/barrelroll",
    subtitle: "Barrel Roll by Cesupa GameLab",
  },
  {
    iframeLink: "https://itch.io/embed/1525704",
    aLink: "https://cesupagamelab.itch.io/office-boy",
    subtitle: "Office Boy by Cesupa GameLab",
  },
  {
    iframeLink: "https://itch.io/embed/1505014",
    aLink: "https://cesupagamelab.itch.io/psicopato-a-origem",
    subtitle: "Psicopato: A origem by Cesupa GameLab",
  },
];

export function ProjectSection(): JSX.Element {
  return (
    <>
      <Element name="Projects"></Element>
      <Container>
        <h1>Lista de Jogos</h1>
        <ProjectsContainer>
          <div className="container">
            {Project.map((Project) => (
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
