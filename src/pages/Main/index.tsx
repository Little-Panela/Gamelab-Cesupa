import {
  Container,
  IntroductionContent,
  LeftHome,
  IntroductionContentContainer,
  Divider,
} from "./styles";

import { Navbar } from '../../components/Navbar'
import { About } from "../../components/AboutSection";
import { Footer } from "../../components/Footer";

import gammingAnimate from "../../assets/gaming-animate.svg"

import { Link } from "react-scroll";

export interface Project {
  _id: string;
  image: string;
  title: string;
  description: string;
  participants: string;
  github: string;
  trello: string;
  video: string;
}

export function Main() {
  return (
    <Container>
      <main>
        <Navbar />
        <IntroductionContent>
          <IntroductionContentContainer>
            <LeftHome>
            <Link to="home" smooth={true}>
              <h1>Game<span>Lab</span></h1>
              <h2>Grupo de Desenvolvimento de Games do CESUPA.</h2>
              </Link>
              <div>
                <Link to="" smooth={true}>
                  <button>Ver Projetos</button>
                </Link>
                <Link to="about" smooth={true}>
                  <a href="#">Saiba Mais</a>
                </Link>
              </div>
            </LeftHome>
            <img src={gammingAnimate} title="Computer illustrations by Storyset" alt="ilustração" />
          </IntroductionContentContainer>
        </IntroductionContent>
        < Divider/>
        <About />
        < Divider/>
      </main>
      <Footer />
    </Container>
  );
}
