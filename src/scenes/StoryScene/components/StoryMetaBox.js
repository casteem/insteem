import React from "react";
import { Link } from "react-router-dom";
import { Segment, Label, Icon } from "semantic-ui-react";
import styled from "styled-components";
import moment from "moment";
import { parseMetadata } from "services/helpers/format";

const Author = styled.div`
  margin-bottom: 1rem;
`;
const Date = styled.div`
  margin-bottom: 1rem;
`;
// Wrap semantic Label Group in styled component.
const Tags = styled(Label.Group)`
  margin-bottom: 1rem;
`;

const renderTags = json => {
  return parseMetadata(json).tags.map(tag => (
    <Label key={tag} basic>
      {tag}
    </Label>
  ));
};

const StoryMetaBox = props => {
  const { story } = props;
  return (
    <Segment>
      <Author>
        <Link to={`/@${story.author}`}>{story.author}</Link>
      </Author>
      <Date>
        {moment(story.created)
          .utc()
          .format("LLL")}
      </Date>
      <Tags>{renderTags(story.json_metadata)}</Tags>
      <Icon name="chevron circle up" color="green" size="large" />{" "}
      {story.net_votes}
    </Segment>
  );
};

export default StoryMetaBox;
