import React from "react";
import { AboutContent, AboutLeft, AboutRight } from "./styles";
import { Element } from "react-scroll";

import equipe_gamelab from "../../assets/equipe_gamelab.svg"
import aula_gamelab from "../../assets/aula_gamelab.svg"

export function About() {
  return (
    <AboutContent>
      <Element name="about"></Element>
      <img src="" alt="" />
      <h1>Sobre Nós</h1>
      <div>
      <AboutLeft>
          {/* Organizar as fotos  */}
          <img src={equipe_gamelab} alt="Foto dos Ganhadores" />
          <img
            src={aula_gamelab}
            alt="Foto dos Ganhadores"
            className="secondPhoto"
          />
        </AboutLeft>
        <AboutRight>

          <p>
          Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat, nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend dolor. Nullam eget dui at sem ullamcorper luctus.
            <br />
            <br />
            Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat, nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend dolor. Nullam eget dui at sem ullamcorper luctus.
            Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat, nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend dolor. Nullam eget dui at sem ullamcorper luctus.
          </p>
        </AboutRight>
      </div>
      <img src="" alt="" />
      <Element name=""></Element>
    </AboutContent>
  );
}

