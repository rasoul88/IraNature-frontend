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

const Navigation = (props) => {
  const router = nextRouter.useRouter();
  const [toggle, settoggle] = React.useState(false);

  const handleMenuItemClick = (href) => {
    router.push(href);
  };
  return (
    <NavigationContainer {...props} data-test="component-navigation">
      <IconContainer
        data-test="burger-menu"
        toggle={toggle}
        onClick={() => settoggle(!toggle)}
      >
        <Icon toggle={toggle}>&nbsp;</Icon>
      </IconContainer>
      {router.pathname !== "/signin" &&
        (props?.currentUser ? (
          <Controller
            data-test="user-controller"
            onClick={() => {
              props.dispatch({ type: "REMOVE_CURRENT_USER" });
              // handleMenuItemClick("/signin")
            }}
          >
            <Avatar
              name={props.currentUser.name}
              // image={props.currentUser.photo}
            />
            <p>{props.currentUser.name}</p>
          </Controller>
        ) : (
          <Controller
            data-test="login-controller"
            onClick={() => handleMenuItemClick("/signin")}
          >
            <LoginIcon />
            <p>ثبت نام | ورود</p>
          </Controller>
        ))}

      <ProfilePanel />

      <BackgroundContainer toggle={toggle}>&nbsp;</BackgroundContainer>

      <NavContainer toggle={toggle}>
        <NavList onClick={() => settoggle(!toggle)}>
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
