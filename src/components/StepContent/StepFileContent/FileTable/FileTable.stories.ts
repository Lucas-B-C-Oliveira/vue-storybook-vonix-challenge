import FileTable, { type FileTableProps } from '@/components/StepContent/StepFileContent/FileTable/FileTable.vue'
import { Mock } from '@/components/StepContent/StepFileContent/FileTable/mock'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/StepContent/File/FileTable',
  component: FileTable,
  argTypes: {
    fileName: {
      name: 'File Name',
      control: { type: 'text' },
    },
  },
  tags: ['autodocs'],

} satisfies Meta<typeof FileTable>;

export default meta;

type Story = StoryObjProped<typeof FileTable, FileTableProps>;

export const Primary: Story = {
  render: (args) => ({
    components: { FileTable },
    setup() {
      return { args }
    },
    template: `<FileTable v-bind="args" />`
  }),
  args: Mock.primary
}

