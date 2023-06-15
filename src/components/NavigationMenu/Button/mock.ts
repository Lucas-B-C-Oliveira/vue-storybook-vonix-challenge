import type { NavMenuButtonProps } from '@/components/NavigationMenu/Button/NavMenuButton.vue'


const nextOnly: NavMenuButtonProps = {
  text: 'Próximo',
  variant: 'nextOnly',
}

const nextInGroup: NavMenuButtonProps = {
  text: 'Próximo',
  variant: 'nextInGroup',
}

const previousOnly: NavMenuButtonProps = {
  text: 'Voltar',
  variant: 'previousOnly',
}

const previousInGroup: NavMenuButtonProps = {
  text: 'Voltar',
  variant: 'previousInGroup',
}


export const Mock = {
  nextOnly,
  nextInGroup,
  previousOnly,
  previousInGroup
}