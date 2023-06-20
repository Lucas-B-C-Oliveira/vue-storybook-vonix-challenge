import { type StepContentProps } from '@/components/StepContent/StepContent.vue'
import { Mock as StepQueueContentMock } from '@/components/StepContent/StepQueueContent/mock'
import { Mock as StepContentHeaderMock } from '@/components/StepContent/StepContentHeader/mock'
import { Mock as StepContentFileMock } from '@/components/StepContent/StepFileContent/mock'


const queue: StepContentProps = {
  currentStep: 'queue',
  stepContentTitle: StepContentHeaderMock.queue,
  stepContentQueue: StepQueueContentMock.primary,
  stepContentFile: StepContentFileMock.selectAFile,
}

const file: StepContentProps = {
  currentStep: 'file',
  stepContentTitle: StepContentHeaderMock.file,
  stepContentQueue: StepQueueContentMock.primary,
  stepContentFile: StepContentFileMock.selectAFile,
}

export const Mock = {
  queue,
  file,
}