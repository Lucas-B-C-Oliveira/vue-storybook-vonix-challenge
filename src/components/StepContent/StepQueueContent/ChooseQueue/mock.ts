import type { StepContentChooseQueueProps } from '@/components/StepContent/StepQueueContent/ChooseQueue/StepQueueContentChooseQueue.vue'

const primary: StepContentChooseQueueProps = {
  labelText: 'Escolha a fila *',
  queues: [
    {
      text: 'Escolha uma opção',
      value: '',
    },
    {
      text: 'Fila 1',
      value: 'queue1',
    },
    {
      text: 'Fila 2',
      value: 'queue2',
    },
  ]
}

export const Mock = {
  primary
}