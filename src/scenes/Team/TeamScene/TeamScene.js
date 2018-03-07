import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const User = styled.div`
  text-align: center;
  flex: 1;
  margin: 3rem 1rem;
  padding: 1rem;
`;

const Image = styled.img`
  height: 8rem;
  border-radius: 1rem;
`;
const Name = styled.h2``;
const Desc = styled.p`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;
const Categories = styled.p``;

const TeamScene = props => {
  return (
    <Container>
      <h1>Team</h1>
      <Row>
        <User>
          <Image src="https://steemitimages.com/u/sarasate/avatar/large" />
          <Name>
            <a href="https://steemit.com/@sarasate" target="_blank">
              @sarasate
            </a>
          </Name>
          <Desc>Chief Editor</Desc>
          <Categories>Technology, Business, Sports</Categories>
        </User>
        <User>
          <Image src="https://steemitimages.com/u/eroche/avatar/large" />
          <Name>
            <a href="https://steemit.com/@eroche" target="_blank">
              @eroche
            </a>
          </Name>
          <Desc>Senior Editor</Desc>
          <Categories>Travel, Crypto, Science</Categories>
        </User>
        <User>
          <Image src="https://steemitimages.com/u/lilyraabe/avatar/large" />
          <Name>
            <a href="https://steemit.com/@lilyraabe" target="_blank">
              @lilyraabe
            </a>
          </Name>
          <Desc>Senior Editor</Desc>
          <Categories>Arts</Categories>
        </User>
      </Row>
      <Row>
        <User>
          <Image src="https://steemitimages.com/u/lupo/avatar" />
          <Name>
            <a href="https://steemit.com/@lupo" target="_blank">
              @lupo
            </a>
          </Name>
          <Desc>Editor</Desc>
          <Categories>Business, Technology</Categories>
        </User>
        <User>
          <Image src="https://steemitimages.com/u/cyberwarrior/avatar/large" />
          <Name>
            <a href="https://steemit.com/@cyberwarrior" target="_blank">
              @cyberwarrior
            </a>
          </Name>
          <Desc>Editor</Desc>
          <Categories>Politics, Technology, Crypto</Categories>
        </User>
      </Row>
    </Container>
  );
};

export default TeamScene;
