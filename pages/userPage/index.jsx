import React from "react";
import { connect } from "react-redux";
import * as nextRouter from "next/router";
import {
  PageContainer,
  Sidebar,
  ContentContainer,
  SidebarItem,
} from "./index.styles";
import DashboardIcon from "../../public/assets/icons/dashboard-svgrepo-com.svg";
import HikerIcon from "../../public/assets/icons/backpacker-hiking-svgrepo-com.svg";
import SettinIcon from "../../public/assets/icons/cogs-on-wheels-interface-symbol-for-settings-edition-button-svgrepo-com.svg";

import InfoSection from "../../components/user-page-sections/edit-info.component";
import DashboardSection from "../../components/user-page-sections/dashboard.component";
import MyCreatedToursSection from "../../components/user-page-sections/tours.component";
import { getActiveTourGuides } from "../../redux/tours/tours.actions";
import { changeSelectedTab } from "../../redux/userPage/userPage.actions";
import HomeIcon from "../../public/assets/icons/home-svgrepo-com.svg";
import { Controller } from "../../components/navigation/navigation.styles";

const selectCorrectContent = (selectedTab) => {
  switch (selectedTab) {
    case "tours":
      return <MyCreatedToursSection />;
    case "info":
      return <InfoSection />;
    case "dashboard":
      return <DashboardSection />;
  }
};

const UserPage = ({
  currentUser,
  getActiveTourGuides,
  selectedTab,
  changeSelectedTab,
}) => {
  const router = nextRouter.useRouter();

  React.useEffect(() => {
    if (!currentUser) {
      router.push("/signin");
    }
  }, [router, currentUser]);

  React.useEffect(() => {
    getActiveTourGuides();
  }, [getActiveTourGuides]);

  return (
    <PageContainer>
      <Controller
        width="16rem"
        style={{ position: "fixed", left: "4rem" }}
        onClick={() => router.push("/")}
        mode="return"
      >
        <HomeIcon />
        <p>صفحه اصلی</p>
      </Controller>
      <div>
        <Sidebar>
          <SidebarItem
            selected={selectedTab === "tours"}
            onClick={() => changeSelectedTab("tours")}
          >
            <div>
              <HikerIcon />
              <p>تور های من</p>
            </div>
          </SidebarItem>
          <SidebarItem
            selected={selectedTab === "info"}
            onClick={() => changeSelectedTab("info")}
          >
            <div>
              <SettinIcon />
              <p>ویرایش اطلاعات</p>
            </div>
          </SidebarItem>
          <SidebarItem
            selected={selectedTab === "dashboard"}
            onClick={() => changeSelectedTab("dashboard")}
          >
            <div>
              <DashboardIcon />
              <p>داشبورد</p>
            </div>
          </SidebarItem>
        </Sidebar>
        <ContentContainer>
          {selectCorrectContent(selectedTab, currentUser)}
        </ContentContainer>
      </div>
    </PageContainer>
  );
};

const mapStateToProps = ({
  user: { currentUser },
  userPage: { selectedTab },
}) => ({
  currentUser,
  selectedTab,
});

const mapDispatchToProps = (dispatch) => ({
  getActiveTourGuides: () => dispatch(getActiveTourGuides()),
  changeSelectedTab: (selectedTab) => dispatch(changeSelectedTab(selectedTab)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
