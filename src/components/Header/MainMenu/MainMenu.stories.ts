import MainMenu, { type MainMenuProps } from '@/components/Header/MainMenu/MainMenu.vue'
import { Mock } from '@/components/Header/MainMenu/mock'


import type { Meta } from '@storybook/vue3';
import type { StoryObjProped } from '@/types/storybook.types';

const meta = {
  title: 'Components/Header/MainMenu/MainMenu',
  component: MainMenu,
  tags: ['autodocs'],

} satisfies Meta<typeof MainMenu>;
export default meta;
type Story = StoryObjProped<typeof MainMenu, MainMenuProps>;

export const Primary: Story = {
  render: (args) => ({
    components: { MainMenu },
    setup() {
      return { args }
    },
    template: `<div style="width: 100%;"> <MainMenu v-bind="args"/> </div>`
  }),
  args: Mock.primary
}


