import DashboardsView, { type DashboardsViewProps } from '@/views/Dashboards/DashboardsView.vue'
import { Mock } from '@/views/Dashboards/mock'

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
  render: (args) => ({
    components: { DashboardsView },
    setup() {
      return { args }
    },
    template: `<DashboardsView v-bind="args" />`
  }),
  args: Mock.queue
}

