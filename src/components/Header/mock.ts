import type { HeaderComponentProps } from '@/components/Header/HeaderComponent.vue'
import { Mock as MainMenuMock } from '@/components/Header/MainMenu/mock'
import { Mock as NavMenuMock } from '@/components/Header/NavigationMenu/mock'

const primary: HeaderComponentProps = {
  mainMenuProps: MainMenuMock.primary,
  navMenuProps: {
    ...NavMenuMock.primary,
    buttonControllerState: {
      state: 'nextOnly',
    }
  }
}


export const Mock = {
  primary
}