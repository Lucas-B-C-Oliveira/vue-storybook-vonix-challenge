import NavMenuButton, { type NavMenuButtonProps } from '@/components/Header/NavigationMenu/Button/NavMenuButton.vue'
import { vueRouter } from 'storybook-vue3-router'
import { Mock } from '@/components/Header/NavigationMenu/Button/mock'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/Header/NavigationMenu/Button',
  component: NavMenuButton,
  argTypes: {
    text: {
      name: 'Label Text'
    },
    variant: {
      name: 'Variant',
      options: ['nextOnly', 'previousOnly', 'previousInGroup', 'nextInGroup'],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],

} satisfies Meta<typeof NavMenuButton>;

export default meta;

type Story = StoryObjProped<typeof NavMenuButton, NavMenuButtonProps>;


export const NextOnly: Story = {
  decorators: [vueRouter()],
  render: (args) => ({
    components: { NavMenuButton },
    setup() {
      return { args }
    },
    template: '<NavMenuButton v-bind="args" />'
  }),
  args: Mock.nextOnly
}

export const PreviousOnly: Story = {
  decorators: [vueRouter()],
  render: (args) => ({
    components: { NavMenuButton },
    setup() {
      return { args }
    },
    template: '<NavMenuButton v-bind="args" />'
  }),
  args: Mock.previousOnly
}

export const NextInGroup: Story = {
  decorators: [vueRouter()],
  render: (args) => ({
    components: { NavMenuButton },
    setup() {
      return { args }
    },
    template: '<NavMenuButton v-bind="args" />'
  }),
  args: Mock.nextInGroup
}


export const PreviousInGroup: Story = {
  decorators: [vueRouter()],
  render: (args) => ({
    components: { NavMenuButton },
    setup() {
      return { args }
    },
    template: '<NavMenuButton v-bind="args" />'
  }),
  args: Mock.previousInGroup
}



