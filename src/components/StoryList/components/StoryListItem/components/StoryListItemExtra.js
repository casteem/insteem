import moment from "moment/moment";
import React from "react";
import steem from "steem";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon, Label } from "semantic-ui-react";

const Container = styled.div`
  color: gray;
`;

const StoryListItemExtra = ({ story }) => {
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
      <Icon name="chevron up" /> {story.net_votes}
    </Container>
  );
};

export default StoryListItemExtra;
