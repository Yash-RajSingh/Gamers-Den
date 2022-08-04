import Loader from "../../components/loader/loader";
import { Layout } from "../../components/layout/layout";
import Landing from "../../components/landing/landing";
import { gameListContext } from "../../context/context";
import { useState } from "react";
import GameCarousel from "../../components/carousel/carousel";
import styled from "styled-components";
import MiniNews from "../../components/MiniNews/miniNews";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const HomePage = () => {
  const [gameList, setGameList] = useState();
  return (
    <gameListContext.Provider value={{ gameList, setGameList }}>
      <Loader />
      <Layout>
        <MainWrapper>
          <GameCarousel />
          <MiniNews />
        </MainWrapper>
        <Landing />
      </Layout>
    </gameListContext.Provider>
  );
};

export default HomePage;
