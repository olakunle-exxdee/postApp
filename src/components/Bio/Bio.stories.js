import React from "react";
import Bio from "./Bio";
import "../../styles/globals.scss";

export default {
  title: "Components/Bio",
  component: Bio,
};

const Template = (args) => (
  <Bio
    headshot="https://pbs.twimg.com/profile_images/1347599595115868162/dSzyyv9m_400x400.jpg"
    name="Olakunle Saheed"
    tagline="Helping others to learn by Doing"
    role="Frontend Developer"
  />
);

export const Default = Template.bind({});
