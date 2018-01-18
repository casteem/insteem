import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const Container = styled.div`
  color: gray;
`;

const StoryListItemExtra = ({ story }) => {
  return (
    <Container>
      <Icon name="chevron up" /> {story.net_votes}
    </Container>
  );
};

export default StoryListItemExtra;
