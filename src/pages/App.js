import { GlobalSyle } from '../globalStyles/globalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import {newsContext, authContext} from '../context/context'
import { useState } from "react";
import NewsPage from './NewsPage/NewsPage';
import DiscussionPage from './DiscussionsPage/DiscussionPage';
import Error404 from '../components/error404/error404';

const App = () => {
  const [news, setNews] = useState();
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <>
    <authContext.Provider value={{authenticated, setAuthenticated}} >
    <newsContext.Provider value={{ news, setNews}}>
      <GlobalSyle />
      <Router>
        <Routes>
          <Route
            exact path="/"
            element={ <HomePage />}
            />
          <Route
            path="/login"
            element={ <LoginPage /> }
            />
          <Route
            path="/news"
            element={ <NewsPage /> }
            />
          <Route
            path="/discussion"
            element={ <DiscussionPage />}
            />
          <Route 
            path="*"
            element={ <Error404 />}
            />
        </Routes>
      </Router>
      </newsContext.Provider>
      </authContext.Provider>
    </>
  );
}

export default App;
