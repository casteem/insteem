import _ from "lodash";
import moment from "moment";

// Define helper object for export.
const Helpers = {};

/**
 * Format a provided date or now for use with steem api.
 * @param date
 */
Helpers.formatDate = (date = moment()) => {
  return moment(date).utc().format("YYYY-MM-DD[T]HHmmss");
};

export default Helpers;
