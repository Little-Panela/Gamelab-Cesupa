import styled from "styled-components";

export const ContactContainer = styled.div`
  background: var(--background);

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  min-height: 735px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const ContactLeft = styled.div`
  display: flex;
  flex-direction: column;

  gap: 40px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;

    p {
      display: flex;
      gap: 12px;
       a {
        font-family: 'Poppins', sans-serif;
        color: var(--text-secondary);
        font-weight: 400;
        text-decoration: none;
    }
    }
    @media (max-width: 768px) {
      align-items: center;
    }
  }
  @media (max-width: 768px) {
    margin-top: 21px;
  }
`;

export const ContactRight = styled.div`
  iframe {
    width: 600px;
    height: 450px;
    @media (max-width: 600px) {
      & {
        width: 400px;
      }
    }

    @media (max-width: 400px) {
      & {
        width: 320px;
      }
    }
  }
`;
