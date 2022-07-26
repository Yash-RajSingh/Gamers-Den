import './App.css'
import { GlobalSyle } from '../globalStyles/globalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import {newsContext} from '../components/context/context'
import { useState } from "react";
import NewsPage from './NewsPage/NewsPage';

const App = () => {
  const [news, setNews] = useState();
  return (
    <>
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
        </Routes>
      </Router>
      </newsContext.Provider>
    </>
  );
}

export default App;
