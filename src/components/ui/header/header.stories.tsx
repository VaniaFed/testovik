import React from "react";

import { Header } from "./header";

import type { Props } from "./props";
import type { Meta, ComponentStory } from "@storybook/react";

const meta: Meta = {
  title: "Header",
  component: Header,
};

export default meta;

export const Default: ComponentStory<typeof Header> = (args: Props) => (
  <Header {...args} />
);
