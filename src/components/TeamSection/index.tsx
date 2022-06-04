import { TeamContainer } from "./styles";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import DefaultProfile from "../../assets/defaultProfile.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const Coordinators = [
  {
    name: "Pedro Girotto",
    profile: DefaultProfile,
  },
  {
    name: "Ricardo Casseb",
    profile: DefaultProfile,
  },
];

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
];

const items = [
<>
{Coordinators.map((Coordinators) => (
 
    <Avatar
      alt={Coordinators.name}
      src={Coordinators.profile}
      sx={{ width: 122, height: 122 }}
    />

))}
</>  
];

export function Team(): JSX.Element {
  return (
    <TeamContainer>
      <h1>Nossa Equipe</h1>
      <h2>Coordenadores</h2>
      <Stack direction="row" spacing={5}>
        {Coordinators.map((Coordinators) => (
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
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        
      />
    </TeamContainer>
  );
}

{
  /* <Stack spacing={5}>
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

<Slider>
{Members.map((Members) => (
<div>
<Avatar
alt={Members.name}
src={Members.profile}
sx={{ width: 122, height: 122 }}
/>
<p>{Members.name}</p>
</div>
) )}
</Slider> */
}
