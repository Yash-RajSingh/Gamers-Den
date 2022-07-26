import styled from "styled-components";
import { FilterTitle } from "../filter/filterElements";

export const MiniNewsContainer = styled.div`
  width: 20%;
  margin-top: 1%;
  @media (max-width: 720px) {
    width: 90%;
    margin: 5% auto;
  }
  `;
export const MiniNewsHeading = styled(FilterTitle)`
  font-size: 1.7rem;
  color: var(--white);
`;

export const MiniNewsWrapper = styled.div`
  padding: 0.25rem;
  margin-top: 1.5%;
  @media (max-width: 720px) {
    margin-top: 0;
  }
`;

export const MiniNewsItem = styled.div`
  margin-top: 5%;
  background: var(--light-grey);
  cursor: pointer;
  @media (max-width: 720px) {
    margin-top: 3%;
    &:nth-child(2){
      margin-top: 6%;
    }
  }
`;
export const MiniNewsTitle = styled.p`
    padding: 0.25rem 0.5rem 0.5rem 0.5rem;
  font: 0.8rem "Roboto Slab";
  font-weight: bold;
  color: var(--text-grey);
`;
export const MiniNewsImage = styled.img`
  width: 100%;
  margin: 0 auto;
  height: 9.5rem;
`;

export const SeeMore = styled.span`
  font-size: 0.9rem;
  font-family: 'Roboto Slab';
  float: right;
  color: var(--text-grey);
  margin-top: 3%;
`