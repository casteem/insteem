import React from "react";
import { Header, List, Button } from "semantic-ui-react";
import { map } from "ramda";
import { Link } from "react-router-dom";
import styled from "styled-components";

import UserLink from "components/User/UserLink";

const journalists = [
  {
    name: "elizbethleavos",
    desc:
      "Independent journalists" +
      " from Disobedient Media. Covers" +
      " politics and freedom of speech.",
    tags: ["politics", "wikileaks"]
  },
  {
    name: "joshsigurdson",
    desc:
      'Journalist at World Alternative Media. Does video" +\n' +
      '    " interviews on DTube, talks about money, crypto and business.',
    tags: ["business", "politics", "cryptocurrency"]
  },

  {
    name: "patricklancaster",
    desc:
      "Video and photo journalists. Reports exclusively about the war in" +
      " Ukrain",
    tags: ["politics", "war", "ukraine"]
  },
  {
    name: "news2share",
    desc:
      "An online media team from Washington. Range from" +
      "  local, national to international politics",
    tags: ["politics"]
  },
  {
    name: "cyberwarrior",
    desc:
      "Blogger and crypto expert. Covers a wide" +
      " spectrum from politics, technology up to food.",
    tags: ["politics", "technology", "life"]
  }
];

const renderJournalists = map(user => (
  <List.Item>
    <List.Content floated="right">
      <Button
        size="tiny"
        color="blue"
        as="a"
        href={`https://steemit.com/@${user.name}`}
        target="_blank"
      >
        Profile on Steemit
      </Button>
    </List.Content>
    <List.Content>
      <List.Header as={Link} to={`/@${user.name}`}>
        {user.name}
      </List.Header>
      <List.Description>{user.desc}</List.Description>
    </List.Content>
  </List.Item>
));

const JournalistsScene = () => {
  return (
    <div>
      <Header>Journalists on Steem</Header>

      <List size="big">{renderJournalists(journalists)}</List>
    </div>
  );
};

export default JournalistsScene;
