import type { Meta, StoryObj } from '@storybook/react';
import { Clip } from './Clip';

const meta = {
  title: 'Example/Clip',
  component: Clip,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
}

export default meta;
type Story = StoryObj<typeof Clip>;

export const Default: Story = {
  args: {
    name: "clip2",
    video: '/test2.mp4',
  }
}
