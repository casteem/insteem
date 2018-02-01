import React from "react";
import styled from "styled-components";
import moment from "moment";
import { Link } from "react-router-dom";
import { Label } from "semantic-ui-react";
import steem from "steem";

const Container = styled.div`
  color: gray;
  font-size: 1.1rem;
  padding: 0 0 1rem;
`;

const StoryMeta = ({ story }) => {
  return (
    <Container>
      {moment.utc(story.created).fromNow()} in{" "}
      <Label color="blue" basic>
        {story.category}
      </Label>
      by <Link to={`/@${story.author}`}>{story.author}</Link>{" "}
      <Label circular>
        {steem.formatter.reputation(story.author_reputation)}
      </Label>
    </Container>
  );
};

export default StoryMeta;
