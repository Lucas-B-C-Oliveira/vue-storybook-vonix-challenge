import MainMenu, { type MainMenuProps } from '@/components/MainMenu/MainMenu.vue'
import * as Logo from '@/components/MainMenu/Logo/MainMenuLogo.stories'
import * as ItemDropdown from '@/components/MainMenu/ItemDropdown/MainMenuItemDropdown.stories'
import * as ItemButton from '@/components/MainMenu/ItemButton/MainMenuItemButton.stories'

import type { Meta } from '@storybook/vue3';
import type { StoryObjProped } from '@/types/storybook.types';

const meta = {
  title: 'Components/MainMenu/MainMenu',
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
    template: ` <div style="width: 100%;">  <MainMenu v-bind="args"/>   </div> `
  }),
  args: {
    logo: { ...Logo.Primary.args },
    dashboards: { ...ItemDropdown.Primary.args, firstIconName: 'dashboard', text: 'Dashboards' },
    calls: { ...ItemDropdown.Primary.args, firstIconName: 'phone', text: 'Chamadas' },
    conversations: { ...ItemDropdown.Primary.args, firstIconName: 'speechBubble', text: 'Conversas' },
    employees: { ...ItemDropdown.Primary.args, firstIconName: 'headset', text: 'employees' },
    settings: { ...ItemDropdown.Primary.args, firstIconName: 'gear', text: 'Configurações' },
    api: { ...ItemButton.Primary.args, firstIconName: 'api' },
    phoneList: { ...ItemButton.Primary.args, firstIconName: 'phoneList' },
    user: { ...ItemDropdown.Primary.args, firstIconName: 'user', text: 'Ola, Rodrigo Santos' },
  }
}


