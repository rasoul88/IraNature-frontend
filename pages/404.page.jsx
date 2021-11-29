import Image from "next/image";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 90rem;
  height: 90rem;
  position: relative;

  @media only screen and (max-width: 900px) {
    width: 70rem;
    height: 70rem;
  }
  @media only screen and (max-width: 700px) {
    width: 50rem;
    height: 50rem;
  }
`;

const Text = styled.h2`
  color: #0062d1;
  z-index: 2;
  margin-top: -10rem;
  text-align: center;
  @media only screen and (max-width: 900px) {
    margin-top: 0;
    font-size: 2rem;
  }
`;

const NotFoundPage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <ImageContainer>
        <Image src="/assets/icons/404-4.jpg" alt="404" layout="fill" />
      </ImageContainer>
      <Text>صفحه مورد نظر شما یافت نشد</Text>
    </div>
  );
};

export default NotFoundPage;
