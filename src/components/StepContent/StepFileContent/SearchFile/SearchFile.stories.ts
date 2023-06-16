import SearchFile, { type SearchFileProps } from '@/components/StepContent/StepFileContent/SearchFile/SearchFile.vue'
import { Mock } from '@/components/StepContent/StepFileContent/SearchFile/mock'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/StepContent/File/SearchFile',
  component: SearchFile,
  argTypes: {
    placeholderText: {
      name: 'Placeholder Text',
      control: { type: 'text' },
    },
    iconName: {
      name: 'Icon Name',
      options: ['magnifyingGlass'],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],

} satisfies Meta<typeof SearchFile>;

export default meta;

type Story = StoryObjProped<typeof SearchFile, SearchFileProps>;

export const Primary: Story = {
  render: (args) => ({
    components: { SearchFile },
    setup() {
      return { args }
    },
    template: `<SearchFile v-bind="args" />`
  }),
  args: Mock.primary
}

