import styled from "styled-components";

export const Container = styled.div`
  width: 40rem;
  min-width: 40rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  direction: rtl;
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 30%);
  border-radius: 10px;
  margin: 0 2rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    display: flex;
    flex-direction: column;

    & > h4 {
      margin: 0;
      font-size: 1.4rem;
    }
    & > p {
      margin: 0;
      font-size: 1.2rem;
      color: #333;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
