import Image from "next/image";
import {
  BackdropContainer,
  PanelContainer,
  HeaderContainer,
  UserPicture,
  ItemBanner,
  BannerContent,
} from "./profile-panel.styles";
import LogoutIcon from "../../public/assets/icons/log-out-svgrepo-com.svg";
import DashboardIcon from "../../public/assets/icons/dashboard-svgrepo-com.svg";
import HikerIcon from "../../public/assets/icons/backpacker-hiking-svgrepo-com.svg";
import LeftIcon from "../../public/assets/icons/chevron-left-svgrepo-com.svg";

const ProfilePanel = () => {
  return (
    <BackdropContainer>
      <PanelContainer>
        <HeaderContainer>
          <DashboardIcon />
          <LogoutIcon />
        </HeaderContainer>
        <UserPicture>
          <Image
            src="/assets/img/nat-4.jpg"
            alt="user"
            width="140px"
            height="140px"
          />
        </UserPicture>
        <h4>رسول صحرایی</h4>
        <ItemBanner>
          <BannerContent>
            <HikerIcon />
            <div>
              <h5>تورهای من</h5>
              <p>5</p>
            </div>
          </BannerContent>
          <LeftIcon />
        </ItemBanner>
        <ItemBanner>
          <BannerContent>
            <HikerIcon />
            <div>
              <h5>تورهای من</h5>
              <p>5</p>
            </div>
          </BannerContent>
          <LeftIcon />
        </ItemBanner>
        <ItemBanner>
          <BannerContent>
            <HikerIcon />
            <div>
              <h5>تورهای من</h5>
              <p>5</p>
            </div>
          </BannerContent>
          <LeftIcon />
        </ItemBanner>
      </PanelContainer>
    </BackdropContainer>
  );
};

export default ProfilePanel;
