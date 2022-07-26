import {
  CarouselContainer,
  CarouselWrapper,
  CarouselItem,
  InnerCarousel,
  CarouselImage,
  CarouselTitle,
  ItemDescription,
  ItemPlatform,
  CarouselDetails,
  ItemGenre
} from "./carouselElements";
import { gameListContext } from "../context/context";
import { useContext, useRef, useState, useEffect } from "react";
import { FilterTitle } from "../filter/filterElements";

const Item = ({ data }) => {
  return (
    <>
      <CarouselItem>
        <CarouselImage src={data.thumbnail} />
        <CarouselDetails>
          <CarouselTitle>{data.title}</CarouselTitle>
          <ItemDescription>{data.short_description}</ItemDescription>
          <ItemPlatform>{data.platform}</ItemPlatform>
          <ItemGenre>{data.genre}</ItemGenre>
        </CarouselDetails>
      </CarouselItem>
    </>
  );
};

const GameCarousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setTimeout(function () {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, 1500);
  }, []);

  const { gameList, setGameList } = useContext(gameListContext);
  if (gameList != null) {
    function isPopular(currentGame) {
      return (
        (currentGame.id === 516) |
        (currentGame.id === 515) |
        (currentGame.id === 466) |
        (currentGame.id === 452) |
        (currentGame.id === 23) |
        (currentGame.id === 24)
      );
    }
    var popularGames = gameList.filter(isPopular);
  }

  return (
    <>
      <CarouselWrapper>
        <FilterTitle style={{marginLeft: 0, marginTop: "2.5%"}}>Most Popular Games</FilterTitle>
        <CarouselContainer ref={carousel} whileTap={{ cursor: "grabbing" }}>
          <InnerCarousel drag="x" dragConstraints={{ right: 0, left: -width }}>
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
