import { useState } from "react";
import { useEffect, useContext } from "react";
import { gameListContext } from "../context/context";
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

const Landing = () => {
  const { gameList, setGameList } = useContext(gameListContext);
  const [count, setCount] = useState(50)
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_KEY,
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const GetGameData = async () => {
      const request = await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
        options
      );
      const response = await request.json();
      console.log("=> ", response)
      if (response.length !== null) {
        setGameList(response);
      }
    };
    // console.log("=>", gameList)
    GetGameData();
  }, []);

  return (
    <>
      <GameDataBody>
        {gameList &&
          gameList.map((current) => {
            return (
              <>
                <GameCardComponent
                  key={current.id}
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
    </>
  );
};

export default Landing;
