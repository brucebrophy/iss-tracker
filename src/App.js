import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IssTracker from "./pages/IssTracker";
import Stream from "./pages/Stream";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={IssTracker} />
          <Route path="/stream" component={Stream} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
