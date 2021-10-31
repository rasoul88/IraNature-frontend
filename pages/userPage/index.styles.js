import styled from "styled-components";
import { pageInRight } from "../../utils/animations";

export const PageContainer = styled.div`
  padding: 15rem 15%;
  background-color: #f7f7f7;

  & > div {
    display: flex;
    min-height: 100vh;
    border-radius: 1rem;
    overflow: hidden;
    direction: rtl;
    box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);

    @media only screen and (max-width: 48em) {
      flex-direction: column;
      width: 100%;
    }
  }

  @media only screen and (max-width: 64em) {
    padding: 15rem 5%;
  }
  @media only screen and (max-width: 48em) {
    padding: 12rem 2%;
  }
`;

export const Sidebar = styled.div`
  width: 25rem;
  background-image: linear-gradient(
    to right bottom,
    rgba(24, 123, 205, 0.9),
    rgba(3, 37, 76, 0.9)
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;

  @media only screen and (max-width: 64em) {
    width: 23rem;
  }

  @media only screen and (max-width: 48em) {
    flex-direction: row;
    width: 100%;
  }
`;

export const SidebarItem = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  color: white;
  margin: 1rem 0;
  cursor: pointer;
  position: relative;
  padding: 0 1.5rem;
  transition: all 1s;

  @media only screen and (max-width: 48em) {
    justify-content: center;
    margin: 0;
    height: 6rem;
  }

  & > div {
    z-index: 100;
    display: flex;
    justify-content: flex-start;
    @media only screen and (max-width: 48em) {
      justify-content: flex-end;

      & p {
        width: 0;
        display: none;
      }
    }

    & svg {
      width: 5rem;
      height: 5rem;
      margin-left: 2rem;
      fill: white;

      @media only screen and (max-width: 48em) {
        margin-left: 0rem;
        width: 4rem;
        height: 4rem;
      }
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 3px;
    background-image: linear-gradient(
      to right bottom,
      rgba(255, 185, 0, 1),
      rgba(255, 119, 48, 1)
    );
    transform: scaleY(0);
    transform-origin: center;
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
      background-color 0.1s;
    z-index: 0;

    @media only screen and (max-width: 48em) {
      transition: transform 0.2s, height 0.4s cubic-bezier(1, 0, 0, 1) 0.2s;
      transform: scaleX(0) scaleY(1);
      height: 3px;
      width: 100%;
      transform-origin: top;
    }
  }

  &:hover {
    &::before {
      transform: scaleY(1);
      width: 100%;

      @media only screen and (max-width: 48em) {
        transform: scaleX(1);
        height: 100%;
      }
    }
  }

  ${(props) =>
    props.selected && "&::before {transform: scaleY(1);width: 100%;}"}

  @media only screen and (max-width: 48em) {
    ${(props) =>
      props.selected && "&::before {transform: scaleX(1);height: 100%;}"}
  }
`;

export const ContentContainer = styled.div`
  width: calc(100% - 25rem);
  background-color: #fff;

  @media only screen and (max-width: 64em) {
    width: calc(100% - 23rem);
  }

  @media only screen and (max-width: 48em) {
    width: 100%;
  }
`;
