// Actions for creating a new Story.
export const UPDATE_STORY = "UPDATE_STORY";
export const CLEAR_STORY = "CLEAR_STORY";

// Update the Story saved in redux.
export const updateStory = value => {
  return {
    type: UPDATE_STORY,
    payload: {
      value: value
    }
  };
};

export const clearStory = () => {
  return {
    type: CLEAR_STORY
  };
};
