import React from "react";
import { head, isEmpty } from "ramda";
import moment from "moment";
import client from "dsteem.client";
import { userImage } from "services/helpers/format";

import Loader from "../../components/Loader";
import ProfileDetails from "components/Profile/components/ProfileDetails";
// import StoryList from "../../components/Story/StoryList";
// import FavoriteButton from "../../components/Favorites/components/FavoriteButton";
import { Icon, Image } from "semantic-ui-react";
// import ExternalLink from "components/Elements/ExternalLink";

class ProfileScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      posts: []
    };
  }

  _fetchData(username = this.props.match.params.author) {
    try {
      client.database.getAccounts([username]).then(result => {
        console.log(result);
        this.setState({ user: result[0] });
      });

      // const posts = await steem.api.getDiscussionsByAuthorBeforeDateAsync(
      //   user.name,
      //   "",
      //   moment()
      //     .utc()
      //     .format("YYYY-MM-DD[T]HHmmss"),
      // "2017-06-14T20:51:00",
      // 25
      // );
      // this.setState({ posts: posts });
    } catch (err) {
      console.log("api_error #cMaaO3", err);
    }
  }

  componentWillMount() {
    this._fetchData();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.username !== nextProps.match.params.username) {
      this._fetchData(nextProps.match.params.username);
      this.setState({ user: {}, posts: [] });
    }
  }

  render() {
    const { user, posts } = this.state;
    if (isEmpty(user)) return <Loader />;
    return (
      <div>
        <h1>
          <Image src={userImage(user)} avatar />
          {user.name}
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

export default ProfileScene;
