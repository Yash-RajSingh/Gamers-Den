import {
  FormInput,
  GamerImage,
  GoogleIcon,
  GoogleLogin,
  InputWrapper,
  LoginBody,
  LoginButton,
  LoginContainer,
  LoginForm,
  LoginLabel,
  LoginTitle,
  LoginWrapper,
} from "./loginElements";
import Soldier3 from "../../assets/group.png";
import Google from "../../assets/google.png";
import { useState, useRef, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { provider, auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/context";

const Login = () => {
  const [show, setShow] = useState(false);
  const LoginEmailRef = useRef();
  const LoginPassRef = useRef();
  const SignupEmailRef = useRef();
  const SignupPassRef = useRef();
  const { authenticated, setAuthenticated } = useContext(authContext);
  let navigate = useNavigate();
  const SignupWithEmail = () => {
    createUserWithEmailAndPassword(
      auth,
      SignupEmailRef.current.value,
      SignupPassRef.current.value
    )
      .then((result) => {
        console.log(result);
        setAuthenticated(true)
        sessionStorage.setItem('isauth', true)
        navigate("/disscussion");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const LoginWithEmail = () => {
    signInWithEmailAndPassword(
      auth,
      LoginEmailRef.current.value,
      LoginPassRef.current.value
    )
      .then((result) => {
        console.log(result);
        setAuthenticated(true)
        sessionStorage.setItem('isauth', true)
        navigate("/disscussion");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const SignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setAuthenticated(true)
        sessionStorage.setItem('isauth', true)
        navigate("/disscussion");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <LoginBody>
        <LoginTitle>Join the faternity of gamers</LoginTitle>
        <LoginContainer>
          <GamerImage src={Soldier3} />
          <LoginWrapper>
            <LoginForm style={{ marginLeft: show ? "-21rem" : "0" }}>
              <InputWrapper style={{ textAlign: "center", margin: "2% auto" }}>
                <LoginLabel>Don't have an account?</LoginLabel>
                <LoginButton
                  style={{ marginTop: "5%" }}
                  onClick={(e) => {
                    e.preventDefault();
                    setShow(!show);
                  }}
                >
                  SignUp
                </LoginButton>
              </InputWrapper>
              <InputWrapper>
                <LoginLabel>E-mail</LoginLabel>
                <FormInput
                  ref={LoginEmailRef}
                  type={"email"}
                  placeholder={"Enter your email"}
                />
              </InputWrapper>
              <InputWrapper>
                <LoginLabel>Password</LoginLabel>
                <FormInput
                  ref={LoginPassRef}
                  type={"password"}
                  placeholder={"Enter your password"}
                />
              </InputWrapper>
              <InputWrapper style={{ textAlign: "center", marginTop: "10%" }}>
                <LoginButton
                  onClick={(e) => {
                    e.preventDefault();
                    LoginWithEmail();
                  }}
                >
                  Login
                </LoginButton>
                <GoogleLogin
                  onClick={(e) => {
                    e.preventDefault();
                    SignInWithGoogle();
                  }}
                >
                  <GoogleIcon src={Google} /> Login With Google
                </GoogleLogin>
              </InputWrapper>
            </LoginForm>

            <LoginForm>
              <InputWrapper style={{ textAlign: "center", margin: "2% auto" }}>
                <LoginLabel>Already have an account?</LoginLabel>
                <LoginButton
                  style={{ marginTop: "5%" }}
                  onClick={(e) => {
                    e.preventDefault();
                    setShow(!show);
                  }}
                >
                  Login
                </LoginButton>
              </InputWrapper>
              <InputWrapper>
                <LoginLabel>E-mail</LoginLabel>
                <FormInput
                  ref={SignupEmailRef}
                  type={"email"}
                  placeholder={"Enter your email"}
                />
              </InputWrapper>
              <InputWrapper>
                <LoginLabel>Password</LoginLabel>
                <FormInput
                  ref={SignupPassRef}
                  type={"password"}
                  placeholder={"Enter your password"}
                />
              </InputWrapper>
              <InputWrapper style={{ textAlign: "center", marginTop: "10%" }}>
                <LoginButton
                  onClick={(e) => {
                    e.preventDefault();
                    SignupWithEmail();
                  }}
                >
                  Signup
                </LoginButton>
                <GoogleLogin
                  onClick={(e) => {
                    e.preventDefault();
                    SignInWithGoogle();
                  }}
                >
                  <GoogleIcon src={Google} /> Signup With Google
                </GoogleLogin>
              </InputWrapper>
            </LoginForm>
          </LoginWrapper>
        </LoginContainer>
      </LoginBody>
    </>
  );
};

export default Login;
