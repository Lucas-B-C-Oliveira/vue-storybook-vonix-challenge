import NavMenuButtonController, { type NavMenuButtonControllerProps } from '@/components/NavigationMenu/ButtonController/NavMenuButtonController.vue'
import { Mock } from '@/components/NavigationMenu/ButtonController/mock'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/NavigationMenu/ButtonController',
  component: NavMenuButtonController,
  argTypes: {
    state: {
      name: 'State',
      options: ['buttons', 'nextOnly', 'previousOnly'],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],

} satisfies Meta<typeof NavMenuButtonController>;

export default meta;

type Story = StoryObjProped<typeof NavMenuButtonController, NavMenuButtonControllerProps>;


export const Buttons: Story = {
  render: (args) => ({
    components: { NavMenuButtonController },
    setup() {
      return { args }
    },
    template: '<NavMenuButtonController v-bind="args" />'
  }),
  args: Mock.buttons
}

export const NextOnly: Story = {
  render: (args) => ({
    components: { NavMenuButtonController },
    setup() {
      return { args }
    },
    template: '<NavMenuButtonController v-bind="args" />'
  }),
  args: Mock.nextOnly
}

export const PreviousOnly: Story = {
  render: (args) => ({
    components: { NavMenuButtonController },
    setup() {
      return { args }
    },
    template: '<NavMenuButtonController v-bind="args" />'
  }),
  args: Mock.previousOnly
}



