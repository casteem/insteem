import React from "react";
import { lifecycle } from "recompose";
import StoryList from "components/StoryList/StoryList";
import { rejectByTag } from "services/helpers/filter";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const CategoryScene = props => {
  const { data: { loading, getDiscussions: stories } } = props;
  if (loading) return null;
  return <div>{<StoryList stories={stories || []} />}</div>;
};

const QUERY = gql`
  query discussions($category: String = "news") {
    getDiscussions(query: { tag: $category }) {
      id
      title
      body
      author
      category
      permlink
      json_metadata
      created
    }
  }
`;

export default graphql(QUERY, {
  options: ({ match }) => ({
    variables: { category: match.params.category },
    fetchPolicy: "network-only"
  })
})(CategoryScene);
