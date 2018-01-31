import _ from "lodash";

const empty = {};

// Define the default state for sign in.
const defaultState = {
  isSignedIn: false,
  username: "",
  password: "",
  wif: ""
};

export default function reducer(state = empty, action) {
  const { type, payload } = action;
  switch (type) {
    case "SIGNIN":
      const { username, password, wif } = payload;
      return _.extend({}, defaultState, {
        isSignedIn: true,
        username: username,
        password: password,
        wif: wif
      });

    case "SIGNOUT":
      return _.extend({}, state, {
        isSignedIn: false,
        username: "",
        password: "",
        wif: ""
      });
    default:
      return state;
  }
}
