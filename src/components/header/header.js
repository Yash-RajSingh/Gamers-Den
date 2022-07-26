import {
  HeaderBody,
  Title,
  UserContainer,
  NavLink,
  HamburgerIcon,
  DispayWrapper,
} from "./headerElements";
import { Link } from "react-router-dom";
import Icon from "../../assets/hamburger.png";
import { useEffect, useState } from "react";
const Header = () => {
  const [show, setShow] = useState(true);
  useEffect(()=>{
    if(window.innerWidth > 720){
      setShow(!show)
    }
  }, [])

  return (
    <>
      <HamburgerIcon src={Icon} onClick={() => {
        setShow(!show)
      }} />
      <HeaderBody>
        <Title>Gamers Den</Title>
        <DispayWrapper style={{ display: show ? "none" : "block" }}>
          <UserContainer>
            <Link to="/" style={{ textDecoration: "none" }}>
              <NavLink>Home</NavLink>
            </Link>
            <Link to="/news" style={{ textDecoration: "none" }}>
              <NavLink>News</NavLink>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <NavLink>Login</NavLink>
            </Link>
          </UserContainer>
        </DispayWrapper>
      </HeaderBody>
    </>
  );
};

export default Header;
