import styled from "styled-components";
import { UserImage } from "../discussion/discussionElements";

export const HeaderBody = styled.div`
  padding: 0.7rem 1rem 0.5rem 1rem;
  background: var(--darkest-grey);
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
`;


export const Title = styled.h1`
  font: 3rem "aznLight";
  margin-left: 3%;
  color: var(--white);
  @media (max-width: 720px) {
    font-size: 2rem;
    margin-left: 0;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  width: fit-content;
  gap: 5%;
  margin-right: 5%;
  @media (max-width: 720px) {
    z-index: 10;
    position: absolute;
    flex-direction: column;
    width: 100%;
    background: var(--darkest-grey);
    margin-top: 10%;
    right: 0;
    left: 0;
  }
`;

export const DispayWrapper = styled.div`
  margin-right: 2%;
  @media (max-width: 720px) {
    font-size: 0.6rem;
  }
`;
export const NavLink = styled.p`
  font: 1.5rem "aznLight";
  padding: 0.5rem;
  color: var(--blue);
  font-weight: 500;
  @media (max-width: 720px) {
    font-size: 1rem;
    text-align: right;
    margin-right: 5%;
  }
`;

export const HamburgerIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-left: auto;
  position: absolute;
  top: 2%;
  right: 5%;
  display: none;
  @media (max-width: 720px) {
    display: block;
  }
`;

export const ProfileImage = styled(UserImage)``