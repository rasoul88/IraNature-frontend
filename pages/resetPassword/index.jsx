import React from "react";
import { connect } from "react-redux";
import * as nextRouter from "next/router";
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

export const UnconnectedResetPassword = ({ currentUser, resetPassword }) => {
  const router = nextRouter.useRouter();
  const passwordRef = React.useRef();
  const confirmPasswordRef = React.useRef();
  const [errors, setErrors] = React.useState({
    passErr: false,
    confirmPassErr: false,
    notMatchErr: false,
  });

  React.useEffect(() => {
    if (currentUser) {
      router.push("/");
    }
  }, [currentUser, router]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    if (!password || !confirmPassword) {
      return setErrors({
        passErr: !password,
        confirmPassErr: !confirmPassword,
        notMatchErr: false,
      });
    }

    if (password !== confirmPassword) {
      return setErrors({
        passErr: false,
        confirmPassErr: false,
        notMatchErr: true,
      });
    }

    setErrors({
      passErr: false,
      confirmPassErr: false,
      notMatchErr: false,
    });
    resetPassword({
      token: router.query.token,
      password,
      confirmPassword,
    });
  };
  return (
    <PageContainer data-test="component-reset-password">
      <FormContainer>
        <form data-test="reset-password-form" action="" onSubmit={onFormSubmit}>
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
          {errors.passErr && (
            <ErrorText data-test="pass-error-text">
              لطفا کلمه عبور را وارد کنید
            </ErrorText>
          )}
          <InputContainer>
            <InputField
              ref={confirmPasswordRef}
              type="password"
              placeholder="تکرار کلمه عبور"
            />
            <KeyIcon />
          </InputContainer>
          {errors.confirmPassErr && (
            <ErrorText data-test="confirm-pass-error-text">
              لطفا تکرار کلمه عبور را وارد کنید
            </ErrorText>
          )}
          {errors.notMatchErr && (
            <ErrorText data-test="notMatch-error-text">
              کلمه های عبور با هم یکسان نیستند
            </ErrorText>
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
export default connect(
  mapStateToProps,
  mapDipatchToProps
)(UnconnectedResetPassword);
