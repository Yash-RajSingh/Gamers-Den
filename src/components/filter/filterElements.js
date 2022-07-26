import styled from "styled-components";

export const FilterContainer = styled.div`
  margin: 2% auto 0 auto;
  width: 80%;
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);
  padding-bottom: 0.5rem;
  @media (max-width: 720px) {
    margin-top: 5%;
    width: 100%;
  }
`;

export const FilterTitle = styled.h3`
  font: 2.25rem "aznLight";
  color: var(--white);
  text-shadow: -1px -1px 0 rgb(0, 0, 0, 30%);
  margin: 5% 0 0 5%;
  @media (max-width: 720px) {
    font-size: 1.5rem;
  }
`;

export const FilterWrapper = styled.div`
  margin-top: 3%;
  display: flex;
  gap: 2%;
  justify-content: space-evenly;
  align-items: flex-start;
  @media (max-width: 720px) {
    /* display: block; */
    margin-top: 0;
  }
`;

export const FilterItem = styled.div`
  width: fit-content;
`;

export const FilterLabel = styled.span`
  color: var(--text-grey);
  font: 1rem "Roboto Slab";
  font-weight: 600;
  letter-spacing: 1.5px;
  @media (max-width: 720px) {
    font-size: 0.8rem;
    display: none;
  }
`;
export const FilterSelect = styled.select`
  padding: .5rem;
  border: 0;
  background: var(--dark-grey);
  color: var(--white);
  font: 1rem "Roboto Slab";
  font-weight: 600;
  letter-spacing: 1.5px;
  @media (max-width: 720px) {
    margin-top: 2%;
    padding-left: 1rem;
    font-size: 0.8rem;
  }
`;

export const FilterOptions = styled.option`
  font: 0.8rem "Roboto Slab";
  padding: 1rem 0.5rem;
  background: var(--dark-grey);
`;

export const ClearFilters = styled.button`
  background: var(--blue);
  color: var(--white);
  font: 1rem "Roboto Slab";
  padding: 0.5rem 1.25rem;
  border: 1px solid black;
  border-radius: 0.25rem;
  letter-spacing: 1px;
  text-shadow: -1px 2px 0 rgb(0, 0, 0, 60%);
  cursor: pointer;
  @media (max-width: 720px) {
    margin-top: 2%;
    padding: 0.25rem 0.75rem;
    font-size: 0.8rem;
  }
`;
