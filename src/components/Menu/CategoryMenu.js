import React from "react";
import { Link } from "react-router-dom";
import { Container, Menu, Dropdown } from "semantic-ui-react";

const CategoryMenu = () => {
  return (
    <Menu widths={11} stackable style={styles.menu}>
      <Container>
        <Menu.Item as={Link} to={"/categories/world"}>
          World
        </Menu.Item>
        <Menu.Item as={Link} to={"/categories/politics"}>
          Politics
        </Menu.Item>
        <Menu.Item as={Link} to={"/categories/business"}>
          Business
        </Menu.Item>
        <Menu.Item as={Link} to={"/categories/technology"}>
          Tech
        </Menu.Item>
        <Menu.Item as={Link} to={"/categories/science"}>
          Science
        </Menu.Item>
        <Menu.Item as={Link} to={"/categories/health"}>
          Health
        </Menu.Item>
        <Menu.Item as={Link} to={"/categories/sports"}>
          Sports
        </Menu.Item>
        <Menu.Item as={Link} to={"/categories/art"}>
          Arts
        </Menu.Item>

        <Menu.Item as={Link} to={"/categories/travel"}>
          Travel
        </Menu.Item>
        <Menu.Item as={Link} to={"/categories/cryptocurrency"}>
          Crypto
        </Menu.Item>
        <Dropdown item text="more">
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to={"/categories/style"}>
              Style
            </Dropdown.Item>
            <Dropdown.Item as={Link} to={"/categories/food"}>
              Food
            </Dropdown.Item>
            <Dropdown.Item as={Link} to={"/categories/opinion"}>
              Opinion
            </Dropdown.Item>
            <Dropdown.Item as={Link} to={"/categories/photography"}>
              Photography
            </Dropdown.Item>
            <Dropdown.Item as={Link} to={"/categories/philosopy"}>
              Philosophy
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  );
};

export default CategoryMenu;

const styles = {
  menu: {
    marginBottom: 20
  }
};
