import React from "react";
import { isNil } from "ramda";
import { userImage } from "services/helpers/format";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import steem from "steem";

import Loader from "../../components/Loader";
import ProfileDetails from "components/Profile/components/ProfileDetails";
import StoryList from "components/StoryList/StoryList";
import { Image, Label } from "semantic-ui-react";
// import ExternalLink from "components/Elements/ExternalLink";

class ProfileScene extends React.Component {
  render() {
    const {
      data: {
        loading,
        account: user,
        getDiscussionsByAuthorBeforeDate: stories
      }
    } = this.props;
    if (loading) return <Loader />;
    if (isNil(user)) return null;
    return (
      <div>
        <h1>
          <Image src={userImage(user)} avatar />
          {user.name}{" "}
          <Label circular size="big">
            {steem.formatter.reputation(user.reputation)}
          </Label>
          {/*<FavoriteButton username={user.name} />{" "}*/}
          {/*<ExternalLink url={`https://steemit.com/@${user.name}`}>*/}
          {/*<Icon name="share" />*/}
          {/*</ExternalLink>{" "}*/}
        </h1>

        <ProfileDetails user={user} />

        <StoryList stories={stories} />
      </div>
    );
  }
}

const QUERY = gql`
  query user($username: String!) {
    account(username: $username) {
      id
      name
      json_metadata
      created
      reputation
      voting_power
    }

    getDiscussionsByAuthorBeforeDate(author: $username) {
      id
      title
      body
      author
      author_reputation
      net_votes
      category
      permlink
      json_metadata
      created
    }
  }
`;

export default graphql(QUERY, {
  options: ({ match }) => ({
    variables: { username: match.params.username },
    // Polling: 1min
    pollInterval: 60 * 1000
  })
})(ProfileScene);
