import MainMenuItemButton, { type MainMenuItemButtonProps } from '@/components/Header/MainMenu/ItemButton/MainMenuItemButton.vue'
import { Mock } from '@/components/Header/MainMenu/ItemButton/mock'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/MainMenu/ItemButton',
  component: MainMenuItemButton,
  argTypes: {
    firstIconName: {
      name: 'Icon',
      options: ['api', 'phoneList'],
      control: { type: 'radio' },
    },
    isCurrentRoute: {
      name: 'Active'
    },
    routePath: {
      name: 'Route Path',
    },
  },
  tags: ['autodocs'],

} satisfies Meta<typeof MainMenuItemButton>;

export default meta;

type Story = StoryObjProped<typeof MainMenuItemButton, MainMenuItemButtonProps>;

export const Api: Story = {
  render: (args) => ({
    components: { MainMenuItemButton },
    setup() {
      return { args }
    },
    template: '<MainMenuItemButton v-bind="args" />'
  }),
  args: Mock.api
}


export const PhoneList: Story = {
  render: (args) => ({
    components: { MainMenuItemButton },
    setup() {
      return { args }
    },
    template: '<MainMenuItemButton v-bind="args" />'
  }),
  args: Mock.phoneList
}


