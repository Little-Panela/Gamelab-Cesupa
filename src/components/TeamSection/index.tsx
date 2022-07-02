import { gql, useQuery } from "@apollo/client";
import { TeamContainer, MembersDiv, MembersContainer } from "./styles";
import { Element } from "react-scroll";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

import logoLinkedin from "../../assets/logoLinkedin.png";

const GET_USERS_QUERY = gql`
  query {
    members {
      linkedInURL
      name
      avatar {
        url
      }
    }
    teachers {
      bio
      linkedInURL
      name
      avatar {
        url
      }
    }
  }
`;

interface GetUsersResponse {
  members: {
    name: string;
    linkedInURL: string;
    avatar: {
      url: string;
    };
  }[];
  teachers: {
    name: string;
    bio: string;
    linkedInURL: string;
    avatar: {
      url: string;
    };
  }[];
}

export function Team(): JSX.Element {
  const { data } = useQuery<GetUsersResponse>(GET_USERS_QUERY);

  return (
    <>
      <Element name="Team"></Element>
      <TeamContainer>
        <h1>Nossa Equipe</h1>
        <h2>Coordenadores</h2>
        <Stack direction="row" spacing={5}>
          {!data && (
            <>
              <div>
                <Skeleton
                  sx={{ bgcolor: "white", opacity: 0.5 }}
                  variant="circular"
                  width={120}
                  height={120}
                />
                <Skeleton
                  variant="text"
                  sx={{ bgcolor: "white", opacity: 0.5 }}
                  width={122}
                  height={24}
                />
                <Skeleton
                  variant="text"
                  sx={{ bgcolor: "white", opacity: 0.5 }}
                  width={100}
                  height={24}
                />
              </div>
              <div>
                <Skeleton
                  sx={{ bgcolor: "white", opacity: 0.5 }}
                  variant="circular"
                  width={120}
                  height={120}
                />
                <Skeleton
                  variant="text"
                  sx={{ bgcolor: "white", opacity: 0.5 }}
                  width={122}
                  height={24}
                />
                <Skeleton
                  variant="text"
                  sx={{ bgcolor: "white", opacity: 0.5 }}
                  width={100}
                  height={24}
                />
              </div>
            </>
          )}
          {data?.teachers.map((teachers) => (
            <div>
              <div className="card">
                <img
                  src={teachers.avatar.url}
                  alt={teachers.name}
                  loading="lazy"
                />
                <div className="details">
                  <div>
                    <a href={teachers.linkedInURL} target="_blank">
                      <img src={logoLinkedin} alt="Logo Do LinkedIn" />
                    </a>
                  </div>
                </div>
              </div>
              <p>{teachers.name}</p>
              <p>{teachers.bio}</p>
            </div>
          ))}
        </Stack>
        <h2 className="Members">Membros</h2>
        <MembersDiv>
          <MembersContainer>
            <div className="container">
              <Stack direction="row" spacing={5}>
                {!data && (
                  <>
                    <div>
                      <Skeleton
                        sx={{ bgcolor: "white", opacity: 0.5 }}
                        variant="circular"
                        width={120}
                        height={120}
                      />
                      <Skeleton
                        variant="text"
                        sx={{ bgcolor: "white", opacity: 0.5 }}
                        width={122}
                        height={24}
                      />
                    </div>
                    <div>
                      <Skeleton
                        sx={{ bgcolor: "white", opacity: 0.5 }}
                        variant="circular"
                        width={120}
                        height={120}
                      />
                      <Skeleton
                        variant="text"
                        sx={{ bgcolor: "white", opacity: 0.5 }}
                        width={122}
                        height={24}
                      />
                    </div>
                    <div>
                      <Skeleton
                        sx={{ bgcolor: "white", opacity: 0.5 }}
                        variant="circular"
                        width={120}
                        height={120}
                      />
                      <Skeleton
                        variant="text"
                        sx={{ bgcolor: "white", opacity: 0.5 }}
                        width={122}
                        height={24}
                      />
                    </div>
                    <div>
                      <Skeleton
                        sx={{ bgcolor: "white", opacity: 0.5 }}
                        variant="circular"
                        width={120}
                        height={120}
                      />
                      <Skeleton
                        variant="text"
                        sx={{ bgcolor: "white", opacity: 0.5 }}
                        width={122}
                        height={24}
                      />
                    </div>
                    <div>
                      <Skeleton
                        sx={{ bgcolor: "white", opacity: 0.5 }}
                        variant="circular"
                        width={120}
                        height={120}
                      />
                      <Skeleton
                        variant="text"
                        sx={{ bgcolor: "white", opacity: 0.5 }}
                        width={122}
                        height={24}
                      />
                    </div>
                    <div>
                      <Skeleton
                        sx={{ bgcolor: "white", opacity: 0.5 }}
                        variant="circular"
                        width={120}
                        height={120}
                      />
                      <Skeleton
                        variant="text"
                        sx={{ bgcolor: "white", opacity: 0.5 }}
                        width={122}
                        height={24}
                      />
                    </div>
                    <div>
                      <Skeleton
                        sx={{ bgcolor: "white", opacity: 0.5 }}
                        variant="circular"
                        width={120}
                        height={120}
                      />
                      <Skeleton
                        variant="text"
                        sx={{ bgcolor: "white", opacity: 0.5 }}
                        width={122}
                        height={24}
                      />
                    </div>
                    <div>
                      <Skeleton
                        sx={{ bgcolor: "white", opacity: 0.5 }}
                        variant="circular"
                        width={120}
                        height={120}
                      />
                      <Skeleton
                        variant="text"
                        sx={{ bgcolor: "white", opacity: 0.5 }}
                        width={122}
                        height={24}
                      />
                    </div>
                  </>
                )}
                {data?.members.map((Members) => (
                  <div>
                    <div className="card">
                      <img
                        src={Members.avatar.url}
                        alt={Members.name}
                        loading="lazy"
                      />
                      <div className="details">
                        <div>
                          <a href={Members.linkedInURL} target="_blank">
                            <img src={logoLinkedin} alt="Logo Do LinkedIn" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="tagP">{Members.name}</p>
                  </div>
                ))}
              </Stack>
            </div>
          </MembersContainer>
        </MembersDiv>
      </TeamContainer>
    </>
  );
}
