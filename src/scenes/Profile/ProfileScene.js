import React from "react";
import { head, isEmpty } from "ramda";
import moment from "moment";
import { userImage } from "services/helpers/format";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import steem from "steem";

import Loader from "../../components/Loader";
import ProfileDetails from "components/Profile/components/ProfileDetails";
// import StoryList from "../../components/Story/StoryList";
// import FavoriteButton from "../../components/Favorites/components/FavoriteButton";
import { Icon, Image, Label } from "semantic-ui-react";
// import ExternalLink from "components/Elements/ExternalLink";

class ProfileScene extends React.Component {
  render() {
    const { data: { loading, account: user } } = this.props;
    if (loading) return <Loader />;
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

        {/*<StoryList stories={posts} />*/}
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
  }
`;

export default graphql(QUERY, {
  options: ({ match }) => ({
    variables: { username: match.params.username },
    fetchPolicy: "network-only"
  })
})(ProfileScene);
