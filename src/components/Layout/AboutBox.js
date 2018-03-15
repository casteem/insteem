import React from "react";
import { Segment, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AboutBox = () => {
  return (
    <div>
      <Header attached="top">
        <Link to="/about">About </Link>
      </Header>
      <Segment attached="bottom">
        Insteem will become a decentralised, rewarding news platform for
        independent journalism and create an international network of
        journalists, away from MSM.
      </Segment>
    </div>
  );
};

export default AboutBox;
