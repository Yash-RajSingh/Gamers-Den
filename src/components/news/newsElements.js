import styled from "styled-components";
import { FilterTitle } from "../filter/filterElements";

export const NewsContainer = styled.div`
  width: 92%;
  margin: 2% auto;
  @media (max-width: 720px) {
    margin-top: 5%;
  }
`;

export const NewsHeading = styled(FilterTitle)`
  font-size: 2.7rem;
  color: var(--white);
  margin: 0;
  @media (max-width: 720px) {
    font-size: 1.5rem;
  }
`;

export const NewsWrapper = styled.div`
  width: 90%;
`;

export const NewsCard = styled.div`
  width: 92%;
  margin: 3% 1%;
  display: flex;
  background: var(--light-grey);
  color: var(--text-grey);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid var(--grey);
  @media (max-width: 720px) {
    width: 95%;
    display: block;
    margin: 6% auto;
  }
`;

export const NewsImage = styled.img`
  width: 30%;
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const NewsDetails = styled.div`
  width: 100%;
  font-family: "Roboto Slab";
  padding: 1rem 1.5rem;
  @media (max-width: 720px) {
    padding: 0.5rem;
  }
`;

export const NewsTitle = styled.p`
  font: 1.8rem "aznLight";
  font-weight: 0;
  cursor: pointer;
  @media (max-width: 720px) {
    font-size: 1.1rem;
  }
`;

export const NewsDescription = styled.p`
  font-size: 1rem;
  font-family: 'Roboto Slab';
  margin-top: 3%;
  margin-bottom: 4%;
  font-weight: 500;
  letter-spacing: 1.5px;
`;

export const NewsAuthors = styled.span`
  color: var(--text-grey);
  font-weight: 400;
  border-radius: 0.3rem;
  font: 0.85rem "Roboto Slab";
  padding: 0.3rem 0.7rem 0.3rem 0;
  @media (max-width: 720px) {
    font-size: 0.7rem;
    padding: 0;
  }
`;

export const NewsTimePosted = styled(NewsAuthors)`
  /* float: right; */
  margin-left: 5%;
`;

export const SeparatorLine = styled.div`
  width: 93%;
  border-top: 0.5px solid rgb(0, 0, 0, 0.4);
  @media (max-width: 720px) {
    display: none;
  }
`;
