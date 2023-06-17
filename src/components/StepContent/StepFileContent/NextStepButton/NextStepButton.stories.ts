import NextStepButton, { type NextStepButtonProps } from '@/components/StepContent/StepFileContent/NextStepButton/NextStepButton.vue'
import { Mock } from '@/components/StepContent/StepFileContent/NextStepButton/mock'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/StepContent/File/NextStepButton',
  component: NextStepButton,
  tags: ['autodocs'],

} satisfies Meta<typeof NextStepButton>;

export default meta;

type Story = StoryObjProped<typeof NextStepButton, NextStepButtonProps>;

export const Primary: Story = {
  render: (args) => ({
    components: { NextStepButton },
    setup() {
      return { args }
    },
    template: `<NextStepButton v-bind="args" />`
  }),
  args: Mock.primary
}

