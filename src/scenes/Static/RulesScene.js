import React from "react";
import Remarkable from "remarkable";
import styled from "styled-components";

const md = new Remarkable({
  html: true, // remarkable renders first then sanitize runs...
  breaks: false,
  linkify: false, // linkify is done locally
  typographer: false, // https://github.com/jonschlinkert/remarkable/issues/142#issuecomment-221546793
  quotes: "“”‘’"
});

const markdown = `
# Rules 
* To be considered for an upvote/resteem of @insteem and members, 
add the tag 'insteem' to your story.
* Optional: Add 'Powered by [Insteem](https://www.insteem.com)', 
the News on Steem at the end of your story, 
it will improve your chances for upvotes/resteem
* If your story doesn't fit our standards, we'll ask you to remove it
* Only articles with full source of the information will be considered
* Only articles which are your own IP will be considered

`;

const Text = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
`;

const RulesScene = props => {
  return (
    <Text>
      <div dangerouslySetInnerHTML={{ __html: md.render(markdown) }} />
    </Text>
  );
};

export default RulesScene;
