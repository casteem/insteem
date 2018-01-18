import React from "react";
import { lifecycle } from "recompose";
import client from "dsteem.client";
import StoryList from "components/StoryList";
import { rejectByTag } from "services/helpers/filter";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const StoriesScene = props => {
  const { data: { loading, getDiscussions: stories } } = props;
  if (loading) return null;
  return (
    <div>
      <StoryList stories={stories || []} />
    </div>
  );
};

const QUERY = gql`
  {
    getDiscussions {
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
