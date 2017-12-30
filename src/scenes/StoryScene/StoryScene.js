import React from "react";
import client from "dsteem.client";
import { lifecycle } from "recompose";
import { head, propOr } from "ramda";
import removeMarkdown from "remove-markdown";
import { Header, Image } from "semantic-ui-react";
import Markdown from "react-markdown";
import { parseMetadata } from "services/helpers/format";

const StoryScene = props => {
  const { story } = props;
  if (!story) return <div />;

  // Get images from story object
  const images = propOr([], "image")(parseMetadata(story.json_metadata));
  const image = head(images);
  // Convert story.body (markdown or html) to pure text.
  const text = removeMarkdown(story.body)
    .split(" ")
    .splice(0, 20)
    .join(" ");
  return (
    <div>
      <Header>{story.title}</Header>

      {image ? <Image src={image} /> : <div />}

      <Markdown
        source={story.body}
        skipHtml={false}
        disallowedTypes={["image"]}
      />
    </div>
  );
};

export default lifecycle({
  componentWillMount() {
    const { author, permlink } = this.props.match.params;
    client.database
      .getDiscussions("blog", {
        limit: 1,
        parent_author: author,
        parent_permlink: permlink,
        tag: author
      })
      .then(stories => {
        console.log(stories);
        this.setState({ story: head(stories) });
      });
  }
})(StoryScene);
