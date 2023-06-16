import MainMenuItemDropdown, { type MainMenuItemDropdownProps } from '@/components/Header/MainMenu/ItemDropdown/MainMenuItemDropdown.vue'
import { Mock } from '@/components/Header/MainMenu/ItemDropdown/mock'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/Header/MainMenu/ItemDropdown',
  component: MainMenuItemDropdown,
  argTypes: {
    text: {
      name: 'Label Text'
    },
    firstIconName: {
      name: 'Icon',
      options: ['dashboard', 'gear', 'phone', 'speechBubble', 'headset', 'user'],
      control: { type: 'radio' },
    },
    arrowDownIconName: {
      name: 'Dropdown Icon',
      options: ['caretDown'],
      control: { type: 'radio' },
    },

    isCurrentRoute: {
      name: 'Active'
    },

    dropdownMenuOptions: {
      name: 'Dropdown Options'
    },

  },
  tags: ['autodocs'],

} satisfies Meta<typeof MainMenuItemDropdown>;

export default meta;

type Story = StoryObjProped<typeof MainMenuItemDropdown, MainMenuItemDropdownProps>;


export const Dashboards: Story = {
  render: (args) => ({
    components: { MainMenuItemDropdown },
    setup() {
      return { args }
    },
    template: '<MainMenuItemDropdown v-bind="args" />'
  }),
  args: Mock.dashboards
}


export const Calls: Story = {
  render: (args) => ({
    components: { MainMenuItemDropdown },
    setup() {
      return { args }
    },
    template: '<MainMenuItemDropdown v-bind="args" />'
  }),
  args: Mock.calls
}

export const Conversations: Story = {
  render: (args) => ({
    components: { MainMenuItemDropdown },
    setup() {
      return { args }
    },
    template: '<MainMenuItemDropdown v-bind="args" />'
  }),
  args: Mock.conversations
}

export const Employees: Story = {
  render: (args) => ({
    components: { MainMenuItemDropdown },
    setup() {
      return { args }
    },
    template: '<MainMenuItemDropdown v-bind="args" />'
  }),
  args: Mock.employees
}

export const Settings: Story = {
  render: (args) => ({
    components: { MainMenuItemDropdown },
    setup() {
      return { args }
    },
    template: '<MainMenuItemDropdown v-bind="args" />'
  }),
  args: Mock.settings
}

export const User: Story = {
  render: (args) => ({
    components: { MainMenuItemDropdown },
    setup() {
      return { args }
    },
    template: '<MainMenuItemDropdown v-bind="args" />'
  }),
  args: Mock.user
}


