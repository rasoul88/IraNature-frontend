import styled from "styled-components";
import { useRouter } from "next/router";

import { Controller } from "../components/navigation/navigation.styles";
import ReturnIcon from "../public/assets/icons/back-return-svgrepo-com.svg";
import OfflineIcon from "../public/assets/icons/offline-2.svg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5rem;
  @media only screen and (max-width: 700px) {
    padding: 2rem;
  }
`;
const OfflineFallback = () => {
  const router = useRouter();
  return (
    <Container>
      <Controller
        style={{ position: "fixed", left: "4rem" }}
        onClick={() => router.back()}
        mode="return"
      >
        <ReturnIcon />
        <p>صفحه قبل</p>
      </Controller>
      <OfflineIcon style={{ width: "100%", height: "100%" }} />
      <h3
        style={{
          color: "#333",
          marginTop: "-10rem",
        }}
      >
        !{""}عدم دسترسی به شبکه
      </h3>
      <p
        style={{
          color: "#333",
          marginBottom: 0,
        }}
      >
        ارتباط شما با اینترنت قطع می باشد و متاسفانه این صفحه در حافظه کش دستگاه
        شما نیز ذخیره نشده است
      </p>
      <p
        style={{
          color: "#333",
        }}
      >
        لطفا شبکه خود را وصل کنید و یا از دیگر صفحات برنامه استفاده کنید
      </p>
    </Container>
  );
};

export default OfflineFallback;
