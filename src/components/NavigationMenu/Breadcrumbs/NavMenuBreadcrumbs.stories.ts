import NavMenuBreadcrumbs, { type BreadcrumbsProps } from '@/components/NavigationMenu/Breadcrumbs/NavMenuBreadcrumbs.vue'
import { vueRouter } from 'storybook-vue3-router'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/NavigationMenu/Breadcrumbs',
  component: NavMenuBreadcrumbs,
  argTypes: {
    title: {
      name: 'Label Text'
    },
    arrowIconName: {
      name: 'Icon',
      options: ['caretLeft'],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],

} satisfies Meta<typeof NavMenuBreadcrumbs>;

export default meta;

type Story = StoryObjProped<typeof NavMenuBreadcrumbs, BreadcrumbsProps>;


export const Primary: Story = {
  decorators: [vueRouter()],
  render: (args) => ({
    components: { NavMenuBreadcrumbs },
    setup() {
      return { args }
    },
    template: '<NavMenuBreadcrumbs v-bind="args" />'
  }),
  args: {
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
}


