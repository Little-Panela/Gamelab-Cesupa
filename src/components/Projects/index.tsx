import { Container, ProjectsContainer } from "./styles";
import { Element } from "react-scroll";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";

const GET_GAMES_QUERY = gql`
  query {
    games {
      iframeURL
      name
    }
  }
`;

interface GetGamesQueryResponse {
  games: {
    iframeURL: string;
    name: string;
  }[];
}

export function ProjectSection(): JSX.Element {
  const { data } = useQuery<GetGamesQueryResponse>(GET_GAMES_QUERY);
  const [projects, setProjects] = useState();
  const [filter, setFilter] = useState<string>("");

  //    const filtered_projects = data?.games.filter(
  //       toLowerCase().includes(filterParam.toLowerCase())
  //   );
  //   setProjects((state) => (state = filtered_projects));
  // };

  return (
    <>
      <Element name="Projects"></Element>
      <Container>
        <h1>Lista de Jogos</h1>
        <ProjectsContainer>
          <div className="container">
            {!data && (
              <>
                <Skeleton
                  sx={{ bgcolor: "white", opacity: 0.5 }}
                  variant="rectangular"
                  width={544}
                  height={154}
                />
                <Skeleton
                  sx={{ bgcolor: "white", opacity: 0.5 }}
                  variant="rectangular"
                  width={544}
                  height={154}
                />
                <Skeleton
                  sx={{ bgcolor: "white", opacity: 0.5 }}
                  variant="rectangular"
                  width={544}
                  height={154}
                />
                <Skeleton
                  sx={{ bgcolor: "white", opacity: 0.5 }}
                  variant="rectangular"
                  width={544}
                  height={154}
                />
                <Skeleton
                  sx={{ bgcolor: "white", opacity: 0.5 }}
                  variant="rectangular"
                  width={544}
                  height={154}
                />
              </>
            )}

            {data?.games.map((Project) => (
              <div className="card">
                <iframe
                  src={Project.iframeURL}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                ></iframe>
              </div>
            ))}
          </div>
        </ProjectsContainer>
      </Container>
    </>
  );
}
