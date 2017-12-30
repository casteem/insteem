import React, { Component } from "react";
import "./App.css";
import StoriesScene from "scenes/StoriesScene/StoriesScene";
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Insteem</h1>
          <h2>News on Steem</h2>
        </header>
        <Container>
          <StoriesScene />
        </Container>
      </div>
    );
  }
}

export default App;
