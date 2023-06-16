import NavMenu, { type NavMenuProps } from '@/components/Header/NavigationMenu/NavMenu.vue'
import { Mock } from '@/components/Header/NavigationMenu/mock'
import { vueRouter } from 'storybook-vue3-router'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/NavigationMenu/NavMenu',
  component: NavMenu,

  tags: ['autodocs'],

} satisfies Meta<typeof NavMenu>;

export default meta;

type Story = StoryObjProped<typeof NavMenu, NavMenuProps>;


export const Primary: Story = {
  decorators: [vueRouter()],
  render: (args) => ({
    components: { NavMenu },
    setup() {
      return { args }
    },
    template: '<NavMenu v-bind="args" />'
  }),
  args: Mock.primary
}

