
import type { DashboardsViewProps } from '@/views/Dashboards/DashboardsView.vue'
import { Mock as HeaderComponentMock } from '@/components/Header/mock'
import { Mock as SidebarMock } from '@/components/Sidebar/mock'
import { Mock as StepContentMock } from '@/components/StepContent/mock'
import { Mock as StepContentFileMock } from '@/components/StepContent/StepFileContent/mock'

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
  stepContentProps: StepContentMock.queue,
}

const fileSelectAFile: DashboardsViewProps = {
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
        state: 'buttons',
      },
    },
  },
  leftSidebarProps: {
    ...SidebarMock.primary,
    queue: {
      ...SidebarMock.primary.queue,
      state: 'finished'
    },
    file: {
      ...SidebarMock.primary.file,
      state: 'current'

    },

  },
  stepContentProps: StepContentMock.file,
}

const fileNextStep: DashboardsViewProps = {
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
        state: 'buttons',
      },
    },
  },
  leftSidebarProps: {
    ...SidebarMock.primary,
    queue: {
      ...SidebarMock.primary.queue,
      state: 'finished'
    },
    file: {
      ...SidebarMock.primary.file,
      state: 'current'

    },

  },
  stepContentProps: {
    ...StepContentMock.file,
    stepContentFile: {
      ...StepContentFileMock.nextStep

    }
  },
}

const fileNotFound: DashboardsViewProps = {
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
        state: 'buttons',
      },
    },
  },
  leftSidebarProps: {
    ...SidebarMock.primary,
    queue: {
      ...SidebarMock.primary.queue,
      state: 'finished'
    },
    file: {
      ...SidebarMock.primary.file,
      state: 'current'

    },

  },
  stepContentProps: {
    ...StepContentMock.file,
    stepContentFile: {
      ...StepContentFileMock.fileNotFound
    }
  },
}


export const Mock = {
  queue,
  fileSelectAFile,
  fileNextStep,
  fileNotFound
}