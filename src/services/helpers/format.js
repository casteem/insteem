import steem from "steem";
import _ from "lodash";
import { isNil } from "ramda";

/**
 * Take the author_score from steem and convert it in a human readable score.
 * @param reputation
 * @return {number}
 */
export const calculateReputationScore = reputation => {
  return steem.formatter.reputation(reputation);
};

/**
 *  Parse the `json_metadata` property from steem.
 * @param json - string to parse into JSON format.
 */
export const parseMetadata = json => {
  // Check if JSON string is not empty otherwise `parse` will fail.
  if (json.length > 0) {
    return JSON.parse(json);
  }
  return "";
};

// Get profile picture for user.
export const userImage = user => {
  if (isNil(user)) return;
  const image = _.get(JSON.parse(user.json_metadata), "profile.profile_image");
  if (_.isEmpty(image)) return null;
  return image;
};

// Get JSON formatted profile data for user.
export const userData = user => {
  return _.get(parseMetadata(user.json_metadata), "profile");
};
