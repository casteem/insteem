import React from "react";
import styled from "styled-components";

import StoryBody from "scenes/StoryScene/components/StoryBody";

const Container = styled.div`
  max-width: 60%;
  margin: 2rem auto;
  border: 1px solid rgba(34, 36, 38, 0.15);
  padding: 1rem;
  background-color: white;
`;
const Title = styled.h1``;
const Summary = styled.h2`font-size: 1.2rem`;
const Tags = styled.div``;
const Body = styled.div`
  margin-top: 2rem;
`;

const StoryPreview = ({ story }) => {
  return (
    <Container>
      <Title>{story.title}</Title>
      <Summary>{story.summary}</Summary>
      <Tags>{story.tags}</Tags>
      <Body>
        <StoryBody body={story.body} />
      </Body>
    </Container>
  );
};

export default StoryPreview;
