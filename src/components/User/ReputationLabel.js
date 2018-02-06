import React from "react";
import steem from "steem";
import styled from "styled-components";
import { Label as UnstyledLabel } from "unstyled";

const Label = UnstyledLabel.extend`
  background-color: #e8e8e8;
  font-size: 0.85rem;
  min-width: 2em;
  min-height: 2em;
  padding: 0.5em !important;
  line-height: 1em;
  text-align: center;
  border-radius: 500rem;
`;

const ReputationLabel = ({ reputation }) => {
  return (
    <Label title="Reputation">{steem.formatter.reputation(reputation)}</Label>
  );
};

export default ReputationLabel;
