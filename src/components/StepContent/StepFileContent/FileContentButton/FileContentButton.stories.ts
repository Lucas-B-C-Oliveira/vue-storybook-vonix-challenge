import FileContentButton, { type FileContentButtonProps } from '@/components/StepContent/StepFileContent/FileContentButton/FileContentButton.vue'
import { Mock } from '@/components/StepContent/StepFileContent/FileContentButton/mock'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/StepContent/File/Button',
  component: FileContentButton,
  argTypes: {
    iconName: {
      name: 'Icon',
      options: ['rightCaret', 'leftCaret'],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],

} satisfies Meta<typeof FileContentButton>;

export default meta;

type Story = StoryObjProped<typeof FileContentButton, FileContentButtonProps>;

export const RightButton: Story = {
  render: (args) => ({
    components: { FileContentButton },
    setup() {
      return { args }
    },
    template: `<FileContentButton v-bind="args" />`
  }),
  args: Mock.rightButton
}


export const LeftButton: Story = {
  render: (args) => ({
    components: { FileContentButton },
    setup() {
      return { args }
    },
    template: `<FileContentButton v-bind="args" />`
  }),
  args: Mock.leftButton
}

