import './App.scss';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header/>
          <Home/>
        </Route>
        <Route exact path="/:name">
          <Header/>
          <Detail/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
