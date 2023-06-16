import { type StepContentProps } from '@/components/StepContent/StepContent.vue'
import { Mock as StepQueueContentMock } from '@/components/StepContent/StepQueueContent/mock'
import { Mock as StepContentHeaderMock } from '@/components/StepContent/StepContentHeader/mock'


const queue: StepContentProps = {
  currentStep: 'queue',
  stepContentTitle: StepContentHeaderMock.queue,
  stepContentQueue: StepQueueContentMock.primary

}

export const Mock = {
  queue,
}