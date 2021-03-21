import './App.css';
import Destination from './Components/Destination/Destination';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import SearchRide from './Components/SearchRide/SearchRide';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from '../src/Components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/Login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/ride/:name">
            <Destination></Destination>
          </PrivateRoute>
          <PrivateRoute path="/searchRide/:name/:pickFrom/:pickTo">
            <SearchRide></SearchRide>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
