import { Container, ProjectsContainer } from "./styles";
import { Element } from "react-scroll";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import DefaultProfile from "../../assets/defaultProfile.jpg";

const Members = [
  {
    name: "Default",
    profile: DefaultProfile,
  },
  {
    name: "Default",
    profile: DefaultProfile,
  },
  {
    name: "Default",
    profile: DefaultProfile,
  },
  {
    name: "Default",
    profile: DefaultProfile,
  },
  {
    name: "Default",
    profile: DefaultProfile,
  },
  {
    name: "Default",
    profile: DefaultProfile,
  },
  {
    name: "Default",
    profile: DefaultProfile,
  },
  {
    name: "Default",
    profile: DefaultProfile,
  },
  {
    name: "Default",
    profile: DefaultProfile,
  },
  {
    name: "Default",
    profile: DefaultProfile,
  },
  {
    name: "Default",
    profile: DefaultProfile,
  },
  {
    name: "Default",
    profile: DefaultProfile,
  },
  {
    name: "Default",
    profile: DefaultProfile,
  },
];

export function ProjectSection(): JSX.Element {
  return (
    <>
      <Element name="Projects"></Element>
      <Container>
        <ProjectsContainer>
          <div className="container">
          <Stack direction="row" spacing={5}>
            {Members.map((Members) => (
              <div>
                <Avatar
                  alt={Members.name}
                  src={Members.profile}
                  sx={{ width: 122, height: 122 }}
                />
                <p>{Members.name}</p>
              </div>
            ))}
            </Stack>
          </div>
        </ProjectsContainer>
      </Container>
    </>
  );
}
