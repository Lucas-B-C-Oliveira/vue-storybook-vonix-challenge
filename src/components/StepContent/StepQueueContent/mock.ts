import type { StepQueueContentProps } from '@/components/StepContent/StepQueueContent/StepQueueContent.vue'
import { Mock as ChooseQueueMock } from '@/components/StepContent/StepQueueContent/ChooseQueue/mock'

const primary: StepQueueContentProps = {
  queue: ChooseQueueMock.primary
}

export const Mock = {
  primary
}