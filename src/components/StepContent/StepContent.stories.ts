import StepContent, { type StepContentProps } from '@/components/StepContent/StepContent.vue'
import { Mock } from '@/components/StepContent/mock'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/StepContent/Content',
  component: StepContent,
  argTypes: {
    currentStep: {
      name: 'Current Step',
      options: ['queue', 'file', 'fileMapping'],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],

} satisfies Meta<typeof StepContent>;

export default meta;

type Story = StoryObjProped<typeof StepContent, StepContentProps>;

export const Queue: Story = {
  render: (args) => ({
    components: { StepContent },
    setup() {
      return { args }
    },
    template: `<StepContent v-bind="args" />`
  }),
  args: Mock.queue
}


export const File: Story = {
  render: (args) => ({
    components: { StepContent },
    setup() {
      return { args }
    },
    template: `<StepContent v-bind="args" />`
  }),
  args: Mock.file
}

