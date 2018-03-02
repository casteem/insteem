import React from "react";
import styled from "styled-components";
import { Header, Segment, Label } from "semantic-ui-react";

const LI = styled.li`
  margin: 0.4rem;
`;

const HowToBox = props => {
  return (
    <div>
      <Header attached="top">How to</Header>
      <Segment attached="bottom">
        <ul>
          <LI>
            Go to{" "}
            <a
              href="https://steemit.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              steemit.com
            </a>
          </LI>
          <LI>Create a new post</LI>
          <LI>
            Use{" "}
            <Label color="blue" basic>
              news
            </Label>{" "}
            as the first tag
          </LI>
          <LI>
            Use{" "}
            <Label color="blue" basic>
              insteem
            </Label>{" "}
            to qualify for an upvote of @insteem.{" "}
          </LI>
          <LI>Use at least one of the tags from the main menu</LI>
        </ul>
      </Segment>
    </div>
  );
};

export default HowToBox;
