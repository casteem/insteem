import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f9f9f9;
`;

const Layout = props => {
  return <Container>{props.children}</Container>;
};

export default Layout;
