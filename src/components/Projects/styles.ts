import styled from "styled-components";

export const Container = styled.div`
  padding-top: 2.5rem;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--background);

  h1 {
    font-size: 2.2rem;
  }
`;

export const ProjectsContainer = styled.div`
  min-width: 90%;
  max-width: calc(100% - 5rem);
  height: 80vh;
  margin-top: 3rem;

  overflow-y: auto;

  background-color: var(--button);

  border-radius: 5px;

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 1.5rem;
    gap: 0.5rem;

    @media only screen and (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 550px) {
      grid-template-columns: 1fr;
    }

    .card {
      display: block;
      overflow: hidden;
      border-radius: 10px;

      @media (max-width: 800px) {
        & {
          width: 100%;
        }
      }
    }
  }
`;
