import React from "react";
import { connect } from "react-redux";
import Image from "next/image";
import {
  SectionContainer,
  UserPictureContainer,
  UserPicture,
  PhotoSelectorContainer,
  HeadingContainer,
  EditInfoContainer,
  DataItem,
  ButtonContainer,
  ChangePasswordContainer,
  ErrorText,
} from "./user-page-sections.styles";

import { updateMe, updateMyPassword } from "../../redux/user/user.actions";

import PhotoSelector from "../../components/photo-selector/photo-selector.component";
import SecodaryHeading from "../../components/heading/heading.component";
import CustomInput from "../../components/custom-input/custom-input.component";
import SubmitButton from "../../components/submit-button/submit-button.component";
import SpinButton from "../../components/spin-button/spin-button.component";

const reducer = (state, action) => {
  switch (action.type) {
    case "setUserData":
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.itemName]: action.payload.value,
        },
      };
    case "setUserErrors":
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

const InfoSection = ({
  currentUser,
  updateMe,
  updateMyPassword,
  isFetching,
}) => {
  const [{ data, errors }, URDispatch] = React.useReducer(reducer, {
    data: {
      name: currentUser?.name,
      email: currentUser?.email,
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    errors: {},
  });

  const onInfoEditSubmit = () => {
    let errors = {};
    if (!data.name || !data.email) {
      errors.name = !data.name;
      errors.email = !data.email;
      return URDispatch({ type: "setUserErrors", payload: errors });
    } else if (
      data.name === currentUser.name &&
      data.email === currentUser.email
    ) {
      errors.sameInfo = true;
      return URDispatch({ type: "setUserErrors", payload: errors });
    }
    URDispatch({ type: "setUserErrors", payload: {} });
    updateMe({ name: data.name, email: data.email });
  };

  const onPasswordChangeSubmit = () => {
    let errors = {};
    if (!data.oldPassword || !data.newPassword || !data.confirmNewPassword) {
      errors.oldPassword = !data.oldPassword;
      errors.newPassword = !data.newPassword;
      errors.confirmNewPassword = !data.confirmNewPassword;
      return URDispatch({ type: "setUserErrors", payload: errors });
    } else if (data.newPassword !== data.confirmNewPassword) {
      errors.notMatch = true;
      return URDispatch({ type: "setUserErrors", payload: errors });
    } else if (data.oldPassword === data.newPassword) {
      errors.samePasswords = true;
      return URDispatch({ type: "setUserErrors", payload: errors });
    }
    if (data.newPassword.length < 8) {
      errors.tooShort = true;
      return URDispatch({ type: "setUserErrors", payload: errors });
    }
    URDispatch({ type: "setUserErrors", payload: {} });
    updateMyPassword({
      passwordCurrent: data.oldPassword,
      password: data.newPassword,
      confirmPassword: data.confirmNewPassword,
    });
  };

  return (
    <SectionContainer>
      <EditInfoContainer>
        <UserPictureContainer>
          <UserPicture>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_SERVER_STATICS_URL}/img/users/${currentUser?.photo}`}
              alt="user"
              width="160px"
              height="160px"
            />
          </UserPicture>
          <PhotoSelectorContainer>
            <PhotoSelector />
          </PhotoSelectorContainer>
        </UserPictureContainer>
        <div>
          <HeadingContainer>
            <SecodaryHeading style={{ fontSize: "2rem" }}>
              ویرایش اطلاعات
            </SecodaryHeading>
          </HeadingContainer>
          <DataItem>
            <h4>نام کاربری:</h4>
            <div>
              <CustomInput
                data-test="name-input"
                type="text"
                defaultValue={currentUser?.name}
                onBlur={(event) => {
                  URDispatch({
                    type: "setUserData",
                    payload: { itemName: "name", value: event.target.value },
                  });
                }}
              />
              {errors.name && (
                <ErrorText>لطفا نام کاربری جدید را وارد کنید</ErrorText>
              )}
            </div>
          </DataItem>
          <DataItem>
            <h4>ایمیل:</h4>
            <div>
              <CustomInput
                data-test="email-input"
                type="email"
                defaultValue={currentUser?.email}
                onBlur={(event) => {
                  URDispatch({
                    type: "setUserData",
                    payload: { itemName: "email", value: event.target.value },
                  });
                }}
              />
              {errors.email && (
                <ErrorText>لطفا ایمیل جدید را وارد کنید</ErrorText>
              )}
            </div>
          </DataItem>
          {errors.sameInfo && (
            <ErrorText style={{ textAlign: "center", marginTop: "-15px" }}>
              شما اطلاعات خود را تغییر نداده اید
            </ErrorText>
          )}
          <ButtonContainer>
            {isFetching ? (
              <SpinButton />
            ) : (
              <SubmitButton value="ویرایش" onClick={onInfoEditSubmit} />
            )}
          </ButtonContainer>
        </div>
      </EditInfoContainer>
      <ChangePasswordContainer>
        <div>
          <HeadingContainer>
            <SecodaryHeading style={{ fontSize: "2rem" }}>
              تغییر کلمه عبور
            </SecodaryHeading>
          </HeadingContainer>
          <DataItem>
            <h4>کلمه عبور فعلی:</h4>
            <div>
              <CustomInput
                data-test="name-input"
                type="password"
                onBlur={(event) => {
                  URDispatch({
                    type: "setUserData",
                    payload: {
                      itemName: "oldPassword",
                      value: event.target.value,
                    },
                  });
                }}
              />
              {errors.oldPassword && (
                <ErrorText>لطفا کلمه عبور فعلی را وارد کنید</ErrorText>
              )}
            </div>
          </DataItem>
          <DataItem>
            <h4>کلمه عبور جدید:</h4>
            <div>
              <CustomInput
                data-test="email-input"
                type="password"
                onBlur={(event) => {
                  URDispatch({
                    type: "setUserData",
                    payload: {
                      itemName: "newPassword",
                      value: event.target.value,
                    },
                  });
                }}
              />
              {errors.newPassword && (
                <ErrorText>لطفا کلمه عبور جدید را وارد کنید</ErrorText>
              )}
            </div>
          </DataItem>
          <DataItem>
            <h4>تکرار کلمه عبور جدید:</h4>
            <div>
              <CustomInput
                data-test="email-input"
                type="password"
                onBlur={(event) => {
                  URDispatch({
                    type: "setUserData",
                    payload: {
                      itemName: "confirmNewPassword",
                      value: event.target.value,
                    },
                  });
                }}
              />
              {errors.confirmNewPassword && (
                <ErrorText>لطفا تکرار کلمه عبور جدید را وارد کنید</ErrorText>
              )}
            </div>
          </DataItem>
          {errors.samePasswords && (
            <ErrorText style={{ textAlign: "center", marginTop: "-15px" }}>
              کلمه عبور فعلی و جدید شما مشابه هستند
            </ErrorText>
          )}
          {errors.notMatch && (
            <ErrorText style={{ textAlign: "center", marginTop: "-15px" }}>
              کلمه عبور جدید و تکرار آن یکسان نمی باشد
            </ErrorText>
          )}
          {errors.tooShort && (
            <ErrorText style={{ textAlign: "center", marginTop: "-15px" }}>
              کلمه عبور جدید حداقل باید 8 کاراکتر باشد
            </ErrorText>
          )}
          <ButtonContainer>
            {isFetching ? (
              <SpinButton />
            ) : (
              <SubmitButton value="تغییر" onClick={onPasswordChangeSubmit} />
            )}
          </ButtonContainer>
        </div>
      </ChangePasswordContainer>
    </SectionContainer>
  );
};

const mapStateToProps = ({ user: { currentUser, isFetching } }) => ({
  currentUser,
  isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  updateMe: (credentials) => dispatch(updateMe(credentials)),
  updateMyPassword: (credentials) => dispatch(updateMyPassword(credentials)),
});
export default connect(mapStateToProps, mapDispatchToProps)(InfoSection);
