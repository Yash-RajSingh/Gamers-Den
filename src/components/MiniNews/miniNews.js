import { useEffect, useContext } from "react";
import { newsContext } from "../context/context";
import {
  MiniNewsContainer,
  MiniNewsHeading,
  MiniNewsImage,
  MiniNewsItem,
  MiniNewsTitle,
  MiniNewsWrapper,
  SeeMore,
} from "./miniNewsElements";
import { useNavigate } from "react-router-dom";

const MiniNews = () => {
  const { news, setNews } = useContext(newsContext);
  let navigate = useNavigate();
  useEffect(() => {
    const getNews = async () => {
      const request = await fetch(
        "https://gamers-den-news.herokuapp.com/gameNews"
      );
      const response = await request.json();
      setNews(response);
    };
    getNews();
  }, []);
  return (
    <>
      <MiniNewsContainer>
        <MiniNewsHeading style={{ marginLeft: 0 }}>Game News</MiniNewsHeading>
        <MiniNewsWrapper>
          {news &&
            news.slice(0, 2).map((element, index) => {
              return (
                <>
                  <MiniNewsItem
                    key={index}
                    onClick={() =>
                      window.open(`https://gamerant.com/${element.sourceLink}`)
                    }
                  >
                    <MiniNewsImage src={element.thumbnail} />
                    <MiniNewsTitle>{element.title}.</MiniNewsTitle>
                  </MiniNewsItem>
                </>
              );
            })}
        </MiniNewsWrapper>
        <SeeMore onClick={() => navigate("/news")}>Read More ...</SeeMore>
      </MiniNewsContainer>
    </>
  );
};

export default MiniNews;
