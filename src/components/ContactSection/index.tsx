import { ContactContainer, ContactLeft, ContactRight } from "./styles";

import mailImg from "../../assets/mail.svg"
import phoneImg from "../../assets/phone.svg"

export function Contact() {
  return (
    <ContactContainer>
      <ContactLeft>
        <h1>
          Entre em contato <br />
          com a gente!
        </h1>
        <div>
          <p><img src={mailImg }/> <a href="mailto:GameLab@cesupa.br">GameLab@cesupa.br</a></p>
          <p><img src={phoneImg} /><a href="tel:+559198819-0430">(91) 98819-0430</a></p>
        </div>
      </ContactLeft>
      <ContactRight>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5403957528665!2d-48.47966028457603!3d-1.4501912362375995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48c26da0bbc99%3A0x3e7fb16332282dbd!2sCesupa%20-%20Campus%20Alcindo%20Cacela%20I%20(Argo)!5e0!3m2!1spt-BR!2sbr!4v1654300133684!5m2!1spt-BR!2sbr"
        ></iframe>
      </ContactRight>
    </ContactContainer>
  );
}
