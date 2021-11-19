import styled from "styled-components";

export const Container = styled.div`
  width: 40rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 30%);
  padding: 2rem;
  text-align: center;

  @media only screen and (max-width: 22em) {
    width: 100%;
  }
  & h4 {
    color: #555;
  }

  & p {
    transform: translateY(-2rem);
    margin-bottom: 0;
    font-size: 1.3rem;
    color: red;
    text-align: right;
  }
`;

export const RatingRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ReviewRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 2rem;

  & > h4 {
    margin-bottom: 1rem;
  }

  & textarea {
    width: 100%;
    height: 20rem;
    /* border: 1px solid #ccc; */
    border: ${(props) => `1px solid ${props.iconColor}`};
    border-radius: 5px;
    max-width: 100%;
    min-width: 100%;
    max-height: 20rem;
    min-height: 20rem;
    text-align: right;
    direction: rtl;
    font-family: inherit;
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: white;
      border-radius: 8px;
    }

    &::-webkit-scrollbar {
      width: 4px;
      background-color: white;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      /* background: linear-gradient(45deg, #021b79, #0575e6, #205e9b); */
      background-color: ${(props) => props.iconColor};
    }
  }
`;
