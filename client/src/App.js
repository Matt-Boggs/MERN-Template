import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mocks from "./pages/Mocks";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/mocks"]}>
            <Mocks />
          </Route>
          <Route exact path="/mocks/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
