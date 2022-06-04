import { Container, ProjectsContainer } from "./styles";
import { Card, CardContent } from "@mui/material";

export function ProjectSection() {
  return (
    <Container>
      <h1>Lista de Jogos</h1>

      <ProjectsContainer>
        <div className="container">
          <div className="card">
            <iframe
              src="https://itch.io/embed/1540590"
              width="100%"
              height="100%"
              frameBorder="0"
            >
              <a href="https://cesupagamelab.itch.io/blitroidz">
                BlitzRoids by Cesupa GameLab
              </a>
            </iframe>
          </div>
          <div className="card">
            <iframe
              src="https://itch.io/embed/1540739"
              width="100%"
              height="100%"
              frameBorder="0"
            >
              <a href="https://cesupagamelab.itch.io/barrelroll">
                Barrel Roll by Cesupa GameLab
              </a>
            </iframe>
          </div>
          <div className="card">
            <iframe
              src="https://itch.io/embed/1525704"
              width="100%"
              height="100%"
              frameBorder="0"
            >
              <a href="https://cesupagamelab.itch.io/office-boy">
                Office Boy by Cesupa GameLab
              </a>
            </iframe>
          </div>
          <div className="card">
            <iframe
              src="https://itch.io/embed/1505014"
              width="100%"
              height="100%"
              frameBorder="0"
            >
              <a href="https://cesupagamelab.itch.io/psicopato-a-origem">
                Psicopato: A origem by Cesupa GameLab
              </a>
            </iframe>
          </div>
        </div>
      </ProjectsContainer>
    </Container>
  );
}
