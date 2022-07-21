import {
  CarouselContainer,
  CarouselWrapper,
  CarouselItem,
  InnerCarousel,
} from "./carouselElements";
import { gameListContext } from "../context/context";
import { useContext, useRef, useState, useEffect } from "react";

const Item = ({ data }) => {
  return (
    <>
      <CarouselItem img={data.thumbnail}></CarouselItem>
    </>
  );
};

const GameCarousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const innerCarousel = useRef();
  useEffect(() => {
    setTimeout(function(){
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, 1500)
  }, []);

  const { gameList, setGameList } = useContext(gameListContext);
  if (gameList != null) {
    function isPopular(currentGame) {
      return (
        (currentGame.id === 516) |
        (currentGame.id === 515) |
        (currentGame.id === 466) |
        (currentGame.id === 452) |
        (currentGame.id === 24)
      );
    }
    var popularGames = gameList.filter(isPopular);
  }

  const handleRightScroll = () =>{
    innerCarousel.scrollX(100)
  }

  return (
    <>
      <CarouselWrapper>

        <CarouselContainer ref={carousel} whileTap={{ cursor: "grabbing" }}>
          <InnerCarousel ref={innerCarousel} drag="x" dragConstraints={{ right: 0, left: -width }}>
            {popularGames
              ? popularGames.map((element) => {
                  return (
                    <>
                      <Item data={element} />
                    </>
                  );
                })
              : ""}
          </InnerCarousel>
        </CarouselContainer>
      </CarouselWrapper>
    </>
  );
};

export default GameCarousel;
