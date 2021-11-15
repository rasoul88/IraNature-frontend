import React from "react";
import {
  TitleContainer,
  InputContainer,
  InputField,
  ErrorText,
} from "../../pages/signin/index.styles";
import SubmitButton from "../../components/submit-button/submit-button.component";

import UserIcon from "../../public/assets/icons/user.svg";
import KeyIcon from "../../public/assets/icons/key2.svg";
import MailIcon from "../../public/assets/icons/envelop.svg";
import SpinButton from "../spin-button/spin-button.component";

const SignUpForm = ({ signUpStart, isFetching }) => {
  const credentialsRef = React.useRef([]);
  const [errors, setErrors] = React.useState({
    nameErr: false,
    emailErr: false,
    passErr: false,
    confirmPassErr: false,
    notSamePasswords: false,
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    const name = credentialsRef.current[0].value;
    const email = credentialsRef.current[1].value;
    const password = credentialsRef.current[2].value;
    const confirmPassword = credentialsRef.current[3].value;
    if (!name || !email || !password || !confirmPassword) {
      return setErrors({
        nameErr: !name,
        emailErr: !email,
        passErr: !password,
        confirmPassErr: !confirmPassword,
      });
    }
    if (password !== confirmPassword) {
      return setErrors({
        nameErr: false,
        emailErr: false,
        passErr: false,
        confirmPassErr: false,
        notSamePasswords: true,
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
  };

  return (
    <form data-test="component-signup-form" onSubmit={onFormSubmit}>
      <TitleContainer>ثبت نام</TitleContainer>
      <InputContainer>
        <InputField
          ref={(el) => (credentialsRef.current[0] = el)}
          type="text"
          placeholder="نام کاربری"
        />
        <UserIcon />
      </InputContainer>
      {errors.nameErr && (
        <ErrorText data-test="name-error-text">
          لطفا نام کاربری را وارد کنید
        </ErrorText>
      )}
      <InputContainer>
        <InputField
          ref={(el) => (credentialsRef.current[1] = el)}
          type="email"
          placeholder="ایمیل"
        />
        <MailIcon />
      </InputContainer>
      {errors.emailErr && (
        <ErrorText data-test="email-error-text">
          لطفا ایمیل را وارد کنید
        </ErrorText>
      )}
      <InputContainer>
        <InputField
          ref={(el) => (credentialsRef.current[2] = el)}
          type="password"
          placeholder="کلمه عبور"
        />
        <KeyIcon />
      </InputContainer>
      {errors.passErr && (
        <ErrorText data-test="passsword-error-text">
          لطفا کلمه عبور را وارد کنید
        </ErrorText>
      )}
      <InputContainer>
        <InputField
          ref={(el) => (credentialsRef.current[3] = el)}
          type="password"
          placeholder="تکرار کلمه عبور"
        />
        <KeyIcon />
      </InputContainer>
      {errors.confirmPassErr && (
        <ErrorText data-test="confirmPassword-error-text">
          لطفا تکرار کلمه عبور را وارد کنید
        </ErrorText>
      )}
      {errors.notSamePasswords && (
        <ErrorText>کلمه عبور و تکرار آن یکسان نیست</ErrorText>
      )}
      {isFetching ? <SpinButton /> : <SubmitButton value="ثبت نام" />}
    </form>
  );
};

export default SignUpForm;
