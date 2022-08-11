import styled from "styled-components";
import { LoginButton } from "../login/loginElements";

export const ErrorWrapper = styled.div`
  margin: 3% 0;
  text-align: center;
`;

export const ErrorImage = styled.img`
  width: 25%;
  margin-top: 3%;
  background: white;
  border: 0.5px solid rgba(#000, 0.03);
  z-index: 3;
  box-shadow: 0px 0px 20px 10px #fff;
`;
export const ErrorHeading = styled.h1`
  font-size: 3rem;
  color: var(--white);
  font-family: "aznLight";
  letter-spacing: 2px;
`;

export const ErrorText = styled.p`
    margin-top: 3%;
    font-size: 2rem;
    color: var(--text-grey);
    font-family: 'aznLight';
`

export const ErrorButton = styled(LoginButton)`
    font-size: 1.5rem;
    padding: 0.5rem 1.7rem;
    margin-top: 3%;
`