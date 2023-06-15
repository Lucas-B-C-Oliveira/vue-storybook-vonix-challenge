import type { NavMenuButtonControllerProps } from '@/components/NavigationMenu/ButtonController/NavMenuButtonController.vue'

const buttons: NavMenuButtonControllerProps = {
  state: 'buttons'
}

const nextOnly: NavMenuButtonControllerProps = {
  state: 'nextOnly'
}

const previousOnly: NavMenuButtonControllerProps = {
  state: 'previousOnly'
}

export const Mock = {
  buttons,
  nextOnly,
  previousOnly
}