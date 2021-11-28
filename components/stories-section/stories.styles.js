import styled from "styled-components";

export const SectionContainer = styled.div`
  position: relative;
  padding: 15rem 0;
  overflow-x: hidden;

  @media only screen and (max-width: 56.25em) {
    padding: 10rem 0;
  }

  @media only screen and (max-width: 37.5em) {
    & h2 {
      margin-bottom: 8rem;
    }
  }
`;

export const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.3;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
