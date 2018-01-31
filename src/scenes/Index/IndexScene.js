import React from "react";
import { lifecycle } from "recompose";
import client from "dsteem.client";
import { rejectByTag } from "services/helpers/filter";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Loader } from "semantic-ui-react";

import { Grid, Header, Segment, Label } from "semantic-ui-react";

import StoryList from "components/StoryList";

const StoriesScene = props => {
  const { data: { loading, getDiscussions: stories } } = props;
  if (loading) return <Loader />;
  return (
    <Grid>
      <Grid.Column width={10}>
        <StoryList stories={stories || []} />
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
            <li>Use at least one of the tags from the main menu</li>
          </ul>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

const QUERY = gql`
  {
    getDiscussions(by: "hot") {
      id
      title
      author
      category
      permlink
      json_metadata
      created
    }
  }
`;

export default graphql(QUERY)(StoriesScene);
