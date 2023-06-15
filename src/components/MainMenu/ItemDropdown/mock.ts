import type { MainMenuItemDropdownProps } from "@/components/MainMenu/ItemDropdown/MainMenuItemDropdown.vue";

const dashboards: MainMenuItemDropdownProps = {
  arrowDownIconName: 'caretDown',
  text: 'Dashboards',
  firstIconName: 'dashboard',
  isCurrentRoute: false,
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
}

const calls: MainMenuItemDropdownProps = {
  arrowDownIconName: 'caretDown',
  text: 'Chamadas',
  firstIconName: 'phone',
  isCurrentRoute: false,
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
}

const conversations: MainMenuItemDropdownProps = {
  arrowDownIconName: 'caretDown',
  text: 'Conversas',
  firstIconName: 'speechBubble',
  isCurrentRoute: false,
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
}

const employees: MainMenuItemDropdownProps = {
  arrowDownIconName: 'caretDown',
  text: 'Agentes',
  firstIconName: 'headset',
  isCurrentRoute: false,
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
}

const settings: MainMenuItemDropdownProps = {
  arrowDownIconName: 'caretDown',
  text: 'Configurações',
  firstIconName: 'gear',
  isCurrentRoute: false,
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
}

const user: MainMenuItemDropdownProps = {
  arrowDownIconName: 'caretDown',
  text: 'Olá, Rodrigo Santos',
  firstIconName: 'user',
  isCurrentRoute: false,
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
}

export const Mock = {
  dashboards,
  calls,
  conversations,
  employees,
  settings,
  user
}