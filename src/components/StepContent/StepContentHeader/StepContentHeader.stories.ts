import StepContentHeader, { type StepContentHeaderProps } from '@/components/StepContent/StepContentHeader/StepContentHeader.vue'
import { Mock } from '@/components/StepContent/StepContentHeader/mock'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/Sidebar/StepContentHeader',
  component: StepContentHeader,
  argTypes: {
    title: {
      name: 'Title',
      control: { type: 'text' }
    }
  },
  tags: ['autodocs'],

} satisfies Meta<typeof StepContentHeader>;

export default meta;

type Story = StoryObjProped<typeof StepContentHeader, StepContentHeaderProps>;

export const Queue: Story = {
  render: (args) => ({
    components: { StepContentHeader },
    setup() {
      return { args }
    },
    template: '<StepContentHeader v-bind="args" />'
  }),
  args: Mock.queue
}

export const File: Story = {
  render: (args) => ({
    components: { StepContentHeader },
    setup() {
      return { args }
    },
    template: '<StepContentHeader v-bind="args" />'
  }),
  args: Mock.file
}

export const FileMapping: Story = {
  render: (args) => ({
    components: { StepContentHeader },
    setup() {
      return { args }
    },
    template: '<StepContentHeader v-bind="args" />'
  }),
  args: Mock.fileMapping
}

