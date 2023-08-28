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
    name: "clip1",
    video: '/test1.mp4',
  }
}
