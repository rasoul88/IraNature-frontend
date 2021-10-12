import React from "react";
import { useRouter } from "next/router";
import {
  BackgroundContainer,
  Icon,
  IconContainer,
  Item,
  Link,
  NavContainer,
  NavigationContainer,
  NavList,
} from "./navigation.styles";

const Navigation = () => {
  const router = useRouter();
  const [toggle, settoggle] = React.useState(false);

  const handleMenuItemClick = (href) => {
    router.push(href);
  };
  return (
    <NavigationContainer>
      <IconContainer toggle={toggle} onClick={() => settoggle(!toggle)}>
        <Icon toggle={toggle}>&nbsp;</Icon>
      </IconContainer>

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
            <Link>تور ها</Link>
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

export default Navigation;
