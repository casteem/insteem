import React from "react";
import _ from "lodash";
import { userData } from "services/helpers/format";
import { Segment, List } from "semantic-ui-react";
// import ExternalLink from "components/Elements/ExternalLink";

const ProfileDetails = ({ user }) => {
  return (
    <Segment>
      <List horizontal>
        <List.Item>{_.get(userData(user), "name")}</List.Item>
        <List.Item>{_.get(userData(user), "location")}</List.Item>
        <List.Item>{_.get(userData(user), "about")}</List.Item>
        <List.Item>
          {/*<ExternalLink url={_.get(userData(user), "website")} value="test" />*/}
        </List.Item>
      </List>
    </Segment>
  );
};

export default ProfileDetails;
