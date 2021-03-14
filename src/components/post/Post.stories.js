import React from "react";
import Post from "./Post";
import "../../styles/globals.scss";

export default {
  title: "Components/Post",
  component: Post,
};

const Template = (args) => (
  <Post
    content=" I am working in figma trying to design a new website that showsall of my tweets"
    date="13/03/2021"
  />
);

export const Default = Template.bind({});
