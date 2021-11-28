import React from "react";
import * as nextRouter from "next/router";
import { connect } from "react-redux";
import {
  BackgroundContainer,
  Icon,
  IconContainer,
  Item,
  Link,
  NavContainer,
  NavigationContainer,
  NavList,
  Controller,
} from "./navigation.styles";
import LoginIcon from "../../public/assets/icons/login-svgrepo-com.svg";
import Avatar from "../avatar/avatar.component";
import ProfilePanel from "../profile-panel/profile-panel.component";

const reducer = (state, action) => {
  switch (action.type) {
    case "menu":
      return {
        ...state,
        menu: !state.menu,
      };
    case "profilePanel":
      return {
        ...state,
        profilePanel: !state.profilePanel,
      };
  }
};
const Navigation = ({ currentUser }) => {
  const router = nextRouter.useRouter();

  const [toggleStates, URDispatch] = React.useReducer(reducer, {
    menu: false,
    profilePanel: false,
  });

  const handleMenuItemClick = (href) => {
    router.push(href);
  };
  return (
    <NavigationContainer data-test="component-navigation">
      <IconContainer
        data-test="burger-menu"
        toggle={toggleStates.menu}
        onClick={() => URDispatch({ type: "menu" })}
      >
        <Icon toggle={toggleStates.menu}>&nbsp;</Icon>
      </IconContainer>
      {router.pathname !== "/signin" &&
        (currentUser ? (
          <div style={{ zIndex: "10" }}>
            <Controller
              data-test="user-controller"
              onClick={() => URDispatch({ type: "profilePanel" })}
            >
              <Avatar name={currentUser.name} image={currentUser.photo} />
              <p>{currentUser.name}</p>
            </Controller>
            <ProfilePanel
              toggle={toggleStates.profilePanel}
              URDispatch={URDispatch}
            />
          </div>
        ) : (
          <div style={{ zIndex: "10" }}>
            <Controller
              data-test="login-controller"
              onClick={() => handleMenuItemClick("/signin")}
            >
              <LoginIcon />
              <p>ثبت نام | ورود</p>
            </Controller>
          </div>
        ))}

      <BackgroundContainer toggle={toggleStates.menu}>
        &nbsp;
      </BackgroundContainer>

      <NavContainer toggle={toggleStates.menu}>
        <NavList onClick={() => URDispatch({ type: "menu" })}>
          <Item>
            <Link onClick={() => handleMenuItemClick("/")}>صفحه اصلی</Link>
          </Item>
          <Item>
            <Link>درباره ایرانیچر</Link>
          </Item>
          <Item>
            <Link onClick={() => handleMenuItemClick("/tours")}>تور ها</Link>
          </Item>
          <Item>
            <Link onClick={() => handleMenuItemClick("/signin")}>
              ثبت نام | ورود
            </Link>
          </Item>
          <Item>
            <Link>همکاری با ایرانیچر</Link>
          </Item>
          <Item>
            <Link>وبلاگ</Link>
          </Item>
        </NavList>
      </NavContainer>
    </NavigationContainer>
  );
};

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

export default connect(mapStateToProps)(Navigation);
