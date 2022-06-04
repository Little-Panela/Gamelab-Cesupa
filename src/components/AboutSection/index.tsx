import React from "react";
import { AboutContent, AboutLeft, AboutRight } from "./styles";
import { Element } from "react-scroll";

import equipe_gamelab from "../../assets/equipe_gamelab.svg";
import aula_gamelab from "../../assets/aula_gamelab.svg";

export function About() {
  return (
    <>
      <Element name="About"></Element>
      <AboutContent>
        <div>
          <AboutLeft>
            <h1>Sobre Nós</h1>
            <p>
              O Cesupa GameLab é um grupo de estudo e pesquisa que possibilita o
              aluno vivenciar e praticar técnicas de programação de
              computadores, lógica de programação e algoritmos computacionais em
              projetos reais.
              <br />
              <br />O nosso objetivo é desenvolver atividades de ensino,
              extensão, iniciação científica e pesquisa no âmbito da área de
              Desenvolvimento de Jogos Digitais e soluções gameficadas.
            </p>
          </AboutLeft>
          <AboutRight>
            <img src={equipe_gamelab} alt="Equipe Gamelab" />
            <img
              src={aula_gamelab}
              alt="Foto dos Ganhadores"
              className="secondPhoto"
            />
          </AboutRight>
        </div>
      </AboutContent>
    </>
  );
}
