import React from "react";
import { lifecycle } from "recompose";
import client from "dsteem.client";
import StoryList from "components/StoryList";
import { rejectByTag } from "services/helpers/filter";

const StoriesScene = props => {
  return (
    <div>
      <StoryList stories={props.stories || []} />
    </div>
  );
};

export default lifecycle({
  componentWillMount() {
    client.database.getDiscussions("created", { limit: 20 }).then(stories => {
      this.setState({ stories: rejectByTag(stories, "nsfw") });
    });
  }
})(StoriesScene);
