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
# About Insteem
Insteem will become a decentralised, rewarding news platform for
independent journalism and create an international network of
journalists, away from MSM.


Our goal is to spread high quality, uncensored, undeletable news from all over the world,
 by independent journalists and writers.
 
 ## How will it work?
* Journalists/Writers post their stories via Insteem
* Insteem will check new stories for plagiarism and show that next to a story (it won’t prevent publishing though, unless it's considered spam)
* Insteem will automatically vote on stories depending on an internal rating system (score) of journalists (multiple factors like e.g. reputation, length of story, unique content, spam level etc.)
* The voting will happen (near) instant, to bring news from quality writers to the top immediately
* This will be combined with manual upvoting through our Editors
* There will be different kind of templates for articles to post, like daily (short) news,
extensive stories or opinionated articles    
 
`;

const Text = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
`;

const AboutScene = props => {
  return (
    <Text>
      <div dangerouslySetInnerHTML={{ __html: md.render(markdown) }} />
    </Text>
  );
};

export default AboutScene;
