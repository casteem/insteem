import React from "react";
import { Link as ReactLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(ReactLink)`
  display: block;
  margin-bottom: 0.5rem;
`;

const UserImage = styled.div`
  display: inline-block;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-image: url(${props => props.image});
  background-size: cover;
  margin-right: 0.75rem;
  vertical-align: middle;
`;

const UserLink = ({ user }) => {
  return (
    <Link to={`/@${user.name}`}>
      <UserImage image={user.profile.profile_image} />
      {user.name}
      {/*<ReputationLabel reputation={user.reputation} />*/}
    </Link>
  );
};

export default UserLink;
