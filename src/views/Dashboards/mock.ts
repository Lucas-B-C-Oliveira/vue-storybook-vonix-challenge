
import type { DashboardsViewProps } from '@/views/Dashboards/DashboardsView.vue'
import { Mock as HeaderComponentMock } from '@/components/Header/mock'
import { Mock as SidebarMock } from '@/components/Sidebar/mock'
import { Mock as StepQueueContentMock } from '@/components/StepContent/mock'

const queue: DashboardsViewProps = {
  headerComponentProps: {
    mainMenuProps: {
      ...HeaderComponentMock.primary.mainMenuProps,
      logo: {
        ...HeaderComponentMock.primary.mainMenuProps.logo,
        isCurrentRoute: true
      },
      dashboards: {
        ...HeaderComponentMock.primary.mainMenuProps.dashboards,
        isCurrentRoute: true,
      }
    },
    navMenuProps: {
      ...HeaderComponentMock.primary.navMenuProps,
      buttonControllerState: {
        state: 'nextOnly',
      },
    },
  },
  leftSidebarProps: {
    ...SidebarMock.primary,
    queue: {
      ...SidebarMock.primary.queue,
      state: 'current'
    }
  },
  stepContentProps: StepQueueContentMock.queue,
}

export const Mock = {
  queue,
}