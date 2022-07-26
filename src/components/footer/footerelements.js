import styled from "styled-components";
import { Title } from "../header/headerElements";

export const FooterBody = styled.div`
  margin-top: 5%;
  /* border: 2px solid white; */
  @media (max-width: 720px) {
    margin-top: 10%;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
`;

export const FooterTitle = styled(Title)`
  font: 2rem "aznLight";
  font-weight: 0;
  margin-left: 2%;
  @media (max-width: 720px) {
    font-size: 1.25rem;
  }
`;

export const FooterDescription = styled.p`
  color: var(--text-grey);
  width: 40%;
  font: 1rem "cVector";
  letter-spacing: 1px;
  margin: 1.5% 0 1% 2%;
  @media (max-width: 720px) {
    width: 80%;
    font-size: 0.5rem;
  }
`;

export const Copyright = styled.span`
  font: 0.7rem "cVector";
  color: var(--white);
  letter-spacing: 2px;
  margin-left: 2%;
  @media (max-width: 720px) {
    margin-left: 4%;
    padding-bottom: 0.5rem;
    font-size: 0.5rem;
  }
`;
