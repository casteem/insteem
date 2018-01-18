import React from "react";
import { lifecycle } from "recompose";
import StoryList from "components/StoryList/StoryList";
import { rejectByTag } from "services/helpers/filter";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Loader } from "semantic-ui-react";

const CategoryScene = props => {
  let { data: { loading, getDiscussions: stories } } = props;
  if (loading) return <Loader active />;
  // Hide `nsfw` stories.
  stories = rejectByTag(stories, "nsfw");
  return <div>{<StoryList stories={stories || []} />}</div>;
};

const QUERY = gql`
  query discussions($category: String = "news") {
    getDiscussions(by: "hot", query: { tag: $category }) {
      id
      title
      body
      author
      author_reputation
      net_votes
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
