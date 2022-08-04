import { useState } from "react";
import { useEffect, useContext } from "react";
import { gameListContext } from "../../context/context";
import FilterFunction from "../filter/filter";
import {
  GameDataBody,
  GameCard,
  GameTitle,
  GameThumbnail,
  GameDescription,
  SubGameData,
  GamePlatform,
  GameData,
  GameGenre,
  SeeMore,
  LastMessage,
} from "./landingElements";

const GameCardComponent = ({
  id,
  thumbnail,
  title,
  description,
  genre,
  platform,
  link,
}) => {
  const Redirect = (link) => {
    link && window.open(link);
  };
  return (
    <>
      <GameCard id={id} onClick={() => Redirect(link)}>
        <GameThumbnail src={thumbnail} />
        <GameData>
          <GameTitle>{title}</GameTitle>
          <GameDescription>
            {`${description.substring(0, 100)}....`}
          </GameDescription>
          <SubGameData>
            <GamePlatform> {platform}</GamePlatform>
            <GameGenre>{genre}</GameGenre>
          </SubGameData>
        </GameData>
      </GameCard>
    </>
  );
};

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_KEY,
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

const Landing = () => {
  const [show, setShow] = useState(true);
  const { gameList, setGameList } = useContext(gameListContext);
  const [gamesToDisplay, setGamesToDisplay] = useState();
  const [count, setCount] = useState(24);
  useEffect(() => {
    const GetGameData = async () => {
      const request = await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
        options
      );
      const response = await request.json();
      setGameList(response);
      setGamesToDisplay(response);
      console.log(response)
    };
    GetGameData();
  }, []);

  return (
    <>
    <FilterFunction gameList={gameList} setGamesToDisplay={setGamesToDisplay} />
      <GameDataBody>
        {gamesToDisplay &&
          gamesToDisplay.slice(0, count).map((current, index) => {
            return (
              <>
                <GameCardComponent
                  key={index}
                  id={current.id}
                  thumbnail={current.thumbnail}
                  title={current.title}
                  platform={current.platform}
                  description={current.short_description}
                  genre={current.genre}
                  link={current.game_url}
                />
              </>
            );
          })}
      </GameDataBody>
      <SeeMore style={{ display: show ? "block" : "none" }} onClick={()=> {
        setCount(count+25)
        console.log(count)
        // if(count>348){
        if(count >= gamesToDisplay.length){
          setShow((show) => !show)
        }
        }}>See More</SeeMore>
        <LastMessage style={{ display: show ? "none" : "block" }} >That's all for now!</LastMessage>
    </>
  );
};

export default Landing;
