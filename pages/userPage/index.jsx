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

const selectCorrectContent = (selectedSidebarItem, currentUser) => {
  switch (selectedSidebarItem) {
    case "tours":
      return <div>tours</div>;
    case "info":
      return <InfoSection currentUser={currentUser} />;
    case "dashboard":
      return <DashboardSection currentUser={currentUser} />;
  }
};

const UserPage = ({ currentUser }) => {
  const router = nextRouter.useRouter();

  const [selectedSidebarItem, setSelectedSidebarItem] = React.useState();

  React.useEffect(() => {
    if (!currentUser) {
      router.push("/signin");
    }
    setSelectedSidebarItem(router.query.selectedSection);
  }, [router, currentUser]);
  return (
    <PageContainer>
      <div>
        <Sidebar>
          <SidebarItem
            selected={selectedSidebarItem === "tours"}
            onClick={() => setSelectedSidebarItem("tours")}
          >
            <div>
              <HikerIcon />
              <p>تور های من</p>
            </div>
          </SidebarItem>
          <SidebarItem
            selected={selectedSidebarItem === "info"}
            onClick={() => setSelectedSidebarItem("info")}
          >
            <div>
              <SettinIcon />
              <p>ویرایش اطلاعات</p>
            </div>
          </SidebarItem>
          <SidebarItem
            selected={selectedSidebarItem === "dashboard"}
            onClick={() => setSelectedSidebarItem("dashboard")}
          >
            <div>
              <DashboardIcon />
              <p>داشبورد</p>
            </div>
          </SidebarItem>
        </Sidebar>
        <ContentContainer>
          {selectCorrectContent(selectedSidebarItem, currentUser)}
        </ContentContainer>
      </div>
    </PageContainer>
  );
};

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});
export default connect(mapStateToProps)(UserPage);
