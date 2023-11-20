import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button />,
};

export default meta;
