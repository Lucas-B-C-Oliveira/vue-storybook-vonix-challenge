import MainMenuLogo, { type MainMenuLogoProps } from '@/components/MainMenu/Logo/MainMenuLogo.vue'
import { Mock } from '@/components/MainMenu/Logo/mock'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/MainMenu/Logo',
  component: MainMenuLogo,
  argTypes: {
    iconName: {
      name: 'Icon',
      options: ['logo'],
      control: { type: 'radio' },
    },
    isCurrentRoute: {
      name: 'Active'
    },
  },
  tags: ['autodocs'],

} satisfies Meta<typeof MainMenuLogo>;

export default meta;

type Story = StoryObjProped<typeof MainMenuLogo, MainMenuLogoProps>;


export const Primary: Story = {
  render: (args) => ({
    components: { MainMenuLogo },
    setup() {
      return { args }
    },
    template: '<MainMenuLogo v-bind="args" />'
  }),
  args: Mock.primary
}


