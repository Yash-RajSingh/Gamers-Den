import {
  HeaderBody,
  Title,
  UserContainer,
  NavLink,
  HamburgerIcon,
  DispayWrapper,
  ProfileImage,
} from "./headerElements";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { authContext } from "../../context/context";
import { auth } from "../../firebase";
import Icon from "../../assets/hamburger.png";
import Profile from "../../assets/profile.png";


const Header = () => {
  const { authenticated, setAuthenticated } = useContext(authContext);
  const [show, setShow] = useState(true);
  const [showLogin, setShowLogin] = useState(true);
  let param = window.location.href;
  useEffect(() => {
    if (window.innerWidth > 720) {
      setShow(!show);
    }
    if (param.includes("login")) {
      setShowLogin(false);
    } else {
      setShowLogin(true);
    }
  }, []);
  return (
    <>
      <HamburgerIcon
        src={Icon}
        onClick={() => {
          setShow(!show);
        }}
      />
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
            {showLogin && (
              <Link to="/login" style={{ textDecoration: "none",  display: authenticated ? "none" : "block"}}>
                <NavLink>Login</NavLink>
              </Link>
            )}
            {authenticated && <ProfileImage src={auth.currentUser.photoURL || Profile} />}
          </UserContainer>
        </DispayWrapper>
      </HeaderBody>
    </>
  );
};

export default Header;
