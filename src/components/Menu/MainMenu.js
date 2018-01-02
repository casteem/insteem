import React from "react";
// import { connect } from "react-redux";
// import { signout } from "../../services/auth/actions";
import { Link } from "react-router-dom";
import { Container, Menu, Image } from "semantic-ui-react";

const MainMenu = props => {
  return (
    <Menu borderless stackable fixed="top" style={styles.menu}>
      <Container>
        <Menu.Item as={Link} to={"/"}>
          {/*<img src="/insteem.png" alt="" />*/}
          <Image
            inline
            style={{ height: 30, width: 30 }}
            shape="rounded"
            src="/insteem.png"
          />
          &nbsp;{" "}
          <span style={styles.brand}>
            INSTEEM <span style={styles.brand.beta}>beta</span>
          </span>
        </Menu.Item>
        {/*<Menu.Item as={Link} to="/comments">*/}
        {/*Comments*/}
        {/*</Menu.Item>*/}
        {/*<Menu.Item as={Link} to="/messages">*/}
        {/*Messages*/}
        {/*</Menu.Item>*/}
        {/*<Menu.Item as={Link} to="/mentions">*/}
        {/*Mentions*/}
        {/*</Menu.Item>*/}
        <Menu.Menu position="right">
          {/*<Menu.Item onClick={props.onSignout}>Sign Out</Menu.Item>*/}
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onSignout: () => {
//       dispatch(signout());
//     }
//   };
// };

// export default connect(null, mapDispatchToProps)(MainMenu);
export default MainMenu;

const styles = {
  menu: {
    marginBottom: 20
  },
  brand: {
    fontWeight: "bold",
    fontSize: 26,
    beta: { fontSize: 11 }
  }
};
