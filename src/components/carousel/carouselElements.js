import { motion } from "framer-motion";
import styled from "styled-components";

export const CarouselWrapper = styled.div`
  /* border: 1px solid white; */
  width: 75%;
  margin: 3% auto 2% auto;
`;
export const CarouselContainer = styled(motion.div)`
  /* border: 1px solid black; */
  overflow: hidden;
  cursor: grab;
`;

export const InnerCarousel = styled(motion.div)`
  display: flex;
  gap: 2.5%;
`;

export const CarouselItem = styled.div`
  min-width: 85%;
  /* min-width: 47rem; */
  height: 30rem;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  /* border: 1px solid pink; */
  cursor: grab;
`;
