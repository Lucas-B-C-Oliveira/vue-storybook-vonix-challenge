import MainMenuItemDropdown, { type MainMenuItemDropdownProps } from '@/components/MainMenuItemDropdown/MainMenuItemDropdown.vue'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/MainMenu/ItemDropdown',
  component: MainMenuItemDropdown,
  argTypes: {

    firstIconName: {
      options: ['dashboard', 'gear', 'phone', 'speechBubble', 'headset', 'user'],
      control: { type: 'radio' },
    },
    arrowDownIconName: {
      options: ['caretDown'],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],

} satisfies Meta<typeof MainMenuItemDropdown>;

export default meta;

type Story = StoryObjProped<typeof MainMenuItemDropdown, MainMenuItemDropdownProps>;


export const Primary: Story = {
  render: (args) => ({
    components: { MainMenuItemDropdown },
    setup() {
      return { args }
    },
    template: '<MainMenuItemDropdown v-bind="args" />'
  }),
  args: {
    arrowDownIconName: 'caretDown',
    dropdownMenuOptions: [
      { routePath: '/', text: 'Todas as chamadas' },
      { routePath: '/', text: 'Abandono' },
      { routePath: '/', text: 'Tipo' },
      { routePath: '/', text: 'Número' },
      { routePath: '/', text: 'Localidade' },
      { routePath: '/', text: 'Operadora' },
      { routePath: '/', text: 'Tronco' },
      { routePath: '/', text: 'Horário' },
      { routePath: '/', text: 'Duração' },
      { routePath: '/', text: 'Filas' },
      { routePath: '/', text: 'Desempenho' },
      { routePath: '/', text: 'Atendimentos por horário' },
    ],
    firstIconName: 'phone',
    isCurrentRoute: false,
    text: 'Chamadas',
  }
}


