import React from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import {
  SectionContainer,
  FormsContainer,
  SignInSignUp,
  SignInAndForgotFormContainer,
  SignUpFormContainer,
  PannelsContainer,
  LeftPannelsContainer,
  RightPannelsContainer,
  ContentContainer,
  ImageContainer,
} from "./index.styles";

import {
  emailSignInStart,
  signUpStart,
  forgotPassword,
} from "../../redux/user/user.actions";

import SignInForm from "../../components/forms/signin-form.component";
import SignUpForm from "../../components/forms/signup-form.component";
import ForgotPasswordForm from "../../components/forms/forgotPassword-form.component";

const reducer = (state, action) => {
  switch (action.type) {
    case "setMode":
      return {
        ...state,
        mode: action.payload,
      };
    case "forgotPassword":
      return {
        ...state,
        forgotPassword: action.payload,
      };
  }
};

export const UnconnectedSignInSignUpPage = ({
  currentUser,
  emailSignInStart,
  signUpStart,
  forgotPassword,
}) => {
  const [state, URDispatch] = React.useReducer(reducer, {
    mode: "signin",
    forgotPassword: false,
  });

  const router = useRouter();

  React.useEffect(() => {
    if (currentUser) router.push("/");
  }, [router, currentUser]);

  return (
    <SectionContainer
      data-test="component-signin-signup"
      id="signin-signup"
      mode={state.mode}
    >
      <FormsContainer
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <SignInSignUp mode={state.mode}>
          <SignInAndForgotFormContainer mode={state.mode}>
            {state.forgotPassword ? (
              <ForgotPasswordForm
                data-test="forgot-password-form"
                URDispatch={URDispatch}
                forgotPassword={forgotPassword}
              />
            ) : (
              <SignInForm
                data-test="signin-form"
                URDispatch={URDispatch}
                emailSignInStart={emailSignInStart}
              />
            )}
          </SignInAndForgotFormContainer>
          <SignUpFormContainer mode={state.mode}>
            <SignUpForm signUpStart={signUpStart} />
          </SignUpFormContainer>
        </SignInSignUp>
      </FormsContainer>

      <PannelsContainer>
        <LeftPannelsContainer mode={state.mode}>
          <ContentContainer>
            <h3>حساب کاربری ندارید؟</h3>
            <p>
              {" "}
              لطفا بر روی دکمه ی زیر کلیک کنید و با ایجاد حساب کاربری از تمام
              مزایای وب سایت ما بهره مند شوید
            </p>
            <button
              data-test="signup-button"
              onClick={() => URDispatch({ type: "setMode", payload: "signup" })}
            >
              ثبت نام
            </button>
          </ContentContainer>
          <ImageContainer src="/assets/icons/register.svg" alt="login" />
        </LeftPannelsContainer>

        <RightPannelsContainer mode={state.mode}>
          <ContentContainer>
            <h3>حساب کاربری دارید؟</h3>
            <p>
              {" "}
              لطفا بر روی دکمه ی زیر کلیک کنید و با ورود به حساب کاربری که قبلا
              ایجاد کرده اید از تمام مزایای وب سایت ما بهره مند شوید
            </p>
            <button
              data-test="signin-button"
              onClick={() => URDispatch({ type: "setMode", payload: "signin" })}
            >
              ورود
            </button>
          </ContentContainer>
          <ImageContainer src="/assets/icons/Login2.svg" alt="register" />
        </RightPannelsContainer>
      </PannelsContainer>
    </SectionContainer>
  );
};

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

const mapDipatchToProps = (dispatch) => ({
  emailSignInStart: (credentials) => dispatch(emailSignInStart(credentials)),
  signUpStart: (credentials) => dispatch(signUpStart(credentials)),
  forgotPassword: (email) => dispatch(forgotPassword(email)),
});
export default connect(
  mapStateToProps,
  mapDipatchToProps
)(UnconnectedSignInSignUpPage);
