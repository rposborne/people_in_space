import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/landing";

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Switch>
            <Route path="/" component={Landing} />
            <Route component={Landing} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
