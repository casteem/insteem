import moment from "moment";

// Define helper object for export.
const Helpers = {};

/**
 * Format a provided date or now for use with steem api.
 * @param date
 */
Helpers.formatDate = (date = moment()) => {
  return moment(date)
    .utc()
    .format("YYYY-MM-DD[T]HHmmss");
};

/**
 * Create array from 'tag' input field.
 * @param {string} tagString - A list of tags separated by a space (' ').
 * @returns {Array|*}
 */
export const createTagArray = tagString => {
  return tagString.split(" ");
};

export default Helpers;
