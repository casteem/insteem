import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { connect } from "react-redux";
import { createTagArray } from "services/helpers/helpers";
import { updateStory, clearStory } from "services/state/stories/actions";

import StoryForm from "./components/StoryForm";

// const update = story, updateStory => {
//   .props.updateStory(story);
// };
// clear() {
//   this.props.onClearStory();
// }
const submitStory = (mutate, navigation) => {
  mutate()
    .then(result => {
      const { data: { createPost: story } } = result;
      navigation.navigate("Story", {
        author: story.author,
        permlink: story.permlink
      });
    })
    .catch(error => {
      console.log(error);
    });
};

const StoryCreateScene = props => {
  const { story, updateStory } = props;
  return (
    <div>
      <StoryForm story={story} update={updateStory} />

      {/*<div>{story.abstract}</div>*/}
    </div>
  );
};

const Mutation = gql`
  mutation create($story: PostInput!, $key: String!) {
    createPost(post: $story, key: $key) {
      id
      author
      permlink
    }
  }
`;

const mapStateToProps = state => ({
  user: state.auth.username,
  wif: state.auth.wif,
  story: state.stories
});

const mapDispatchToProps = dispatch => {
  return {
    updateStory: (title, abstract, body, tags) => {
      dispatch(updateStory(title, abstract, body, tags));
    }
    // onClearStory: () => {
    //   dispatch(clearStory());
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  graphql(Mutation, {
    // options: props => ({
    //   variables: { story: props.story, key: props.wif }
    // }),
    props: ({ mutate, ownProps }) => ({
      submit: () => {
        const { story, user, wif } = ownProps;
        // Converts tags into array
        story.tags = createTagArray(story.tags);
        return mutate({
          variables: {
            story: { ...story, author: user },
            key: wif
          }
        });
      }
    })
  })(StoryCreateScene)
);
