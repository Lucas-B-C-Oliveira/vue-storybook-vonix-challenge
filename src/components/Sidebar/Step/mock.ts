import type { SidebarStepProps } from '@/components/Sidebar/Step/SidebarStep.vue'

const currentStep: SidebarStepProps = {
  text: 'Fila',
  state: 'current',
}

const defaultStep: SidebarStepProps = {
  text: 'Fila',
  state: 'default',
}

const finishedStep: SidebarStepProps = {
  text: 'Fila',
  feedbackText: 'Nome da fila escolhida',
  state: 'finished',
}

export const Mock = {
  currentStep,
  defaultStep,
  finishedStep
}