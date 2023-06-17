import StepFileContent, { type StepFileContentProps } from '@/components/StepContent/StepFileContent/StepFileContent.vue'
import { Mock } from '@/components/StepContent/StepFileContent/mock'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/StepContent/File/StepFileContent',
  component: StepFileContent,
  tags: ['autodocs']

} satisfies Meta<typeof StepFileContent>;

export default meta;

type Story = StoryObjProped<typeof StepFileContent, StepFileContentProps>;

export const SelectAFile: Story = {
  render: (args) => ({
    components: { StepFileContent },
    setup() {
      return { args }
    },
    template: `<StepFileContent v-bind="args" />`
  }),
  args: Mock.selectAFile
}

export const NextStep: Story = {
  render: (args) => ({
    components: { StepFileContent },
    setup() {
      return { args }
    },
    template: `<StepFileContent v-bind="args" />`
  }),
  args: Mock.nextStep
}

export const FileNotFound: Story = {
  render: (args) => ({
    components: { StepFileContent },
    setup() {
      return { args }
    },
    template: `<StepFileContent v-bind="args" />`
  }),
  args: Mock.fileNotFound
}

