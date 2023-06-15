import SidebarStep, { type SidebarStepProps } from '@/components/Sidebar/Step/SidebarStep.vue'
import { Mock } from '@/components/Sidebar/Step/mock'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/Sidebar/Step',
  component: SidebarStep,
  argTypes: {
    text: {
      name: 'Label Text',
      control: { type: 'text' }
    },
    feedbackText: {
      name: 'Label Text',
      control: { type: 'text' }
    },
    state: {
      name: 'State',
      options: ['default', 'current', 'finished'],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],

} satisfies Meta<typeof SidebarStep>;

export default meta;

type Story = StoryObjProped<typeof SidebarStep, SidebarStepProps>

export const Default: Story = {
  render: (args) => ({
    components: { SidebarStep },
    setup() {
      return { args }
    },
    template: '<SidebarStep v-bind="args" />'
  }),
  args: Mock.defaultStep
}

export const Current: Story = {
  render: (args) => ({
    components: { SidebarStep },
    setup() {
      return { args }
    },
    template: '<SidebarStep v-bind="args" />'
  }),
  args: Mock.currentStep
}

export const Finished: Story = {
  render: (args) => ({
    components: { SidebarStep },
    setup() {
      return { args }
    },
    template: '<SidebarStep v-bind="args" />'
  }),
  args: Mock.finishedStep
}



