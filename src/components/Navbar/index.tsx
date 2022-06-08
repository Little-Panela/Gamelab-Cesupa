import { useState } from "react";
import { NavbarContainer, Hamburger, Menu, Close } from "./styles";

import { Link } from "react-scroll";

import logo from "../../assets/logo-gamelab.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function changeNavBarState() {
    setIsOpen((curr) => !curr);
  }

  function closeNavBar() {
    setIsOpen(false);
  }

  return (
    <NavbarContainer>
      <Link to="home" smooth={true} onClick={closeNavBar}>
        <img src={logo} alt="logo_gamelab" />
      </Link>

      <Hamburger isOpen={isOpen} onClick={changeNavBarState}>
        <span />
        <span />
        <span />
      </Hamburger>

      <Close isOpen={isOpen} onClick={changeNavBarState}>
        x
      </Close>

      <Menu isOpen={isOpen}>
        <Link to="Home" smooth={true} onClick={closeNavBar}>
          Início
          <span />
        </Link>
        <Link to="About" smooth={true} onClick={closeNavBar}>
          Sobre
          <span />
        </Link>
        <Link to="Team" smooth={true} onClick={closeNavBar}>
          Equipe
          <span />
        </Link>
        <Link to="Contact" smooth={true} onClick={closeNavBar}>
          Contato
          <span />
        </Link>
      </Menu>
    </NavbarContainer>
  );
}
