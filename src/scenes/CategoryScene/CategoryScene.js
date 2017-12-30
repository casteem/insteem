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
    console.log(category);
    getStories(category).then(stories => {
      this.setState({ stories });
    });
  },
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.category !== nextProps.match.params.category) {
      const { category } = nextProps.match.params;
      console.log(category);
      getStories(category).then(stories => {
        this.setState({ stories });
      });
    }
  }
})(CategoryScene);
