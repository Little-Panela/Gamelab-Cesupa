import styled from "styled-components";

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background-color: var(--background);

  text-align: center;
  align-items: center;

  img {
    margin: 0.5rem 0 0.75rem 0;
  }

  img:nth-child(4) {
    margin-top: 55px;
  }
  
  div {
    display: flex;
    flex-wrap: wrap;
   
    margin-top: 21px;

    gap: 59px;
  }

  @media only screen and (max-width: 1200px) {
    div {
      justify-content: center;
    }
  }
`;

export const AboutRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem 3rem 2rem;

  h1 {
    font-weight: 700;
    font-size: 36px;
    color: var(--title-font);
  }

  p {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
    margin: 0 2rem 3rem 2rem;

    max-width: 36.5rem;

    color: var(--title-font);
  }
`;

export const AboutLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;


  img {
    min-width: 100%;
    max-width: 100%;
  }

  .secondPhoto {
    position: relative;
    left: 5rem;
    bottom: 8rem;

    @media only screen and (max-width: 1120px) {
      left: 0;
      bottom: 0;
      margin-bottom: 2rem;
    }
  }
`;
