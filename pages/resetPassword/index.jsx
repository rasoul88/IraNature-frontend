import React from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { PageContainer, FormContainer } from "./index.styles";
import {
  InputContainer,
  InputField,
  SubmitButton,
  ErrorText,
} from "../signin/index.styles";
import SecondaryHeading from "../../components/heading/heading.component";
import KeyIcon from "../../public/assets/icons/key2.svg";
import { resetPassword } from "../../redux/user/user.actions";

const ResetPassword = ({ currentUser, resetPassword }) => {
  const router = useRouter();
  const passwordRef = React.useRef();
  const confirmPasswordRef = React.useRef();
  const [errors, setErrors] = React.useState({
    passErr: false,
    confirmPassErr: false,
  });
  console.log(router.query);

  React.useEffect(() => {
    if (currentUser) {
      router.push("/");
    }
  }, [currentUser, router]);

  return (
    <PageContainer>
      <FormContainer>
        <form
          action=""
          onSubmit={(event) => {
            event.preventDefault();
            const password = passwordRef.current.value;
            const confirmPassword = confirmPasswordRef.current.value;
            if (!password || !confirmPassword) {
              return setErrors({
                passErr: !password,
                confirmPassErr: !confirmPassword,
              });
            }
            setErrors({
              passErr: false,
              confirmPassErr: false,
            });
            resetPassword({
              token: router.query.token,
              password,
              confirmPassword,
            });
          }}
        >
          <SecondaryHeading style={{ fontSize: "3rem" }}>
            بازنشانی کلمه عبور
          </SecondaryHeading>
          <InputContainer>
            <InputField
              ref={passwordRef}
              type="password"
              placeholder="کلمه عبور"
            />
            <KeyIcon />
          </InputContainer>
          {errors.passErr && <ErrorText>لطفا کلمه عبور را وارد کنید</ErrorText>}
          <InputContainer>
            <InputField
              ref={confirmPasswordRef}
              type="password"
              placeholder="تکرار کلمه عبور"
            />
            <KeyIcon />
          </InputContainer>
          {errors.confirmPassErr && (
            <ErrorText>لطفا تکرار کلمه عبور را وارد کنید</ErrorText>
          )}
          <SubmitButton type="submit" value="بازنشانی" />
        </form>
      </FormContainer>
    </PageContainer>
  );
};

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

const mapDipatchToProps = (dispatch) => ({
  resetPassword: (credentials) => dispatch(resetPassword(credentials)),
});
export default connect(mapStateToProps, mapDipatchToProps)(ResetPassword);
