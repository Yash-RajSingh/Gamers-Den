import styled from "styled-components";

export const LoginBody = styled.div`
  margin-top: 2%;
  @media (max-width: 720px) {
    margin-top: 5%;
  }
`;
export const LoginTitle = styled.p`
  font-size: 2rem;
  font-family: "aznLight";
  color: var(--white);
  margin-left: 4%;
  @media (max-width: 720px) {
    font-size: 1.25rem;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 3%;
  @media (max-width: 720px) {
    flex-direction: column-reverse;
  }
`;

export const GamerImage = styled.img`
  width: 45%;
  @media (max-width: 720px) {
    margin-top: 8%;
    width: 70%;
  }

`;
export const LoginWrapper = styled.div`
  width: 21rem;
  display: flex;
  gap: 5%;
  overflow: hidden;
  align-items: flex-start;
  @media (max-width: 720px) {
    margin-top: 2%;
  }
`;

export const LoginForm = styled.form`
  min-width: 20rem;
  padding: 1rem;
  background: rgba(79, 79, 79, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(100px);
  border-radius: 0.25rem;
  border: 1px solid rgba(200, 200, 200, 0.2);
  transition: 0.5s;
`;
export const InputWrapper = styled.div`
  margin: 7% auto;
`;

export const LoginLabel = styled.p`
  font-size: 1.25rem;
  color: var(--white);
  font-family: "Roboto Slab";
`;
export const FormInput = styled.input.attrs({
  autocomplete: "off",
})`
  width: 100%;
  padding: 0.35rem 0.5rem;
  margin-top: 3%;
  font-family: "Roboto Slab";
  background: #ffffffff;
  border: 0.5px solid rgb(0, 0, 0, 0.8);
  border-radius: 0.15rem;
  &::placeholder {
    color: var(--text-grey);
  }
  &:focus {
    outline: none;
    border: 1px solid rgb(0, 0, 0, 10);
  }
`;
export const LoginButton = styled.button`
  background: var(--white);
  color: black;
  font-family: "Roboto Slab";
  padding: 0.5rem 1.25rem;
  font-weight: 900;
  outline: none;
  border: 0.5px solid rgb(0, 0, 0, 1);
  border-radius: 0.2rem;
  cursor: pointer;
`;
export const GoogleLogin = styled.div`
  background: var(--white);
  color: black;
  font: 0.8rem "Roboto Slab";
  padding: 0.5rem 1rem;
  font-weight: 900;
  outline: none;
  width: 65%;
  border: 0.5px solid rgb(0, 0, 0, 1);
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  margin: 7% auto;
  gap: 5%;
`;
export const GoogleIcon = styled.img`
  width: 1.1rem;
  height: 1.1rem;
  box-shadow: 5px 5px 5px solid black;
`;
