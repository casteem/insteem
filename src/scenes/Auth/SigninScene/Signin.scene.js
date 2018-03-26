import React from "react";
import steem from "steem";
import { connect } from "react-redux";
import { signin } from "services/state/auth/actions";
import { Grid, Form, Input, Button, Message } from "semantic-ui-react";

// SignIn Form.
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      wif: ""
    };
  }

  signin(e) {
    e.preventDefault();
    const wif = this.state.password;
    // const wif = steem.auth.toWif(this.state.username, this.state.password, [
    //   "posting"
    // ]);
    const isWif = steem.auth.isWif(wif);
    if (!isWif) {
      alert("Please use a private posting key!");
      return;
    }

    this.props.onSignin(this.state.username, this.state.password, wif);
  }

  render() {
    return (
      <Grid centered>
        <Grid.Column width="6">
          <Form
            style={{ padding: 20, textAlign: "center" }}
            onSubmit={e => this.signin(e)}
          >
            <Form.Field required>
              <Input
                onChange={event =>
                  this.setState({ username: event.target.value })
                }
                value={this.state.username}
                placeholder="Username"
                required
              />
            </Form.Field>
            <Form.Field>
              <Input
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
                value={this.state.password}
                placeholder="Private Posting Key"
                type="password"
                required
              />
            </Form.Field>
            <Button type="submit">Signin</Button>
            {/*<Button onClick={e => this.signin(e)}>Signin</Button>*/}
          </Form>
        </Grid.Column>
        <Message>
          Insteem uses your private posting key to interact with steem. This key
          is stored unencrypted in your browser and can only be used for posting
          and voting. Make sure you are only using your posting key. Keep your
          active/owner keys safe.
        </Message>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignin: (username, password, wif) => {
      dispatch(signin(username, password, wif));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
