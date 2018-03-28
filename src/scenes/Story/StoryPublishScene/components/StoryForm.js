import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  margin: auto;
`;
const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const Input = styled.input`
  border: 1px solid rgba(34, 36, 38, 0.15);
  margin-bottom: 1rem;
  font-size: 1.2rem;
  line-height: 2rem;
  padding: 0.5rem;
`;
const Textarea = styled.textarea`
  border: 1px solid rgba(34, 36, 38, 0.15);
  margin-bottom: 1rem;
  font-size: 1.2rem;
  padding: 0.5rem;
`;
const Button = styled.button`
  color: white;
  font-weight: bold;
  line-height: 3rem;
  background-color: green;
  max-width: 25%;
`;

const handleSubmit = e => {
  e.preventDefault();
  console.log(e);
};

const handleChange = (event, { update }) => {
  const value = event.target.value;
  const name = event.target.name;
  console.log(event);
  update({ [name]: value });
};

const StoryForm = props => {
  const { onSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Label>Title</Label>
      <Input
        type="text"
        name="title"
        placeholder="Add title"
        onChange={e => handleChange(e, props)}
        required
      />
      <Label>Summary</Label>
      <Textarea
        name="summary"
        placeholder="Write a short Intro for your story"
        onChange={e => handleChange(e, props)}
        required
      />
      <Label>Topics</Label>
      <Input
        type="text"
        name="topics"
        placeholder="Add topics for your story"
        onChange={e => handleChange(e, props)}
        required
      />
      <Textarea
        name="body"
        rows="10"
        onChange={e => handleChange(e, props)}
        required
      />
      <Button type="submit">Publish</Button>
    </Form>
  );
};

export default StoryForm;
