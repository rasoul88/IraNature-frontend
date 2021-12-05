import styled, { css } from "styled-components";
import { cameraOpening } from "../../utils/animations";
import CloseIcon from "../../public/assets/icons/close-svgrepo-com.svg";
import CaptureIcon from "../../public/assets/icons/camera-diaphragm-svgrepo-com.svg";
import FlipCameraIcon from "../../public/assets/icons/camera-change-svgrepo-com.svg";
import RetryIcon from "../../public/assets/icons/retry-svgrepo-com.svg";
import TickIcon from "../../public/assets/icons/tick-svgrepo-com.svg";

const SvgStyles = css`
  width: 4rem;
  height: 4rem;
  transition: all 0.1s linear;
  cursor: pointer;
  fill: #187bcd;
  &:hover {
    transform: rotate(45deg);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: ${(props) => (props.forPanel ? "0" : "20%")};
  left: ${(props) => (props.forPanel ? "0" : "calc(50% - 20rem)")};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: ${(props) =>
    props.deviceType === "desktop" ? "space-between" : "flex-start"}; */
  justify-content: space-between;
  width: 100%;
  min-height: 100%;

  /* for edit section */
  ${(props) => !props.forPanel && "max-width: 45rem;min-height: 62rem;"}

  border-radius: 1rem;
  background-color: white;
  z-index: 10000;
  overflow: hidden;
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 30%);
  animation: ${cameraOpening} 0.5s;
  transform-origin: 72% 34.7%;

  @media only screen and (max-width: 37.5em) {
    width: ${(props) => (props.forPanel ? "100%" : "96%")};
    top: ${(props) => (props.forPanel ? "0" : "10rem")};
    left: ${(props) => (props.forPanel ? "0" : "2%")};
  }
`;

export const Player = styled.video`
  max-width: 100%;
  display: ${(props) => (props.show ? "block" : "none")};
`;

export const Canvas = styled.canvas`
  max-width: 100%;
  display: ${(props) => (props.show ? "block" : "none")};
`;

export const CloseCamera = styled(CloseIcon)`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  transition: all 0.1s linear;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
  &:hover {
    transform: scale(1.08);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const CaptureButton = styled(CaptureIcon)`
  ${SvgStyles}
  width: 6rem;
  height: 6rem;
  &:hover {
    transform: rotate(45deg) scale(1.08);
  }

  &:active {
    transform: rotate(45deg) scale(1);
  }
`;

export const FlipCameraButton = styled(FlipCameraIcon)`
  ${SvgStyles}
  &:hover {
    transform: scale(1.08);
  }
  &:active {
    transform: scale(1);
  }
`;
export const RetryButton = styled(RetryIcon)`
  ${SvgStyles}
  width: 3.5rem;
  height: 3.5rem;
  backface-visibility: hidden;
`;
export const OkButton = styled(TickIcon)`
  ${SvgStyles}
  width: 6rem;
  height: 6rem;
  &:hover {
    transform: scale(1.08);
  }
`;
