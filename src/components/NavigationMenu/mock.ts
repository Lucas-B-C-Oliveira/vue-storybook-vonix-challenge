import type { NavMenuProps } from '@/components/NavigationMenu/NavMenu.vue'
import { Mock as ButtonControllerMock } from '@/components/NavigationMenu/ButtonController/mock'
import { Mock as BreadcrumbsMock } from '@/components/NavigationMenu/Breadcrumbs/mock'

const primary: NavMenuProps = {
  buttonControllerState: ButtonControllerMock.buttons,
  breadcrumbsData: BreadcrumbsMock.primary,
}


export const Mock = {
  primary
}