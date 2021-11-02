import React from "react";
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
} from "./user-page-sections.styles";

import PhotoSelector from "../../components/photo-selector/photo-selector.component";
import SecodaryHeading from "../../components/heading/heading.component";
import CustomInput from "../../components/custom-input/custom-input.component";
import SubmitButton from "../../components/submit-button/submit-button.component";

const INITIAL_STATE = {
  userData: {
    name: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  },
  errors: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setUserData":
      return {
        ...state,
        userData: {
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
const InfoSection = ({ currentUser }) => {
  const [{ userData, errors }, URDispatch] = React.useReducer(
    reducer,
    INITIAL_STATE
  );

  return (
    <SectionContainer>
      <EditInfoContainer>
        <UserPictureContainer>
          <UserPicture>
            <Image
              src="/assets/img/nat-4.jpg"
              alt="user"
              width="160px"
              height="160px"
            />
          </UserPicture>
          <PhotoSelectorContainer>
            <PhotoSelector />
          </PhotoSelectorContainer>
        </UserPictureContainer>
        <form onSubmit={(event) => event.preventDefault()}>
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
                defaultValue={currentUser.name}
              />
            </div>
          </DataItem>
          <DataItem>
            <h4>ایمیل:</h4>
            <div>
              <CustomInput
                data-test="email-input"
                type="email"
                defaultValue={currentUser.email}
              />
            </div>
          </DataItem>
          <ButtonContainer>
            <SubmitButton value="ویرایش" />
          </ButtonContainer>
        </form>
      </EditInfoContainer>
      <ChangePasswordContainer>
        <form onSubmit={(event) => event.preventDefault()}>
          <HeadingContainer>
            <SecodaryHeading style={{ fontSize: "2rem" }}>
              تغییر کلمه عبور
            </SecodaryHeading>
          </HeadingContainer>
          <DataItem>
            <h4>کلمه عبور قبلی:</h4>
            <div>
              <CustomInput data-test="name-input" type="password" />
            </div>
          </DataItem>
          <DataItem>
            <h4>کلمه عبور جدید:</h4>
            <div>
              <CustomInput data-test="email-input" type="password" />
            </div>
          </DataItem>
          <DataItem>
            <h4>تکرار کلمه عبور جدید:</h4>
            <div>
              <CustomInput data-test="email-input" type="password" />
            </div>
          </DataItem>

          <ButtonContainer>
            <SubmitButton value="تغییر" />
          </ButtonContainer>
        </form>
      </ChangePasswordContainer>
    </SectionContainer>
  );
};

export default InfoSection;
