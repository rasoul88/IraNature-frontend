import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  overflow: hidden;

  & * {
    @media only screen and (max-width: 600px) {
      transform: scale(0.95);
    }
  }
`;

export const FormContainer = styled.div`
  width: 48rem;
  padding: 5rem 8rem;
  background-color: white;
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 30%);
  border-radius: 1rem;

  @media only screen and (max-width: 600px) {
    width: 38rem;
    padding: 5rem 3rem;
  }
  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
