import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IssTracker from "./pages/IssTracker";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={IssTracker} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
