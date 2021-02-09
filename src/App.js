import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Chat from "./pages/Chat";
import Favourite from "./pages/Favourite";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <Route path="/chat" exact component={Chat} />
          <Route path="/favourite" exact component={Favourite} />
        </Switch>
      </Router>
    </>
  );
}
