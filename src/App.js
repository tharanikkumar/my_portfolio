
import PopupCard from "./components/popup_card/PopupCard"; // <-- your new page
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Main from "./containers/Main";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/:type(project|experience)/:name" component={PopupCard} />
      </Switch>
    </Router>
  );
}

export default App;
