import React from "react";
import SigninScene from "./SigninScene";
import { Modal } from "semantic-ui-react";

class SignInModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
  }

  handleOpen = e => {
    this.setState({
      modalOpen: true
    });
  };

  handleClose = e => {
    this.setState({
      modalOpen: false
    });
  };

  render() {
    return (
      <Modal
        size="small"
        dimmer="blurring"
        open={this.state.modalOpen}
        onClose={this.handleClose}
        trigger={<span onClick={this.handleOpen}> Sign In </span>}
      >
        <Modal.Header>Sign In to SteemJ</Modal.Header>
        <Modal.Content image>
          <Modal.Description style={{ width: "inherit" }}>
            <SigninScene handleClose={this.handleClose} />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default SignInModal;
