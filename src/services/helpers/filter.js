import _ from "lodash";
import Format from "./format";

export const filterReputation = (postList = [], maxRep = 75, minRep = 25) => {
  return _.reject(postList, post => {
    const score = Format.calculateReputationScore(post.author_reputation);
    if (score <= maxRep && score >= minRep) return false;
    return true;
  });
};

// Use all filter options at once.
export const filterAll = (
  postList = [],
  maxRep,
  minRep,
  maxChars,
  minChars
) => {
  return _.reject(postList, post => {
    const score = Format.calculateReputationScore(post.author_reputation);
    const chars = _.get(post, "body_length");
    if (
      score <= maxRep &&
      score >= minRep &&
      chars >= minChars &&
      chars <= maxChars
    )
      return false;
    return true;
  });
};
