import {
  HeaderBody,
  Title,
  UserContainer,
  NavLink,
  HamburgerIcon,
  DispayWrapper,
  LogoutButton,
} from "./headerElements";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Icon from "../../assets/hamburger.png";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Header = () => {
  const [show, setShow] = useState(true);
  const [showLogin, setShowLogin] = useState(true);
  let navigate = useNavigate()
  let param = window.location.href;
  const IsLogged = sessionStorage.getItem("isauth");
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
            {IsLogged ? (
              <>
            <Link to="/discussion" style={{ textDecoration: "none" }}>
              <NavLink>discussions</NavLink>
            </Link>
              <LogoutButton onClick={(e)=>{
                e.preventDefault();
                signOut(auth);
                sessionStorage.clear();
                navigate('/')
              }}>Logout</LogoutButton>
              </>
            ) : (
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  display: showLogin ? "block" : "none",
                }}
              >
                <NavLink>Login</NavLink>
              </Link>
            )}
          </UserContainer>
        </DispayWrapper>
      </HeaderBody>
    </>
  );
};

export default Header;
