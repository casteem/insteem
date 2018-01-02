import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Grid, Segment, Header, Label } from "semantic-ui-react";

import StoriesScene from "scenes/StoriesScene";
import StoryScene from "scenes/StoryScene";
import CategoryScene from "scenes/CategoryScene/CategoryScene";
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
                <Route exact path="/" component={StoriesScene} />
                <Route
                  exact
                  path="/categories/:category"
                  component={CategoryScene}
                />
                <Route
                  exact
                  path="/stories/:author/:permlink"
                  component={StoryScene}
                />
              </Grid.Column>
              <Grid.Column width={6}>
                <Header attached="top">How to</Header>
                <Segment attached>
                  <ul>
                    <li>Go to steemit.com</li>
                    <li>Create a new post</li>
                    <li>
                      Use{" "}
                      <Label color="blue" basic>
                        news
                      </Label>{" "}
                      as the first tag  for now
                    </li>
                    <li>Use at least one of the tags from the main menu</li>
                  </ul>
                </Segment>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
