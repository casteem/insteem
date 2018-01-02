import React from "react";
import _ from "lodash";
import steem from "steem";
import { Segment, Grid, Statistic, Feed } from "semantic-ui-react";
import UserLink from "../../Elements/UserLink";

class ProfileBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      followData: {}
    };
    this._fetchUser = this._fetchUser.bind(this);
  }
  _fetchUser(username) {
    steem.api.getAccounts([username], (err, res) => {
      if (err) console.log("api_error", err);
      if (res) {
        this.setState({ user: res[0] });
      }
    });
    steem.api.getFollowCount(username, (err, res) => {
      if (err) console.log("api_error", err);
      if (res) {
        this.setState({ followData: res });
      }
    });
  }

  componentWillMount() {
    this._fetchUser(this.props.username);
  }

  render() {
    const { user } = this.state;
    if (_.isEmpty(user)) return <div />;
    return (
      <Segment>
        <Feed>
          <Feed.Event>
            <Feed.Label
              image={_.get(
                JSON.parse(user.json_metadata),
                "profile.profile_image"
              )}
            />
            <Feed.Content>
              <Feed.Summary><UserLink user={user.name} /></Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
        <Grid columns={2} centered>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="mini">
                <Statistic.Label>Posts</Statistic.Label>
                <Statistic.Value>{user.post_count}</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="mini">
                <Statistic.Label>Power</Statistic.Label>
                <Statistic.Value>
                  {(user.voting_power / 100).toFixed(2)}
                </Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="mini">
                <Statistic.Label>Follower</Statistic.Label>
                <Statistic.Value>
                  {this.state.followData.follower_count}
                </Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="mini">
                <Statistic.Label>Following</Statistic.Label>
                <Statistic.Value>
                  {this.state.followData.following_count}
                </Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default ProfileBox;
