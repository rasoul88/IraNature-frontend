import React from "react";
import Image from "next/image";
import * as nextRouter from "next/router";
import {
  PanelContainer,
  HeaderContainer,
  UserPicture,
  ItemBanner,
  BannerContent,
  PhotoSelectorContainer,
} from "./profile-panel.styles";
import LogoutIcon from "../../public/assets/icons/log-out-svgrepo-com.svg";
import CloseIcon from "../../public/assets/icons/close-svgrepo-com.svg";
import DashboardIcon from "../../public/assets/icons/dashboard-svgrepo-com.svg";
import HikerIcon from "../../public/assets/icons/backpacker-hiking-svgrepo-com.svg";
import LeftIcon from "../../public/assets/icons/chevron-left-svgrepo-com.svg";
import SettinIcon from "../../public/assets/icons/cogs-on-wheels-interface-symbol-for-settings-edition-button-svgrepo-com.svg";
import PhotoSelector from "../photo-selector/photo-selector.component";
import { connect } from "react-redux";

const ProfilePanel = ({
  currentUser,
  toggle,
  URDispatch,
  removeCurrentUser,
}) => {
  const router = nextRouter.useRouter();
  return (
    <PanelContainer toggle={toggle}>
      <HeaderContainer>
        <CloseIcon onClick={() => URDispatch({ type: "profilePanel" })} />
        <LogoutIcon
          onClick={() => {
            removeCurrentUser();
            URDispatch({ type: "profilePanel" });
          }}
        />
      </HeaderContainer>
      <UserPicture>
        {/* <Image
          src="/assets/img/nat-4.jpg"
          alt="user"
          width="140px"
          height="140px"
        /> */}
        <img
          src={`http://localhost:6060/img/users/${currentUser?.photo}`}
          alt="gooo"
          style={{ width: "100%", height: "100%" }}
        />
      </UserPicture>
      <h4>{currentUser?.name}</h4>
      <PhotoSelectorContainer>
        <PhotoSelector />
      </PhotoSelectorContainer>
      <ItemBanner
        onClick={() =>
          router.push({
            pathname: "/userPage",
            query: { selectedSection: "tours" },
          })
        }
      >
        <BannerContent>
          <HikerIcon />
          <div>
            <h5>تورهای من</h5>
            <p>5</p>
          </div>
        </BannerContent>
        <LeftIcon />
      </ItemBanner>
      <ItemBanner
        onClick={() =>
          router.push({
            pathname: "/userPage",
            query: { selectedSection: "info" },
          })
        }
      >
        <BannerContent>
          <SettinIcon />
          <div>
            <h5>ویرایش اطلاعات شخصی</h5>
            <p> کلمه عبور و ...</p>
          </div>
        </BannerContent>
        <LeftIcon />
      </ItemBanner>
      <ItemBanner
        onClick={() =>
          router.push({
            pathname: "/userPage",
            query: { selectedSection: "dashboard" },
          })
        }
      >
        <BannerContent>
          <DashboardIcon />
          <div>
            <h5>داشبورد</h5>
            <p> ایجاد تور جدید و ...</p>
          </div>
        </BannerContent>
        <LeftIcon />
      </ItemBanner>
    </PanelContainer>
  );
};

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

export default connect(mapStateToProps)(ProfilePanel);
