import React from "react";
import { Grid, Header, Label, Card, Button, Icon } from "semantic-ui-react";
import { map } from "ramda";
import { Link } from "react-router-dom";

const journalists = [
  {
    name: "adamcarter",
    desc: "Writes about technical stuff at Disobedient Media.",
    tags: ["technology"],
    location: "USA"
  },
  {
    name: "ameliabartlett",
    desc:
      "Writer and Photographer from East Tennessee" +
      " covering all aspects of life and supports women via" +
      "  @ladiesofsteemit.",
    tags: ["photography", "womanpower", " ladiesofsteemit"],
    location: "Knoxville, TN, US"
  },
  {
    name: "cyberwarrior",
    desc:
      "Blogger and crypto expert. Covers a wide" +
      " spectrum from politics, technology up to food.",
    tags: ["politics", "technology", "life"]
  },
  {
    name: "didic",
    desc:
      "Recovering journalist from Israel, currently writing" +
      " about" +
      " geeky books, nerdy entertainment, and social justice.",
    tags: ["books", "tv", "film", "culture"],
    location: "Israel"
  },
  {
    name: "eleanorgoldfield",
    desc:
      "Socio-political engaged activist," +
      " journalist and poet from Washington. Hosts the daily show `Act out.`",
    tags: ["politics", "science"],
    location: "Washington, D.C., US"
  },
  {
    name: "elizbethleavos",
    desc:
      "Independent journalists" +
      " from Disobedient Media. Covers" +
      " politics and freedom of speech.",
    tags: ["politics", "wikileaks"],
    location: "USA"
  },
  {
    name: "fedescholari",
    desc:
      "Italian (?) writer covering business, crypto" +
      " and money related topics ",
    tags: ["cryptocurrency", "money", "china"]
  },
  {
    name: "greenmask9",
    desc:
      "	New author from the Czech Republic. Covers health," +
      " psychology, sports and politics.",
    tags: ["health", "politics", "sports", " psychology"],
    location: "Czech" + " Republic"
  },
  {
    name: "johnvibes",
    desc:
      "Author and researcher who writes for numerous" +
      " alternative" +
      " media websites, including The Free Thought Project and The Mind" +
      " Unleashed, covering topics relating to government and police" +
      " corruption, the drug war and consciousness. In addition to his" +
      " activist work, he also hosts various live events, including the Free" +
      " Your Mind Conference.",
    tags: ["politics", "society", "corruption"],
    location: "USA"
  },
  {
    name: "joshsigurdson",
    desc:
      'Journalist at World Alternative Media. Does video" +\n' +
      '    " interviews on DTube, talks about money, crypto and business.',
    tags: ["business", "politics", "cryptocurrency"],
    location: "Winnipeg, Canada"
  },
  {
    name: "leecamp",
    desc:
      'Journalist from Washington. Host of "Redacted' +
      ' Tonight", a comedy show on Youtube (so far).',
    tags: ["comedy", "politics", "life"],
    location: "Washington,D.C., US"
  },
  {
    name: "lilyraabe",
    desc:
      "Working artist, business consultant, and entrepeneur" +
      " currently developing business strategy and content for 6 nonprofit" +
      " clients, and 5 independent artists. Her goal is to help artists thrive" +
      " on and off the Blockchain. Arts Editor of Insteem",
    tags: ["arts", "society", "politics"],
    location: "Seattle, US"
  },
  {
    name: "news2share",
    desc:
      "An online media team from Washington. Range from" +
      "  local, national to international politics",
    tags: ["politics", "technology"],
    location: "Washington,D.C., US"
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
    tags: ["politics", "war", "ukraine"],
    location: "Ukraine"
  },
  {
    name: "travelwithus",
    desc:
      "Young family traveling the world and reporting their adventures" +
      " while conquering new countries.|",
    tags: ["travel", "life", "photography"],
    location: "Everywhere"
  },
  {
    name: "yahialababidi",
    desc:
      "Author of 7 books & published in international" +
      " magazines and newspapers. As an Egyptian-American, he touches on" +
      " immigration, Islamophobia & other cultural issues, in addition to covering" +
      " literature & philosophical/spiritual matters.",
    tags: ["society", "politics", "culture", "philosophy"]
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

const renderTags = map(label => (
  <Label key={label} color="green">
    {label}
  </Label>
));

const renderJournalists = map(user => (
  <Card key={user.name}>
    <Card.Content>
      <Card.Header as={Link} to={`/@${user.name}`}>
        {user.name}
      </Card.Header>
      <Card.Meta>{user.location}</Card.Meta>
      <Card.Description>{user.desc}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button
        icon
        floated="right"
        size="tiny"
        color="blue"
        as="a"
        href={`https://steemit.com/@${user.name}`}
        target="_blank"
      >
        <Icon name="external share" />
      </Button>
      <Label.Group size="small">{renderTags(user.tags)}</Label.Group>
    </Card.Content>
  </Card>
));

const JournalistsScene = () => {
  return (
    <Grid centered columns={1}>
      <Grid.Column>
        <Header>Journalists and Writers (Approved)</Header>

        <Card.Group itemsPerRow={3}>
          {renderJournalists(journalists)}
        </Card.Group>

        <Header>Unapproved Journalists </Header>
        <Card.Group>{renderJournalists(blockedJournalists)}</Card.Group>
      </Grid.Column>
    </Grid>
  );
};

export default JournalistsScene;
