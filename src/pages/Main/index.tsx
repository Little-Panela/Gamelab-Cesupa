import {
  Container,
  IntroductionContent,
  LeftHome,
  IntroductionContentContainer,
  Divider,
} from "./styles";

import { Navbar } from "../../components/Navbar";
import { About } from "../../components/AboutSection";
import { Team } from "../../components/TeamSection";
import { ProjectSection } from "../../components/Projects";
import { Contact } from "../../components/ContactSection";
import { Footer } from "../../components/Footer";

import gammingAnimate from "../../assets/gaming-animate.svg";

import { Link, Element } from "react-scroll";

export function Main() {
  return (
    <Container>
      <main>
        <Element name="Home"></Element>
        <Navbar />
        <IntroductionContent>
          <IntroductionContentContainer>
            <LeftHome>
              <Link to="Home" smooth={true}>
                <h1>
                  Game<span>Lab</span>
                </h1>
                <h2>Grupo de Desenvolvimento de Games do CESUPA.</h2>
              </Link>
              <div>
                <Link to="Projects" smooth={true}>
                  <button>Veja Nossos Projetos</button>
                </Link>
                <Link to="About" smooth={true}>
                  <a className="aTag">Saiba Mais</a>
                </Link>
              </div>
            </LeftHome>
            <img
              src={gammingAnimate}
              title="Computer illustrations by Storyset"
              alt="ilustração"
              loading="lazy"
            />
          </IntroductionContentContainer>
        </IntroductionContent>
        <Divider />
        <About />
        <Divider />
        <Team />
        <Divider />
        <ProjectSection />
        <Divider />
        <Contact />
        <Divider />
      </main>
      <Footer />
    </Container>
  );
}
