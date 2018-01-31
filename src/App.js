import React, { Component } from "react";
import "./App.css";
import { ApolloProvider } from "react-apollo";
import client from "services/graphql/client";
import { Container, Grid, Segment, Header, Label } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import configureStore from "services/state/store";

import SigninScene from "scenes/Auth/SigninScene/Signin.scene";
import StoriesScene from "scenes/StoriesScene";
import StoryScene from "scenes/StoryScene";
import CategoryScene from "scenes/CategoryScene/CategoryScene";
import MainMenu from "components/Menu/MainMenu";
import CategoryMenu from "components/Menu/CategoryMenu";
import ProfileScene from "scenes/Profile/ProfileScene";
import MentionsScene from "scenes/Mentions/MentionsScene";

let { store, persistor } = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApolloProvider client={client}>
            <Router>
              <div className="App">
                <MainMenu />
                <CategoryMenu />
                <Container>
                  <Grid>
                    <Grid.Column width={10}>
                      <Route
                        exact
                        path="/@:username"
                        component={ProfileScene}
                      />
                      <Route exact path="/" component={CategoryScene} />
                      <Route exact path="/signin" component={SigninScene} />
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
                      <Route
                        exact
                        path="/mentions/@:username/:page?"
                        component={MentionsScene}
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
                            as the first tag for now
                          </li>
                          <li>
                            Use at least one of the tags from the main menu
                          </li>
                        </ul>
                      </Segment>
                    </Grid.Column>
                  </Grid>
                </Container>
              </div>
            </Router>
          </ApolloProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
