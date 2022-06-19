import { TeamContainer, MembersDiv, MembersContainer } from "./styles";
import { Element } from "react-scroll";
import Stack from "@mui/material/Stack";

import logoLinkedin from "../../assets/logoLinkedin.png";

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
              <div className="card">
                <img src={Coordinators.profile} alt={Coordinators.name} loading="lazy"/>
                <div className="details">
                  <div>
                    <a href={Coordinators.LinkedIn} target="_blank">
                      <img src={logoLinkedin} alt="Logo Do LinkedIn" />
                    </a>
                  </div>
                </div>
              </div>
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
                    <div className="card">
                      <img src={Members.profile} alt={Members.name} loading="lazy"/>
                      <div className="details">
                        <div>
                          <a href={Members.LinkedIn} target="_blank">
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
