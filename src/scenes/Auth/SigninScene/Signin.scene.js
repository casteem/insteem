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

  signin() {
    console.log(this.state);
    const wif = steem.auth.toWif(this.state.username, this.state.password, [
      "posting"
    ]);
    console.log(wif);
    this.props.onSignin(this.state.username, this.state.password, wif);
  }

  render() {
    return (
      <Grid centered>
        <Grid.Column width="6">
          <Form style={{ padding: 20 }}>
            <Form.Field>
              <Input
                style={style.input}
                onChange={event =>
                  this.setState({ username: event.target.value })
                }
                value={this.state.username}
                placeholder="Username"
              />
            </Form.Field>
            <Form.Field>
              <Input
                style={style.input}
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
                value={this.state.password}
                placeholder="Password"
                type="password"
              />
            </Form.Field>
            <Button onClick={e => this.signin(e)}>Signin</Button>
          </Form>
        </Grid.Column>
        <Message>
          No need to put your real password for now. Just use your name (or any
          other) and leave password blank. You cannot interact with steem in
          that case but it will give you a preview of the platform.
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

// Style for the component.
const style = {
  input: {
    height: 40,
    padding: 5,
    borderColor: "silver",
    borderRadius: 5,
    borderWidth: 1,
    margin: 10
  }
};
