import DragAndDropFile, { type DragAndDropFileProps } from '@/components/StepContent/StepFileContent/DragAndDropFile/DragAndDropFile.vue'
import { Mock } from '@/components/StepContent/StepFileContent/DragAndDropFile/mock'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/StepContent/File/DragAndDropFile',
  component: DragAndDropFile,
  argTypes: {
    fileTypeHintText: {
      name: 'File Type Hint'
    },

    interactionTipText: {
      name: 'Interaction Tip'
    },

    interactionTipIconName: {
      name: 'Icon',
      options: ['dragAndDropFile'],
      control: { type: 'radio' },
    },
    state: {
      name: 'State',
      options: ['selectedFile', 'selectAFile'],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],

} satisfies Meta<typeof DragAndDropFile>;

export default meta;

type Story = StoryObjProped<typeof DragAndDropFile, DragAndDropFileProps>;

export const SelectAFile: Story = {
  render: (args) => ({
    components: { DragAndDropFile },
    setup() {
      return { args }
    },
    template: `<DragAndDropFile v-bind="args" />`
  }),
  args: Mock.selectAFile
}


export const SelectedFile: Story = {
  render: (args) => ({
    components: { DragAndDropFile },
    setup() {
      return { args }
    },
    template: `<DragAndDropFile v-bind="args" />`
  }),
  args: Mock.selectedFile
}

