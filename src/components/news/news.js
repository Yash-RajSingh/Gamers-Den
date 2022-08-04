import { useContext, useState, useEffect } from "react";
import { newsContext } from "../../context/context";
import { LastMessage } from "../landing/landingElements";
import {
    NewsAuthors,
  NewsCard,
  NewsContainer,
  NewsDescription,
  NewsDetails,
  NewsHeading,
  NewsImage,
  NewsTimePosted,
  NewsTitle,
  NewsWrapper,
  SeparatorLine,
} from "./newsElements";

const NewsItem = (data) => {
  const [show, setShow] = useState(true);
  useEffect(()=>{
    if(window.innerWidth > 720){
      setShow(!show)
    }
  }, [])
  return (
    <>
      <NewsCard>
        <NewsImage src={data.data.thumbnail} alt={data.data.title}/>
        <NewsDetails onClick={()=> window.open(`https://gamerant.com/${data.data.sourceLink}`)}>
            <NewsTitle>{data.data.title}</NewsTitle>
            <NewsDescription style={{ display: show ? "none" : "block" }}>{data.data.description}</NewsDescription>
            <NewsAuthors onClick={()=> window.open(`https://gamerant.com/${data.data.authorProfile}`)} style={{cursor: "pointer"}}> By {data.data.author}</NewsAuthors>
            <NewsTimePosted> {data.data.time}</NewsTimePosted>
        </NewsDetails>
      </NewsCard>
    </>
  );
};

const News = () => {
  const { news, setNews } = useContext(newsContext);
  return (
    <>
      {news && (
        <NewsContainer>
          <NewsHeading>Trending Game News</NewsHeading>
          <NewsWrapper>
            {news.map((element, index) => {
              return (
                <>
                  <NewsItem key={index} data={element} />
                  <SeparatorLine></SeparatorLine>
                </>
              );
            })}
          </NewsWrapper>
          <LastMessage>That's all for now!</LastMessage>
        </NewsContainer>
      )}
    </>
  );
};

export default News;
