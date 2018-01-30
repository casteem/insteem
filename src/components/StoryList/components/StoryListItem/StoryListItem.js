import React from "react";
import { propOr, head } from "ramda";
import { parseMetadata } from "services/helpers/format";
import { Link } from "react-router-dom";
import { Item } from "semantic-ui-react";
import removeMarkdown from "remove-markdown";

import Meta from "./components/StoryListItemMeta";
import Extra from "./components/StoryListItemExtra";

const StoryListItem = props => {
  const { story } = props;
  // Get images from story object
  const images = propOr([], "image")(parseMetadata(story.json_metadata));
  const image = head(images);
  // Convert story.body (markdown or html) to pure text.
  const text = removeMarkdown(story.body)
    .split(" ")
    .splice(0, 20)
    .join(" ");
  return (
    <Item>
      {image ? <Item.Image src={image} /> : null}
      <Item.Content>
        <Item.Header
          as={Link}
          to={`/stories/${story.author}/${story.permlink}`}
        >
          {story.title}
        </Item.Header>

        <Meta story={story} />

        <Item.Description style={{ overflow: "hidden" }}>
          {text} <br />
        </Item.Description>

        <Extra story={story} />
      </Item.Content>
    </Item>
  );
};

export default StoryListItem;
