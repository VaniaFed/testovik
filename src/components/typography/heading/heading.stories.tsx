import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "./heading";

const meta: Meta<typeof Heading> = {
  component: Heading,
};

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  render: () => <Heading>Default Heading</Heading>,
};

export const H1: Story = {
  render: () => <Heading size="1">H1</Heading>,
};

export const H2: Story = {
  render: () => <Heading size="2">H2</Heading>,
};

export const H3: Story = {
  render: () => <Heading size="3">H3</Heading>,
};

export const H4: Story = {
  render: () => <Heading size="4">H4</Heading>,
};

export default meta;
