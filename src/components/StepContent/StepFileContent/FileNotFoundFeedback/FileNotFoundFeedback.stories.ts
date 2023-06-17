import FileNotFoundFeedback, { type FileNotFoundFeedbackProps } from '@/components/StepContent/StepFileContent/FileNotFoundFeedback/FileNotFoundFeedback.vue'
import { Mock } from '@/components/StepContent/StepFileContent/FileNotFoundFeedback/mock'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/StepContent/File/FileNotFoundFeedback',
  component: FileNotFoundFeedback,
  argTypes: {
    iconName: {
      name: 'Icon',
      options: ['info'],
      control: { type: 'radio' },
    },
    title: {
      name: 'Title',
    },
    subtitle: {
      name: 'Subtitle',
    },

  },
  tags: ['autodocs']

} satisfies Meta<typeof FileNotFoundFeedback>;

export default meta;

type Story = StoryObjProped<typeof FileNotFoundFeedback, FileNotFoundFeedbackProps>;

export const Primary: Story = {
  render: (args) => ({
    components: { FileNotFoundFeedback },
    setup() {
      return { args }
    },
    template: `<FileNotFoundFeedback v-bind="args" />`
  }),
  args: Mock.primary
}

