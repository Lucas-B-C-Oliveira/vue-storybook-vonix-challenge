import DashboardsView, { type DashboardsViewProps } from '@/views/Dashboards/DashboardsView.vue'
import { Mock } from '@/views/Dashboards/mock'
import { vueRouter } from 'storybook-vue3-router'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Views/DashboardsView',
  component: DashboardsView,
  tags: ['autodocs'],

} satisfies Meta<typeof DashboardsView>;

export default meta;

type Story = StoryObjProped<typeof DashboardsView, DashboardsViewProps>;

export const Queue: Story = {
  decorators: [vueRouter()],
  render: (args) => ({
    components: { DashboardsView },
    setup() {
      return { args }
    },
    template: `<DashboardsView v-bind="args" />`
  }),
  args: Mock.queue
}


export const FileSelectAFile: Story = {
  decorators: [vueRouter()],
  render: (args) => ({
    components: { DashboardsView },
    setup() {
      return { args }
    },
    template: `<DashboardsView v-bind="args" />`
  }),
  args: Mock.fileSelectAFile
}

export const FileNextStep: Story = {
  decorators: [vueRouter()],
  render: (args) => ({
    components: { DashboardsView },
    setup() {
      return { args }
    },
    template: `<DashboardsView v-bind="args" />`
  }),
  args: Mock.fileNextStep
}

export const FileNotFound: Story = {
  decorators: [vueRouter()],
  render: (args) => ({
    components: { DashboardsView },
    setup() {
      return { args }
    },
    template: `<DashboardsView v-bind="args" />`
  }),
  args: Mock.fileNotFound
}

