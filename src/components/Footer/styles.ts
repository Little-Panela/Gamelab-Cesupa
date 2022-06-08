import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 122px 0 108px;
  font-family: "Roboto", sans-serif;

  min-height: 268px;
  max-height: 100%;

  background: var(--button);

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;
  }
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;

  p {
    font-size: 0.8rem;
    color: var(--text-secondary);
    text-align: left;
    a {
      text-decoration: none;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: all 0.2s ease-in;
      span {
        width: 0;
        height: 2px;
        background-color: red;
        transition: width 0.2s;
      }

      &:hover span {
        width: 100%;
      }
    }
    @media (max-width: 768px) {
      text-align: center;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    color: var(--text-secondary);
    font-weight: 500;
    font-size: 2rem;
    img {
      height: 3.4rem;
      margin-bottom: 0.5rem;
    }

    @media (max-width: 768px) {
      p {
        text-align: center;
      }
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
`;
