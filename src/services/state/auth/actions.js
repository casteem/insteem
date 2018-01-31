export const signin = (username, password, wif) => {
  return {
    type: "SIGNIN",
    payload: {
      username: username,
      password: password,
      wif: wif
    }
  };
};

export const signout = () => {
  return {
    type: "SIGNOUT"
  };
};

// @TODO: Implement. Not used in the beginning.
export const signup = (username, password) => {
  return dispatch => {};
};
