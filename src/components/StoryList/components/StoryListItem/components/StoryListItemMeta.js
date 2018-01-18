import React from "react";
import styled from "styled-components";
import moment from "moment";
import { Link } from "react-router-dom";
import { Label } from "semantic-ui-react";
import steem from "steem";

const Container = styled.div`
  color: gray;
  font-size: 0.9em;
  padding-top: 5px;
`;

const StoryListItemMeta = ({ story }) => {
  return (
    <Container>
      {moment.utc(story.created).fromNow()} in{" "}
      <Label color="blue" size="small" basic>
        {story.category}
      </Label>
      by <Link to={`/@${story.author}`}>{story.author}</Link>{" "}
      <Label circular>
        {steem.formatter.reputation(story.author_reputation)}
      </Label>
    </Container>
  );
};

export default StoryListItemMeta;
