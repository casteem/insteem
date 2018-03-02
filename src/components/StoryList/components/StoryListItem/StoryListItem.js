import React from "react";
import { propOr, head } from "ramda";
import { parseMetadata } from "services/helpers/format";
import { Link } from "react-router-dom";
import { Item } from "semantic-ui-react";
import removeMarkdown from "remove-markdown";

import Body from "./components/StoryListItemBody";
import Extra from "./components/StoryListItemExtra";

const StoryListItem = props => {
  const { story } = props;
  // Get images from story object
  const images = propOr([], "image")(parseMetadata(story.json_metadata));
  const image = head(images);

  // Convert story.body (markdown or html) to pure text.
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

        <Item.Description style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          <Body body={story.body} />
        </Item.Description>

        {/*<Meta story={story} />*/}
        <Extra story={story} />
      </Item.Content>
    </Item>
  );
};

export default StoryListItem;
