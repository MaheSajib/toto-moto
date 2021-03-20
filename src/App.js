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



function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/Login">
            <Login></Login>
          </Route>
          <Route path="/ride/:name">
            <Destination></Destination>
          </Route>
          <Route path="/searchRide/:name">
            <SearchRide></SearchRide>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
