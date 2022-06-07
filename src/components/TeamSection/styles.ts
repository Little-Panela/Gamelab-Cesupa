import styled from "styled-components";

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  background: var(--background);

  h1 {
    margin-top: 60px;
    margin-bottom: 17px;
  }

  h2 {
    margin-bottom: 42px;
  }

  .Members {
    margin-top: 70px;
  }

  p {
    text-align: center;
  }
`

export const MembersDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

export const MembersContainer = styled.div`
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
`;

