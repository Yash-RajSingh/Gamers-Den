import { motion } from "framer-motion";
import styled from "styled-components";
import { GamePlatform, GameTitle, GameGenre } from "../landing/landingElements";

export const CarouselWrapper = styled.div`
  width: 65%;
  @media (max-width: 720px) {
    width: 90%;
    margin: 3% auto;
  }
`;
export const CarouselContainer = styled(motion.div)`
  overflow: hidden;
  margin-top: 2%;
  @media (max-width: 720px) {
    margin-top: 3%;
  }
`;

export const InnerCarousel = styled(motion.div)`
  display: flex;
  gap: 2.5%;
  @media (max-width: 720px) {
    gap: 5%;
  }
`;

export const CarouselItem = styled.div`
  min-width: 65%;
  background: var(--light-grey);
  z-index: 2;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  padding-bottom: 0.5rem;
`;

export const CarouselImage = styled.img`
  width: 100%;
  z-index: 0;
`;

export const CarouselDetails = styled.div`
  padding: 0 0.5rem 0 0.5rem;
`;

export const CarouselTitle = styled(GameTitle)`
  font-size: 2rem;
  margin-top: 1%;
  @media (max-width: 720px) {
    font-size: 1.25rem;
    height: 1.2rem;
    margin-top: 5%;
  }
`;

export const ItemDescription = styled.p`
  margin-top: 2%;
  margin-bottom: 3%;
  color: var(--text-grey);
  font: 1rem "Roboto Slab";
  letter-spacing: 0.5px;
  @media (max-width: 720px) {
    font-size: 0.6rem;
  }
`;

export const ItemPlatform = styled(GamePlatform)`
  color: var(--text-grey);
  background: var(--dark-grey);
  border: 1px solid var(--grey);
  border-radius: 0.3rem;
  font: 0.8rem "Roboto Slab";
  padding: 0.3rem 0.7rem;
  @media (max-width: 720px) {
    font-size: 0.6rem;
  }
`;

export const ItemGenre = styled(GameGenre)`
  float: right;
  @media (max-width: 720px) {
    font-size: 0.6rem;
  }
`