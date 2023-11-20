import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "./label";

const meta: Meta<typeof Label> = {
  component: Label,
};

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => <Label>Default label</Label>,
};

export const Regular: Story = {
  render: () => <Label size="regular">Regular label</Label>,
};

export const Small: Story = {
  render: () => <Label size="small">Small label</Label>,
};

export const ExtraSmall: Story = {
  render: () => <Label size="extra-small">Extra small label</Label>,
};

export default meta;
