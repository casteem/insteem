import _ from "lodash";
import { calculateReputationScore } from "./format";
import { parseMetadata } from "services/helpers/format";
import { contains, reject } from "ramda";

export const containsTag = (json, tag = "") => {
  const activeTags = parseMetadata(json).tags;
  const bool = contains(tag, activeTags);
  return bool;
};

export const rejectByTag = (stories, tags = []) => {
  stories = reject(story => containsTag(story.json_metadata, tags))(stories);
  return stories;
};

export const filterReputation = (postList = [], maxRep = 75, minRep = 25) => {
  return _.reject(postList, post => {
    const score = calculateReputationScore(post.author_reputation);
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
    const score = calculateReputationScore(post.author_reputation);
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
