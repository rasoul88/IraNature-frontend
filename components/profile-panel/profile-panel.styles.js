import styled from "styled-components";

export const BackdropContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background: transparent;
  z-index: 1000;
  backdrop-filter: blur(2px) brightness(85%);
`;

export const PanelContainer = styled.div`
  width: 42rem;
  height: 60rem;
  position: fixed;
  top: 14rem;
  right: 8.5rem;
  border-radius: 1rem;
  background: white;
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 30%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  direction: rtl;

  & > h4 {
    margin-top: 0.5rem;
    color: #333;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 30%;
  overflow: hidden;
  background-image: linear-gradient(
    to right bottom,
    rgba(24, 123, 205, 0.9),
    rgba(3, 37, 76, 0.9)
  );
  /* background-image: linear-gradient(
    to right bottom,
    rgba(126, 213, 111, 0.85),
    rgba(40, 180, 133, 0.85)
  ); */
  background-size: cover;
  background-position: bottom;
  position: relative;
  backface-visibility: hidden;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  overflow: hidden;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  & svg {
    width: 4rem;
    height: 4rem;
    color: white;
    cursor: pointer;
    transition: all 0.1s linear;
    &:hover {
      transform: scale(1.08);
    }
  }
  @media only screen and (max-width: 37.5em) {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  }
`;

export const UserPicture = styled.div`
  width: 14rem;
  height: 14rem;
  border-radius: 50%;
  border: 2px solid white;
  margin-top: -8.5rem;
  z-index: 2;
  overflow: hidden;
`;

export const ItemBanner = styled.div`
  width: 90%;
  box-shadow: 0px 2px 8px 1px rgb(0 0 0 / 15%);
  padding: 1.4rem 2rem;
  background: white;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0px 2px 8px 1px rgb(0 0 0 / 25%);
    & > svg {
      margin-left: -2.3rem;
    }
  }
  & svg {
    width: 5rem;
    height: 5rem;
  }

  & > svg {
    margin-left: -2rem;
    color: #333;
    transition: all 0.2s ease-in-out;
  }
`;

export const BannerContent = styled.div`
  display: flex;
  & h5,
  p {
    margin: 0 1.8rem;
    color: #666;
  }

  & p {
    margin-top: 0.5rem;
    font-size: 1.4rem;
  }
`;
