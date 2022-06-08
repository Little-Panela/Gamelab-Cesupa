import { TeamContainer, MembersDiv, MembersContainer } from "./styles";
import { Element } from "react-scroll";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import db from "../../../lib/db.json";

export function Team(): JSX.Element {
  return (
    <>
      <Element name="Team"></Element>
      <TeamContainer>
        <h1>Nossa Equipe</h1>
        <h2>Coordenadores</h2>
        <Stack direction="row" spacing={5}>
          {db.Coordinators.map((Coordinators) => (
            <div>
              <Avatar
                alt={Coordinators.name}
                src={Coordinators.profile}
                sx={{ width: 122, height: 122 }}
              />
              <p>{Coordinators.name}</p>
              <p>Professor</p>
            </div>
          ))}
        </Stack>
        <h2 className="Members">Membros</h2>
        <MembersDiv>
          <MembersContainer>
            <div className="container">
              <Stack direction="row" spacing={5}>
                {db.Members.map((Members) => (
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
          </MembersContainer>
        </MembersDiv>
      </TeamContainer>
    </>
  );
}
