import React from "react";
import moment from "moment";
import { propOr, head } from "ramda";
import { parseMetadata } from "services/helpers/format";
import { Link } from "react-router-dom";
import { Item, Label } from "semantic-ui-react";
import removeMarkdown from "remove-markdown";

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
        <Item.Meta>
          {moment.utc(story.created).fromNow()} in {" "}
          <Label color="blue" size="small" basic>
            {story.category}
          </Label>
          by <Link to={`/@${story.author}`}>{story.author}</Link>
        </Item.Meta>
        <Item.Description>
          {text} <br />
          <Link to={`/stories/${story.author}/${story.permlink}`}>
            Read more...
          </Link>
        </Item.Description>
      </Item.Content>
    </Item>
  );
};

export default StoryListItem;
