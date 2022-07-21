import './App.css'
import { GlobalSyle } from '../globalStyles/globalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';

function App() {
  return (
    <>
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
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
