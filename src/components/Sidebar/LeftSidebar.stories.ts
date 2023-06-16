import LeftSidebar, { type LeftSidebarProps } from '@/components/Sidebar/LeftSidebar.vue'
import { Mock } from '@/components/Sidebar/mock'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/Sidebar/LeftSidebar',
  component: LeftSidebar,

  tags: ['autodocs'],

} satisfies Meta<typeof LeftSidebar>;

export default meta;

type Story = StoryObjProped<typeof LeftSidebar, LeftSidebarProps>;

export const Primary: Story = {
  render: (args) => ({
    components: { LeftSidebar },
    setup() {
      return { args }
    },
    template: '<LeftSidebar v-bind="args" />'
  }),
  args: Mock.primary
}

