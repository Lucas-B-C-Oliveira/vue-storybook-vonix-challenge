import FileContentHeader, { type FileContentHeaderProps } from '@/components/StepContent/StepFileContent/FileContentHeader/FileContentHeader.vue'
import { Mock } from '@/components/StepContent/StepFileContent/FileContentHeader/mock'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/StepContent/File/FileContentHeader',
  component: FileContentHeader,
  argTypes: {
    title: {
      name: 'Title',
      control: { type: 'text' },
    },
  },
  tags: ['autodocs'],

} satisfies Meta<typeof FileContentHeader>;

export default meta;

type Story = StoryObjProped<typeof FileContentHeader, FileContentHeaderProps>;

export const Primary: Story = {
  render: (args) => ({
    components: { FileContentHeader },
    setup() {
      return { args }
    },
    template: `<FileContentHeader v-bind="args" />`
  }),
  args: Mock.primary
}

