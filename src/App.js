import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StoriesScene from "scenes/StoriesScene/StoriesScene";
import { Container, Grid } from "semantic-ui-react";
import MainMenu from "components/Menu/MainMenu";
import CategoryMenu from "components/Menu/CategoryMenu";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainMenu />
          <CategoryMenu />
          <Container>
            <Grid>
              <Grid.Column width={10}>
                <Route path="/" component={StoriesScene} />
              </Grid.Column>
            </Grid>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
