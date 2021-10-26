import styled, { css } from "styled-components";
export const NavigationContainer = styled.div``;

const GetOpenedStyle = css`
  background-color: transparent;

  &::before {
    top: 0;
    transform: rotate(135deg);
  }
  &::after {
    top: 0;
    transform: rotate(-135deg);
  }
`;

export const Icon = styled.span`
  position: relative;
  margin-top: 3.5rem;
  background-color: #333;

  &,
  &::before,
  &::after {
    width: 3rem;
    height: 2px;
    display: inline-block;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s;
    background-color: #333;
  }

  &::before {
    top: -0.8rem;
  }
  &::after {
    top: 0.8rem;
  }

  ${(props) => (props.toggle ? GetOpenedStyle : null)}

  @media only screen and (max-width: 28.75em) {
    margin-top: 3rem;
  }
`;

export const IconContainer = styled.label`
  background-color: white;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  position: fixed;
  top: 6rem;
  right: 6rem;
  z-index: 2000;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;

  @media only screen and (max-width: 56.25em) {
    top: 4rem;
    right: 4rem;
  }
  @media only screen and (max-width: 37.5em) {
    top: 3rem;
    right: 3rem;
  }

  @media only screen and (max-width: 28.75em) {
    width: 6rem;
    height: 6rem;
  }

  &:hover ${Icon}::before {
    top: ${(props) => (props.toggle ? "0" : "-1rem")};
  }
  &:hover ${Icon}::after {
    top: ${(props) => (props.toggle ? "0" : "1rem")};
  }
`;

export const Controller = styled.label`
  background-color: white;
  width: 20rem;
  height: 6rem;
  border-radius: 200px;
  position: fixed;
  top: 6.5rem;
  right: 14rem;
  z-index: 10;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;

  @media only screen and (max-width: 56.25em) {
    top: 4.5rem;
    right: 12rem;
  }
  @media only screen and (max-width: 37.5em) {
    width: ${(props) => (props.mode === "return" ? "7rem" : "15rem")};
    top: 3.5rem;
    right: 2.7rem;
    height: 7rem;
    top: 3rem;
    justify-content: flex-start;
    & p {
      display: none;
    }

    & svg {
      /* margin-left: 1.5rem; */
    }
  }

  @media only screen and (max-width: 28.75em) {
    width: ${(props) => (props.mode === "return" ? "6rem" : "13rem")};
    top: 3.5rem;
    right: 2.7rem;
    height: 6rem;
    top: 3rem;
    justify-content: ${(props) =>
      props.mode === "return" ? "center" : "flex-start;"};

    & svg {
      ${(props) => props.mode === "return" && "margin-left: 0"};
    }
  }

  & svg {
    width: 3.5rem;
    height: 3.5rem;
    transition: all 0.3s;
  }

  &:hover svg {
    transform: ${(props) =>
      props.mode === "return" ? "translateX(-3px)" : "translateX(3px)"};
  }
`;

export const BackgroundContainer = styled.div`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background-image: radial-gradient(
    rgba(24, 123, 205, 1),
    rgba(3, 37, 76, 1) 70%
  );
  z-index: 1000;
  transition: all 0.8s cubic-bezier(0.83, 0, 0.17, 1);
  backface-visibility: none;

  ${(props) => (props.toggle ? "transform: scale(80);" : null)};

  @media only screen and (max-width: 56.25em) {
    top: 4.5rem;
    right: 4.5rem;
  }
  @media only screen and (max-width: 37.5em) {
    top: 3.5rem;
    right: 3.5rem;
  }

  @media only screen and (max-width: 28.75em) {
    width: 5rem;
    height: 5rem;
  }
`;

export const NavContainer = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1500;
  opacity: 0;
  visibility: hidden;
  width: 0;
  transition: all 0.8s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  backface-visibility: none;

  ${(props) =>
    props.toggle ? "opacity: 1; visibility: visible; width: 100%;" : null};

  @media only screen and (max-width: 600px) {
    transform: scale(0.7);
  }
`;

export const NavList = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
  width: 100%;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  backface-visibility: none;
`;

export const Item = styled.li`
  margin: 1rem;
  min-width: 29rem;
  backface-visibility: none;

  @media only screen and (hover: none) {
    border-bottom: 2px solid white;
    border-radius: 5rem;
  }
`;

export const Link = styled.span`
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  padding: 1rem 2rem;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  background-image: linear-gradient(
    135deg,
    transparent 0%,
    transparent 50%,
    white 50%
  );
  background-size: 260%;
  transition: all 0.4s;
  border-radius: 1rem;
  cursor: pointer;

  span {
    margin-right: 1.5rem;
    display: inline-block;
  }

  &:hover,
  &:active {
    background-position: right;
    color: rgba(24, 123, 205, 1);
    transform: translateX(1rem);
  }
`;
