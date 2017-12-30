import React from "react";
import client from "dsteem.client";
import { lifecycle } from "recompose";
import StoryList from "components/StoryList/StoryList";

const CategoryScene = props => {
  const { stories } = props;
  return (
    <div>
      <StoryList stories={stories || []} />
    </div>
  );
};

const getStories = category =>
  client.database.getDiscussions("created", { limit: 20, tag: category });

export default lifecycle({
  componentWillMount() {
    const { category } = this.props.match.params;
    getStories(category).then(stories => {
      this.setState({ stories });
    });
  },
  componentWillReceiveProps() {
    const { category } = this.props.match.params;
    getStories(category).then(stories => {
      this.setState({ stories });
    });
  }
})(CategoryScene);
