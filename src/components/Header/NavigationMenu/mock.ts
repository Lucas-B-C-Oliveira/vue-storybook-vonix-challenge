import type { NavMenuProps } from '@/components/Header/NavigationMenu/NavMenu.vue'
import { Mock as ButtonControllerMock } from '@/components/Header/NavigationMenu/ButtonController/mock'
import { Mock as BreadcrumbsMock } from '@/components/Header/NavigationMenu/Breadcrumbs/mock'

const primary: NavMenuProps = {
  buttonControllerState: ButtonControllerMock.buttons,
  breadcrumbsData: BreadcrumbsMock.primary,
}


export const Mock = {
  primary
}