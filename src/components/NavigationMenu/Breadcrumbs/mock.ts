import type { BreadcrumbsProps } from "@/components/NavigationMenu/Breadcrumbs/NavMenuBreadcrumbs.vue"

const primary: BreadcrumbsProps = {
  arrowIconName: 'caretLeft',
  title: 'Importação de contatos',
  breadcrumbsRoutes: [
    {
      path: '/',
      text: 'Dashboards'
    },
    {
      path: '/',
      text: 'Campanhas'
    },
    {
      path: '/',
      text: 'Importação'
    },
  ]
}

export const Mock = {
  primary
}