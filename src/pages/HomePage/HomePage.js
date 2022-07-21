import Loader from '../../components/loader/loader';
import { Layout } from '../../components/layout/layout';
import Landing from '../../components/landing/landing';
import { gameListContext } from '../../components/context/context';
import { useState } from 'react';
import GameCarousel from '../../components/carousel/carousel';


const HomePage = () => {
    const [gameList, setGameList] = useState()

    return (
        <gameListContext.Provider value={{gameList, setGameList}}>
            <Loader />
            <div>
                <Layout>
                    <GameCarousel />
                    <Landing />
                </Layout>
            </div>
        </gameListContext.Provider>
    );
}

export default HomePage;