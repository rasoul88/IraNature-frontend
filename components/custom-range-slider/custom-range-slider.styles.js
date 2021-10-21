import styled from "styled-components";

export const CustomLable = styled.div`
  position: absolute;
  top: -1rem;
  line-height: 1.2;
  font-size: 12;
  background: unset;
  padding: 0;
  width: 26px;
  height: 26px;
  border-radius: 50% 50% 50% 0;
  background-color: #1976d2;
  transform-origin: bottom left;
  transform: translate(50%, -100%) rotate(-45deg) scale(0);
  transition: all 0.1s;
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    margin: 0;
    padding: 0;
    color: white;
    font-size: 1.3rem;
    font-weight: bold;
    font-family: "IranSans";
    transform: rotate(45deg);
  }
`;

export const CustomThumb = styled.div`
  height: 24px;
  width: 24px;
  outline: none;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 6px #aaa;
  border: 2px solid #548bf4;
  cursor: pointer !important;

  &:hover ${CustomLable} {
    transform: translate(50%, -100%) rotate(-45deg) scale(1);
  }
  &:active ${CustomLable} {
    transform: translate(50%, -100%) rotate(-45deg) scale(1);
  }
  &:active {
    border: 2px solid #1976d2;
  }
`;
