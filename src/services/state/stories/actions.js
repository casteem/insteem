// Actions for creating a new Story.
export const SUBMIT_STORY = "CREATE_STORY";
export const UPDATE_STORY = "UPDATE_STORY";
export const CLEAR_STORY = "CLEAR_STORY";

// Submit the actual post to steem.
// TODO: Implement api thunk.
export const createStory = (title, summary, body, tags) => {
  return {
    type: SUBMIT_STORY,
    payload: {
      title: title,
      summary: summary,
      body: body,
      tags: tags
    }
  };
};

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
