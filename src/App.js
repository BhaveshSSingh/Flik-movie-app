import "./App.css";
import NavBar from "./components//navbar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/search/Search";
import MoviesPage from "./pages/MoviesPage";
import TvShows from "./pages/TvShows";
import TrendingPage from "./pages/home/Home";
import GenrePage from "./pages/search/GenrePage";

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={TrendingPage} />
          <Route path="/movie" exact component={MoviesPage} />
          <Route path="/tvshows" exact component={TvShows} />
          <Route path="/search" exact component={Search} />
          <Route path="/genre" exact component={GenrePage} />
        </Switch>
      </Router>
    </>
  );
}
