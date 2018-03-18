import React from "react";
import StoryList from "components/StoryList/StoryList";
import { rejectByTag } from "services/helpers/filter";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Loader, Grid } from "semantic-ui-react";
import HowToBox from "components/Layout/HowToBox";
import FeaturedBox from "scenes/Index/components/FeaturedBox";
import AboutBox from "components/Layout/AboutBox";

const CategoryScene = props => {
  let { data: { loading, getDiscussions: stories } } = props;
  if (loading) return <Loader active />;
  // Hide `nsfw` stories.
  stories = rejectByTag(stories, "nsfw");
  return (
    <Grid stackable>
      <Grid.Column width={10}>
        {<StoryList stories={stories || []} />}
      </Grid.Column>
      <Grid.Column width={6}>
        <HowToBox />
        <br />
        <FeaturedBox />
        <br />
        <AboutBox />
      </Grid.Column>
    </Grid>
  );
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
    pollInterval: 1000 * 60 * 5 // 5 min
  })
})(CategoryScene);
