import { FooterContainer, Copyright, SocialMedia } from "./styles";

import logo from "../../assets/logo-gamelab.png"
import logoInstagram from "../../assets/logoInstagram.svg";
import logoFacebook from "../../assets/logoFacebook.svg";
import logoYoutube from "../../assets/logoYoutube.svg";

export function Footer() {
  return (
    <FooterContainer>
      <Copyright>
        <div className="Logo">
          <img src={logo} alt="Logo Gamelab" />
        </div>
        <p>©2022 - Cesupa GameLab</p>
        <p>Todos os direitos reservados.</p>
        <p>
          <a
            href="https://www.ryanolivr.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Feito com ♡ por Ryan Oliveira
          </a>
        </p>
      </Copyright>
      <SocialMedia>
        <a
          href="https://www.instagram.com/cesupaonline/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logoInstagram} alt="Logo do Instagram" />
        </a>
        <a
          href="https://www.facebook.com/CesupaOnline"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logoFacebook} alt="Logo do Facebook" />
        </a>
        <a
          href="https://www.youtube.com/c/CesupaOnline"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logoYoutube} alt="Logo do Youtube" />
        </a>
      </SocialMedia>
    </FooterContainer>
  );
}
