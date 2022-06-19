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

  .card {
        height: 122px;
        width: 122px;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        border-radius: 100%;
        border: 2px solid var(--text-font);

        img {
        height: 100%;
        width: 100%;
        }
    }

    .card:hover .details {
        opacity: 70%;
        height: 100%;
    }

    .details {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
        opacity: 0;
        transition: 0.5s ease;
      
        img {
          height: 30px;
          width: 30px;
        }
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
  margin-bottom: 60px;
  overflow-x: scroll;
  overflow-y: hidden;

  background-color: transparent;

  border-radius: 5px;
  
  .container {
    display: flex;
    justify-content: flex-start;
    

    .tagP{
      margin-top: 5px;   
    }
  }
`;

