import type { MainMenuItemButtonProps } from "@/components/Header/MainMenu/ItemButton/MainMenuItemButton.vue"

const api: MainMenuItemButtonProps = {
  firstIconName: 'api',
  isCurrentRoute: false,
  routePath: '/'
}

const phoneList: MainMenuItemButtonProps = {
  firstIconName: 'phoneList',
  isCurrentRoute: false,
  routePath: '/'
}

export const Mock = {
  api,
  phoneList
}