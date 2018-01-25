import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin-bottom: 10px;
  color: gray;
`;

const Page = styled(Link)`
  font-weight: bold;
  padding-right: 1em;
`;

const renderPageLinks = (count, username) => {
  return [...Array(count).keys()].map(i => {
    return (
      <Page key={i} to={`/mentions/@${username}/${i + 1}`}>
        {i + 1}
      </Page>
    );
  });
};

const MentionPagination = props => {
  const { mentions, username } = props;
  const pageCount = Math.ceil(mentions.hits / 10);
  return <Container>Pages: {renderPageLinks(pageCount, username)}</Container>;
};

export default MentionPagination;
