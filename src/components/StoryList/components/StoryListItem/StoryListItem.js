import React from "react";
import { Item } from "semantic-ui-react";

const StoryListItem = props => {
  const { story } = props;
  console.log(story);
  return (
    <Item>
      <Item.Content>
        <Item.Header>{story.title}</Item.Header>
      </Item.Content>
    </Item>
  );
};

export default StoryListItem;
