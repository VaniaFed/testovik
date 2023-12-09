import type { Meta, StoryObj } from "@storybook/react";

import { Panel } from "./panel";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Panel> = {
  component: Panel,
};

type Story = StoryObj<typeof Panel>;

export const NewTest: Story = {
  render: () => (
    <Panel>
      <Button variant="positive">Новый тест</Button>
    </Panel>
  ),
};

export const EditTest: Story = {
  render: () => (
    <Panel>
      <Button variant="positive">Сохранить</Button>
      <Button variant="negative">Удалить</Button>
    </Panel>
  ),
};

export const PassTest: Story = {
  render: () => (
    <Panel>
      <Button variant="positive">Проверить результаты</Button>
      <Button variant="secondary">Сохранить как черновик</Button>
    </Panel>
  ),
};
export default meta;
