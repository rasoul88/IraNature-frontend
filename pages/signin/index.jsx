import React from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import {
  SectionContainer,
  FormsContainer,
  SignInSignUp,
  SignInAndForgotFormContainer,
  TitleContainer,
  InputContainer,
  InputField,
  SubmitButton,
  SocialTextContainer,
  SocialMediaContainer,
  SocialIconContainer,
  SignUpFormContainer,
  PannelsContainer,
  LeftPannelsContainer,
  RightPannelsContainer,
  ContentContainer,
  ImageContainer,
  ForgotPasswordButton,
  SignInFormContainer,
  ForgotFormContainer,
  ErrorText,
} from "./index.styles";
import UserIcon from "../../public/assets/icons/user.svg";
import KeyIcon from "../../public/assets/icons/key2.svg";
import MailIcon from "../../public/assets/icons/envelop.svg";
import Instagram from "../../public/assets/icons/instagram.svg";
import Linkedin from "../../public/assets/icons/linkedin.svg";
import Twitter from "../../public/assets/icons/twitter.svg";
import Google from "../../public/assets/icons/google.svg";
import {
  emailSignInStart,
  signUpStart,
  forgotPassword,
} from "../../redux/user/user.actions";

const SignInForm = ({ userReducerDispatch, emailSignInStart }) => {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const [errors, setErrors] = React.useState({
    emailErr: false,
    passErr: false,
  });

  return (
    <form
      action=""
      onSubmit={(event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (!email || !password) {
          return setErrors({ emailErr: !email, passErr: !password });
        }
        setErrors({ emailErr: false, passErr: false });
        emailSignInStart({
          email,
          password,
        });
      }}
    >
      <SignInFormContainer>
        <TitleContainer> ورود</TitleContainer>
        <InputContainer>
          <InputField ref={emailRef} type="text" placeholder="نام کاربری" />
          <UserIcon />
        </InputContainer>
        {errors.emailErr && (
          <ErrorText>لطفا نام کاربری یا ایمیل را وارد کنید</ErrorText>
        )}
        <InputContainer>
          <InputField
            ref={passwordRef}
            type="password"
            placeholder="کلمه عبور"
          />
          <KeyIcon />
        </InputContainer>
        {errors.passErr && <ErrorText>لطفا کلمه عبور را وارد کنید</ErrorText>}
        <SubmitButton type="submit" value="ورود به حساب " solid />
        <ForgotPasswordButton
          data-test="forgotPassword-button"
          onClick={() =>
            userReducerDispatch({ type: "forgotPassword", payload: true })
          }
        >
          رمز عبور خود را فراموش کرده اید؟
        </ForgotPasswordButton>
        <SocialTextContainer>
          با شبکه های اجتماعی زیر وارد شوید
        </SocialTextContainer>
        <SocialMediaContainer>
          <SocialIconContainer color="#8a3ab9">
            <Instagram />
          </SocialIconContainer>
          <SocialIconContainer color="#00acee">
            <Twitter />
          </SocialIconContainer>
          <SocialIconContainer color="#ea4335">
            <Google />
          </SocialIconContainer>
          <SocialIconContainer color="#0e76a8">
            <Linkedin />
          </SocialIconContainer>
        </SocialMediaContainer>
      </SignInFormContainer>
    </form>
  );
};

const ForgotPasswordForm = ({ userReducerDispatch, forgotPassword }) => {
  const emailRef = React.useRef();
  const [errors, setErrors] = React.useState({
    emailErr: false,
  });
  return (
    <form
      action=""
      onSubmit={(event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        if (!email) {
          return setErrors({ emailErr: !email });
        }
        setErrors({ emailErr: false });
        forgotPassword(email);
      }}
    >
      <ForgotFormContainer>
        <TitleContainer> بازیابی رمز عبور</TitleContainer>
        <InputContainer>
          <InputField
            ref={emailRef}
            type="email"
            required
            placeholder="ایمیل"
          />
          <MailIcon />
        </InputContainer>
        {errors.emailErr && <ErrorText>لطفا ایمیل را وارد کنید</ErrorText>}
        <SubmitButton type="submit" value="بازیابی " solid />
        <ForgotPasswordButton
          data-test="singinWithPassword-button"
          onClick={() =>
            userReducerDispatch({
              type: "forgotPassword",
              payload: false,
            })
          }
        >
          ورود با رمز عبور
        </ForgotPasswordButton>
        <SocialTextContainer>
          با شبکه های اجتماعی زیر وارد شوید
        </SocialTextContainer>
        <SocialMediaContainer>
          <SocialIconContainer color="#8a3ab9">
            <Instagram />
          </SocialIconContainer>
          <SocialIconContainer color="#00acee">
            <Twitter />
          </SocialIconContainer>
          <SocialIconContainer color="#ea4335">
            <Google />
          </SocialIconContainer>
          <SocialIconContainer color="#0e76a8">
            <Linkedin />
          </SocialIconContainer>
        </SocialMediaContainer>
      </ForgotFormContainer>
    </form>
  );
};

const SignUpForm = ({ signUpStart }) => {
  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const confirmPasswordRef = React.useRef();
  const [errors, setErrors] = React.useState({
    nameErr: false,
    emailErr: false,
    passErr: false,
    confirmPassErr: false,
  });
  return (
    <form
      action=""
      onSubmit={(event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        if (!name || !email || !password || !confirmPassword) {
          return setErrors({
            nameErr: !name,
            emailErr: !email,
            passErr: !password,
            confirmPassErr: !confirmPassword,
          });
        }
        setErrors({
          nameErr: false,
          emailErr: false,
          passErr: false,
          confirmPassErr: false,
        });
        signUpStart({
          name,
          email,
          password,
          confirmPassword,
        });
      }}
    >
      <TitleContainer>ثبت نام</TitleContainer>
      <InputContainer>
        <InputField ref={nameRef} type="text" placeholder="نام کاربری" />
        <UserIcon />
      </InputContainer>
      {errors.nameErr && <ErrorText>لطفا نام کاربری را وارد کنید</ErrorText>}
      <InputContainer>
        <InputField ref={emailRef} type="email" placeholder="ایمیل" />
        <MailIcon />
      </InputContainer>
      {errors.emailErr && <ErrorText>لطفا ایمیل را وارد کنید</ErrorText>}
      <InputContainer>
        <InputField ref={passwordRef} type="password" placeholder="کلمه عبور" />
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
      <SubmitButton type="submit" value="ثبت نام" />
    </form>
  );
};

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
  const [state, userReducerDispatch] = React.useReducer(reducer, {
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
                userReducerDispatch={userReducerDispatch}
                forgotPassword={forgotPassword}
              />
            ) : (
              <SignInForm
                data-test="signin-form"
                userReducerDispatch={userReducerDispatch}
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
              onClick={() =>
                userReducerDispatch({ type: "setMode", payload: "signup" })
              }
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
              onClick={() =>
                userReducerDispatch({ type: "setMode", payload: "signin" })
              }
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
