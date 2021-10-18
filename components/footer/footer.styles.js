import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  min-height: 30vh;
  background: linear-gradient(to bottom right, #04619f, #000);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media only screen and (max-width: 900px) {
    & * {
      transform: scale(0.9);
    }
  }
`;

export const LogoContainer = styled.div`
  margin-top: 4rem;

  & svg {
    border: none !important;
    margin-right: -3.5rem;
  }
`;

export const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 0;

  & li {
    padding: 1rem 2rem;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    border-radius: 1rem;
    color: white;

    &::selection {
      background-color: transparent;
    }

    &:hover {
      background-color: white;
      color: black;
    }

    @media only screen and (max-width: 900px) {
      padding: 1rem 1rem;
    }
  }
`;

export const ContactContainer = styled.div`
  h3 {
    text-align: center;
    color: gray;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 3rem;

  /* @media only screen and (max-width: 900px) {
    transform: scale(1.1);
  } */
`;

export const SocialIconContainer = styled.a`
  height: 4.5rem;
  width: 4.5rem;
  border: 2px solid #acacac;
  margin: 0 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 50%;
  transition: 0.5s;

  & svg {
    fill: gray;
    justify-self: center;
    transition: 0.5s;
    cursor: pointer;
    transform: scale(0.9);
  }

  @media only screen and (hover: none) {
    border-color: ${(props) => props.color};
    & svg {
      fill: ${(props) => props.color};
    }
  }

  &:hover {
    border-color: ${(props) => props.color};

    & svg {
      fill: ${(props) => props.color};
    }
  }
`;

export const Copyright = styled.div`
  margin-bottom: 3rem;
  color: gray;
  text-align: center;
`;
