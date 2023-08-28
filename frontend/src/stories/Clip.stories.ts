import type { Meta, StoryObj } from '@storybook/react';
import { Clip } from './Clip';

const meta = {
  title: 'Example/Clip',
  component: Clip,
  parameters: {
    layout: 'centered',
  }
}

export default meta;
type Story = StoryObj<typeof Clip>;

export const Default: Story = {
  args: {
    name: "test",
    video: "https://www.youtube.com/watch?v=5qap5aO4i9A",
  }
}
