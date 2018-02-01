import React from "react";
import { isEmpty, isNil } from "ramda";
import { connect } from "react-redux";
import { signout } from "services/state/auth/actions";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Loader from "components/Loader";
import { Dropdown, Menu, Button, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { userImage } from "services/helpers/format";

const AccountMenu = props => {
  const { signout, data: { account: user, loading } } = props;
  if (loading) return null;
  if (isEmpty(user) || isNil(user)) {
    // If user not found, singout and return empty comp.
    props.signout();
    return <div>Not found</div>;
  }
  return (
    <Menu.Menu position="right">
      <Menu.Item>
        {/*<Button primary fluid as={Link} to="/submit">*/}
        {/*Post new job*/}
        {/*</Button>*/}
      </Menu.Item>
      <Menu.Item>
        <Image avatar inline src={userImage(user)} />
      </Menu.Item>
      <Dropdown item text={user.name}>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to={`/@${user.name}`}>
            Profile
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={signout}>Sign Out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  );
};

const mapStateToProps = state => ({ username: state.auth.username });

const mapDispatchToProps = dispatch => ({
  signout: () => {
    dispatch(signout());
  }
});

const QUERY = gql`
  query user($username: String!) {
    account(username: $username) {
      id
      name
      json_metadata
    }
  }
`;
const withData = graphql(QUERY, {
  options: ({ username }) => ({
    variables: { username: username },
    fetchPolicy: "network-only"
  })
})(AccountMenu);

export default connect(mapStateToProps, mapDispatchToProps)(withData);
