import styled, { css } from "styled-components";

const GetFormStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 5rem;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  transition: 0.4s 0.7s ease-in-out;

  @media only screen and (max-width: 460px) {
    padding: 0;
  }
`;
const GetButtonStyles = css`
  width: 15rem;
  height: 4.9rem;
  border: none;
  outline: none;
  border-radius: 4.9rem;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  margin: 1.6rem 0;
  transition: 0.5s;
`;

export const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  overflow: hidden;

  @media only screen and (max-width: 870px) {
    min-height: 80rem;
    height: 100vh;
  }

  &:before {
    content: "";
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;
    background: linear-gradient(-45deg, rgba(24, 123, 205), rgba(3, 37, 76));
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    z-index: 6;
    transition: 1.8s ease-in-out;
    ${(prpops) =>
      prpops.mode === "signup"
        ? "transform: translate(100%,-50%); right: 52%;"
        : null};

    @media only screen and (max-width: 870px) {
      width: 1500px;
      height: 1500px;
      left: 30%;
      bottom: 68%;
      transform: translateX(-50%);
      right: initial;
      top: initial;
      transition: 2s ease-in-out;
      ${(prpops) =>
        prpops.mode === "signup"
          ? "transform: translate(-50%,100%); bottom: 32%; right: initial;"
          : null};

      @media only screen and (max-width: 870px) {
        ${(prpops) =>
          prpops.mode === "signup"
            ? "transform: translate(-50%,100%); bottom: 25%; right: initial;"
            : null};
      }
      @media only screen and (max-width: 500px) {
        ${(prpops) =>
          prpops.mode === "signup"
            ? "transform: translate(-50%,100%); bottom: 30%; right: initial;"
            : null};
      }
    }
  }
`;
export const FormsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 5;
`;
export const SignInSignUp = styled.div`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.mode === "signup" ? "25%" : "75%")};
  transform: translate(-50%, -50%);
  width: 50%;
  display: grid;
  grid-template-columns: 1fr;
  transition: 1s 0.7s ease-in-out;

  @media only screen and (max-width: 870px) {
    width: 100%;
    left: 50%;
    top: 95%;
    transform: translate(-50%, -100%);
    transition: 1s 0.8s ease-in-out;
    ${(props) =>
      props.mode === "signup"
        ? "top: 5%; transform: translate(-50%,0);"
        : null};
  }

  @media only screen and (max-width: 500px) {
    ${(props) =>
      props.mode === "signup"
        ? "top: 0%; transform: translate(-50%,0);"
        : null};
  }
`;
export const SignInForm = styled.form`
  ${GetFormStyles};
  z-index: ${(props) => (props.mode === "signup" ? 1 : 2)};
  opacity: ${(props) => (props.mode === "signup" ? 0 : 1)};

  @media only screen and (max-width: 500px) {
    transform: scale(0.85);
  }
`;
export const TitleContainer = styled.h2`
  font-size: 3.5rem;
  color: #444;
  margin-bottom: 1.6rem;
`;

export const InputContainer = styled.div`
  max-width: 38rem;
  width: 100%;
  height: 5.5rem;
  background-color: #f0f0f0;
  margin: 1rem 0;
  border-radius: 5.5rem;
  display: grid;
  grid-template-columns: 85% 15%;
  padding: 0 0.4rem;
  align-items: center;

  & svg {
    width: 35px;
    height: 35px;
    transform: scale(0.8);
    fill: #acacac;
    justify-self: center;
    border-left: 1px solid #acacac;
    padding-left: 0.3rem;
  }
`;

export const InputField = styled.input`
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.8rem;
  color: #333;
  font-family: inherit;
  text-align: right;

  &::placeholder {
    color: #aaa;
    font-weight: 500;
  }
`;

export const SubmitButton = styled.input`
  ${GetButtonStyles};
  background-color: rgba(24, 123, 205);
  color: #fff;
  font-family: inherit;

  &:hover {
    background-color: rgba(3, 37, 76);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
  &:active,
  &:focus {
    outline: none;
    transform: translateY(2px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;
export const SocialTextContainer = styled.p`
  padding: 1.4rem 0;
  font-size: 1.6rem;
`;
export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const SocialIconContainer = styled.a`
  height: 5.5rem;
  width: 5.5rem;
  border: 2px solid #acacac;
  margin: 0 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 1.8rem;
  border-radius: 50%;
  transition: 0.5s;

  & svg {
    fill: gray;
    justify-self: center;
    transition: 0.5s;
    cursor: pointer;
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

export const SignUpForm = styled.form`
  ${GetFormStyles};
  z-index: ${(props) => (props.mode === "signup" ? 2 : 1)};
  opacity: ${(props) => (props.mode === "signup" ? 1 : 0)};

  @media only screen and (max-width: 500px) {
    transform: scale(0.85);
  }
`;

export const GetPannelStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 7;

  @media only screen and (max-width: 870px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 4rem 8%;
  }
`;

export const PannelsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 870px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }
`;

export const ContentContainer = styled.div`
  color: white;
  transition: 0.9s 0.6s ease-in-out;

  & h3 {
    font-weight: 600;
    line-height: 1;
    font-size: 3rem;

    @media only screen and (max-width: 870px) {
      font-size: 2rem;
    }
  }

  & p {
    font-size: 2.2rem;
    padding: 1.8rem 0;
    @media only screen and (max-width: 870px) {
      font-size: 1.2rem;
      padding: 0.7rem 0;
    }
  }

  & button {
    ${GetButtonStyles};
    margin: 0;
    background: none;
    border: 2px solid #fff;
    color: white;
    font-family: inherit;

    &:hover {
      background-color: #fff;
      color: #333;
    }

    @media only screen and (max-width: 870px) {
      width: 11rem;
      height: 3.5rem;
      font-size: 1.2rem;
    }
  }

  @media only screen and (max-width: 870px) {
    padding-right: 15%;
    transition: 0.9s 0.8s ease-in-out;
  }
  @media only screen and (max-width: 600px) {
    padding-right: 1%;
  }
`;
export const ImageContainer = styled.img`
  width: 100%;
  transition: 1.1s 0.4s ease-in-out;

  @media only screen and (max-width: 870px) {
    width: 20rem;
    transition: 0.9s 0.6s ease-in-out;
  }

  @media only screen and (max-width: 500px) {
    width: 14rem;
  }
`;

export const LeftPannelsContainer = styled.div`
  ${GetPannelStyles};
  padding: 3rem 17% 2rem 12%;
  pointer-events: all;
  ${(props) => (props.mode === "signup" ? "pointer-events: none" : null)};

  & ${ContentContainer}, & ${ImageContainer} {
    ${(props) =>
      props.mode === "signup" ? "transform: translateX(-800px)" : null};
  }

  @media only screen and (max-width: 870px) {
    grid-row: 1 / 2;

    & ${ContentContainer}, & ${ImageContainer} {
      ${(props) =>
        props.mode === "signup" ? "transform: translateY(-300px)" : null};
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 1rem;
  }
`;

export const RightPannelsContainer = styled.div`
  ${GetPannelStyles};
  padding: 3rem 12% 2rem 17%;
  pointer-events: none;
  ${(props) => (props.mode === "signup" ? "pointer-events: all" : null)};

  & ${ContentContainer}, & ${ImageContainer} {
    transform: translateX(800px);
    ${(props) =>
      props.mode === "signup" ? "transform: translateX(0px)" : null};
  }
  @media only screen and (max-width: 870px) {
    grid-row: 3 / 4;
  }

  @media only screen and (max-width: 600px) {
    padding: 1rem;
  }
`;
