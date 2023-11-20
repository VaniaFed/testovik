import type { Meta, StoryObj } from "@storybook/react";

import { Paragraph } from "./paragraph";

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
};

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  render: () => <Paragraph>Default paragraph</Paragraph>,
};

export const Large: Story = {
  render: () => <Paragraph large>Large paragraph</Paragraph>,
};
export default meta;
