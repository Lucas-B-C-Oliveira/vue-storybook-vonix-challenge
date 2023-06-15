import type { MainMenuProps } from "@/components/MainMenu/MainMenu.vue"
import { Mock as ItemDropdownMock } from "@/components/MainMenu/ItemDropdown/mock"
import { Mock as ItemButtonMock } from "@/components/MainMenu/ItemButton/mock"
import { Mock as LogoMock } from "@/components/MainMenu/Logo/mock"

const primary: MainMenuProps = {
  logo: LogoMock.primary,
  dashboards: ItemDropdownMock.dashboards,
  calls: ItemDropdownMock.calls,
  conversations: ItemDropdownMock.conversations,
  employees: ItemDropdownMock.employees,
  settings: ItemDropdownMock.settings,
  api: ItemButtonMock.api,
  phoneList: ItemButtonMock.phoneList,
  user: ItemDropdownMock.user,
}

export const Mock = {
  primary
}