import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled(Link)`
  font-weight: bold;
  font-size: 18px;
`;

const Meta = styled.div`
  color: gray;
  margin-bottom: 5px;
`;

const Summary = styled.div`
  margin-bottom: 20px;
`;

const MentionItem = props => {
  const { mention } = props;
  return (
    <div>
      <Title to={`/stories/${mention.author}/${mention.permlink}`}>
        {mention.title}
      </Title>
      <Meta>
        {mention.type} by{" "}
        <Link to={`/@${mention.author}`}>{mention.author}</Link>{" "}
        {moment(mention.created)
          .utc()
          .fromNow()}
      </Meta>
      <Summary>{mention.summary}...</Summary>
    </div>
  );
};

export default MentionItem;
