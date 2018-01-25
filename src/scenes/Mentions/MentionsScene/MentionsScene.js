import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Loader from "components/Loader";
import MentionItem from "./components/MentionItem";
import MentionPagination from "./components/MentionPagination";

const MentionsScene = props => {
  const { data: { loading, mentions }, match } = props;
  if (loading) return <Loader />;
  return (
    <div>
      <h3>Total Mentions: {mentions.hits}</h3>
      <MentionPagination mentions={mentions} username={match.params.username} />
      {mentions.results.map(mention => (
        <MentionItem key={mention.permlink} mention={mention} />
      ))}
    </div>
  );
};

const Query = gql`
  query getMentions($username: String!, $page: Int = 1) {
    mentions(username: $username, page: $page) {
      hits
      results {
        author
        created
        permlink
        summary
        title
        type
      }
    }
  }
`;

export default graphql(Query, {
  options: ({ match }) => ({
    variables: {
      username: match.params.username,
      page: match.params.page
    }
  })
})(MentionsScene);
