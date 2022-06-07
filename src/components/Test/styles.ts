import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

export const ProjectsContainer = styled.div`
  width: 80vw;
  min-height: 20vh;
  max-height: 70vh;

  overflow-x: scroll;
  overflow-y: hidden;

  background-color: transparent;

  border-radius: 5px;

  .container {
    display: flex;
    justify-content: flex-start;
  }
  scrollbar-width: thin;          /* "auto" or "thin" */
  scrollbar-color: var(--text-font) var(--button);
  webkit-scrollbar {
        width: 0.25rem;
    }

`;
