import React from "react";
import { Grid, Header, Label, Item, Button } from "semantic-ui-react";
import { map } from "ramda";
import { Link } from "react-router-dom";

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
    name: "fedescholari",
    desc:
      "Italian (?) writer covering business, crypto" +
      " and money related topics ",
    tags: ["cryptocurrency", "money", "china"]
  },
  {
    name: "joshsigurdson",
    desc:
      'Journalist at World Alternative Media. Does video" +\n' +
      '    " interviews on DTube, talks about money, crypto and business.',
    tags: ["business", "politics", "cryptocurrency"]
  },
  {
    name: "news2share",
    desc:
      "An online media team from Washington. Range from" +
      "  local, national to international politics",
    tags: ["politics", "technology"]
  },
  {
    name: "ocupation",
    desc:
      "Writes about everything that comes to his mind," +
      " gaming, conspiracy, photography, health and so on.",
    tags: ["politics", "geoengineering", "conspiracy"]
  },
  {
    name: "patricklancaster",
    desc:
      "Video and photo journalists. Reports exclusively about the war in" +
      " Ukrain",
    tags: ["politics", "war", "ukraine"]
  },
  {
    name: "cyberwarrior",
    desc:
      "Blogger and crypto expert. Covers a wide" +
      " spectrum from politics, technology up to food.",
    tags: ["politics", "technology", "life"]
  },
  {
    name: "adamcarter",
    desc: "Writes about technical stuff at Disobedient" + " Media.",
    tags: ["technology"]
  },
  {
    name: "leecamp",
    desc:
      'Journalist from Washington. Host of "Redacted' +
      ' Tonight", a comedy show on Youtube (so far).',
    tags: ["comedy", "politics", "life"]
  },
  {
    name: "greenmask9",
    desc:
      "	New author from the Czech Republik. Covers health," +
      " psychology, sports and politics.",
    tags: ["health", "politics", "sports", " psychology"]
  },
  {
    name: "eleanorgoldfield",
    desc:
      "Socio-political engaged activist," +
      " journalist and poet from Washington. Hosts the daily show `Act out.`",
    tags: ["politics", "science"]
  }
];

const blockedJournalists = [
  {
    name: "sarahlouise",
    desc:
      "Posts daily news about anything. The level of english in the" +
      " articles doesn't fit with the one in the comments and e.g. the" +
      " `introduceyourself` post. No plagiarism detected so far.",
    tags: []
  }
];

const renderTags = map(label => <Label color="green">{label}</Label>);

const renderJournalists = map(user => (
  <Item key={user.name}>
    <Item.Content>
      <Item.Header as={Link} to={`/@${user.name}`}>
        {user.name}
      </Item.Header>
      <Item.Description>{user.desc}</Item.Description>
      <Item.Extra>
        <Button
          floated="right"
          size="tiny"
          color="blue"
          as="a"
          href={`https://steemit.com/@${user.name}`}
          target="_blank"
        >
          Blog on Steemit
        </Button>
        <Label.Group size="mini">{renderTags(user.tags)}</Label.Group>
      </Item.Extra>
    </Item.Content>
  </Item>
));

const JournalistsScene = () => {
  return (
    <Grid centered columns={1}>
      <Grid.Column>
        <Header>Journalists on Steem (Approved)</Header>

        <Item.Group divided>{renderJournalists(journalists)}</Item.Group>

        <Header>Unapproved Journalists </Header>
        <Item.Group divided>{renderJournalists(blockedJournalists)}</Item.Group>
      </Grid.Column>
    </Grid>
  );
};

export default JournalistsScene;
