import styled from "styled-components";
import { FilterTitle } from "../filter/filterElements";
export const GameDataBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 92%;
  margin: 0 auto;
  @media (max-width: 720px) {
    width: 95%;
  }
`;
export const GameCard = styled.div`
  width: 18rem;
  margin-top: 5%;
  background: var(--light-grey);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  @media (max-width: 720px) {
    width: 45%;
  }
`;

export const GameThumbnail = styled.img`
  width: 100%;
  border-radius: 0.25rem;
`;

export const GameData = styled.div`
  width: 100%;
  padding: 0.5rem;
`;

export const GameTitle = styled.p`
  color: var(--text-grey);
  overflow: hidden;
  height: 1.8rem;
  margin-top: 1%;
  font: 1.5rem "aznLight";
  cursor: pointer;
  font-weight: 0;
  @media (max-width: 720px) {
    font-size: 1rem;
    height: 1rem;
  }
`;
export const GameDescription = styled.p`
  color: var(--text-grey);
  height: 2rem;
  /* font: 0.8rem "cVector"; */
  font: 0.8rem "Roboto Slab";
  letter-spacing: 1px;
  margin-top: 3%;
  margin-bottom: 5%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;

  @media (max-width: 720px) {
    margin-top: 2%;
    font-size: 0.6rem;
    font-weight: 600;
    height: 1.75rem;
    margin-bottom: 2%;
  }
`;

export const SubGameData = styled.div`
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: 720px) {
    /* flex-direction: column; */
    align-items: flex-start;
  }
`;
export const GamePlatform = styled.span`
  color: var(--text-grey);
  background: var(--dark-grey);
  border: 1px solid var(--grey);
  border-radius: 0.3rem;
  font: 0.8rem "Roboto Slab";
  padding: 0.3rem 0.7rem;
  @media (max-width: 720px) {
    font-size: 0.5rem;
  }
`;
export const GameGenre = styled(GamePlatform)``;

export const SeeMore = styled.button`
  border: 1px solid black;
  border-radius: 0.25rem;
  margin: 5% 45% 0 45%;
  font: 1rem "Roboto Slab";
  padding: 0.5rem 1rem;
  letter-spacing: 1px;
  background: var(--blue);
  color: var(--white);
  text-shadow: -1px 2px 0 rgb(0, 0, 0, 60%);
  cursor: pointer;
  @media (max-width: 720px) {
    margin: 7% 0 0 35%;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`;

export const LastMessage = styled(FilterTitle)`
  text-align: center;
  @media (max-width: 720px) {
    margin-top: 10%;
  }
`