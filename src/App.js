import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { ApolloProvider } from "react-apollo";
import client from "services/graphql/client";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import configureStore from "services/state/store";

import Layout from "scenes/Layout/Layout";
import IndexScene from "scenes/Index/IndexScene";
import SigninScene from "scenes/Auth/SigninScene/Signin.scene";
import StoryScene from "scenes/StoryScene";
import StoryPublishScene from "scenes/Story/StoryPublishScene";
import CategoryScene from "scenes/CategoryScene/CategoryScene";
import MainMenu from "components/Menu/MainMenu";
import CategoryMenu from "components/Menu/CategoryMenu";
import ProfileScene from "scenes/Profile/ProfileScene";
import MentionsScene from "scenes/Mentions/MentionsScene";
import JournalistsScene from "scenes/Journalists/JournalistsScene";
import TeamScene from "scenes/Team/TeamScene/TeamScene";
import AboutScene from "scenes/Static/AboutScene";
import RulesScene from "scenes/Static/RulesScene";

let { store, persistor } = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApolloProvider client={client}>
            <Router>
              <Layout>
                <div className="App">
                  <MainMenu />
                  <CategoryMenu />
                  <Container>
                    <Route exact path="/@:username" component={ProfileScene} />
                    <Route exact path="/" component={IndexScene} />
                    <Route
                      exact
                      path="/journalists"
                      component={JournalistsScene}
                    />
                    <Route exact path="/new" component={StoryPublishScene} />
                    <Route exact path="/about" component={AboutScene} />
                    <Route exact path="/rules" component={RulesScene} />
                    <Route exact path="/team" component={TeamScene} />
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
                  </Container>
                </div>
              </Layout>
            </Router>
          </ApolloProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
