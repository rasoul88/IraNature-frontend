import styled from "styled-components";

export const Container = styled.div``;

export const EditIconContainer = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 5rem;
  border: 1px solid white;
  background-image: linear-gradient(
    to right bottom,
    rgba(24, 123, 205, 1),
    rgba(3, 37, 76, 1)
  );
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  cursor: pointer;

  & svg {
    width: 2rem;
    height: 2rem;
    fill: white;
  }
`;

export const CameraFolderContainer = styled.div`
  width: 12rem;
  height: 4rem;
  border-radius: 5rem;
  border: 1px solid white;
  background-image: linear-gradient(
    to right bottom,
    rgba(24, 123, 205, 1),
    rgba(3, 37, 76, 1)
  );
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  overflow: hidden;
  transform: ${(props) =>
    props.togglePhotoSeleectorPanel ? "scaleX(1)" : "scaleX(0)"};
  transform-origin: 20%;
  transition: all 0.2s;
  & svg {
    width: 2rem;
    height: 2rem;
    fill: white;
    cursor: pointer;
    margin-left: 2rem;
  }

  & svg:first-child {
    margin-top: 6px;
    margin-right: 0.8rem;
  }
`;
