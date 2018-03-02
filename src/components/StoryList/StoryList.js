import React from "react";
import { map } from "ramda";
import { Item } from "semantic-ui-react";

import StoryListItem from "./components/StoryListItem";

const StoryList = props => {
  const { stories } = props;

  return (
    <Item.Group relaxed divided>
      {map(story => <StoryListItem key={story.id} story={story} />)(stories)}
    </Item.Group>
  );
};

export default StoryList;
