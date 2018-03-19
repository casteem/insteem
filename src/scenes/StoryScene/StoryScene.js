import React from "react";
import client from "dsteem.client";
import { lifecycle } from "recompose";
import { head, propOr } from "ramda";
import { Grid, Header, Image } from "semantic-ui-react";
import Markdown from "react-markdown";
import { parseMetadata } from "services/helpers/format";
import styled from "styled-components";

import StoryBody from "./components/StoryBody";
import StoryMeta from "./components/StoryMeta";
import StoryMetaBox from "./components/StoryMetaBox";

const Container = styled.div`
  overflow: hidden;
  margin-bottom: 10rem;
`;

const CoverImage = styled.div`
  margin-bottom: 1rem;
`;

const Content = styled.div`
  font-size: 1.3rem;
  font-weight: 300;
  color: hsla(0, 0%, 0%, 0.6);
`;

const StoryScene = props => {
  const { story } = props;
  if (!story) return <div />;

  // Get images from story object
  const images = propOr([], "image")(parseMetadata(story.json_metadata));
  const image = head(images);
  return (
    <Container>
      <Grid>
        <Grid.Column width={11}>
          <Header>{story.title}</Header>

          <StoryMeta story={story} />
          {/*<CoverImage>{image ? <Image src={image} /> : <div />}</CoverImage>*/}

          <Content>
            <StoryBody body={story.body} />
            {/*<Markdown*/}
            {/*source={story.body}*/}
            {/*skipHtml={false}*/}
            {/*escapeHtml={false}*/}
            {/*disallowedTypes={["image"]}*/}
            {/*/>*/}
          </Content>
        </Grid.Column>
        <Grid.Column width={5}>
          <StoryMetaBox story={story} />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default lifecycle({
  componentWillMount() {
    const { author, permlink } = this.props.match.params;
    console.log(author, permlink);
    client.database
      .getDiscussions("blog", {
        tag: author,
        limit: 1,
        start_author: author,
        start_permlink: permlink
      })
      .then(stories => {
        this.setState({ story: head(stories) });
      });
  }
})(StoryScene);
