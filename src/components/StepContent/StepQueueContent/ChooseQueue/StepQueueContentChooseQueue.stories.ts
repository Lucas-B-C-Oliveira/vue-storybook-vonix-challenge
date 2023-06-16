import StepQueueContentChooseQueue, { type StepQueueContentChooseQueueProps } from '@/components/StepContent/StepQueueContent/ChooseQueue/StepQueueContentChooseQueue.vue'
import { Mock } from '@/components/StepContent/StepQueueContent/ChooseQueue/mock'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/StepContent/Queue/StepQueueContentChooseQueue',
  component: StepQueueContentChooseQueue,
  argTypes: {
    labelText: {
      name: 'Label Text',
      control: {
        type: 'text'
      }
    }
  },
  tags: ['autodocs'],

} satisfies Meta<typeof StepQueueContentChooseQueue>;

export default meta;

type Story = StoryObjProped<typeof StepQueueContentChooseQueue, StepQueueContentChooseQueueProps>;

export const Primary: Story = {
  render: (args) => ({
    components: { StepQueueContentChooseQueue },
    setup() {
      return { args }
    },
    template: `<div style="width: 503px;"> <StepQueueContentChooseQueue v-bind="args" /> </div>`
  }),
  args: Mock.primary
}

