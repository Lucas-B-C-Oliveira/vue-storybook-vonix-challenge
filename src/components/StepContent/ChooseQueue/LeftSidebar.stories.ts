import StepContentChooseQueue, { type StepContentChooseQueueProps } from '@/components/StepContent/ChooseQueue/StepContentChooseQueue.vue'
import { Mock } from '@/components/StepContent/ChooseQueue/mock'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/StepContent/StepContentChooseQueue',
  component: StepContentChooseQueue,
  argTypes: {
    labelText: {
      name: 'Label Text',
      control: {
        type: 'text'
      }
    }
  },
  tags: ['autodocs'],

} satisfies Meta<typeof StepContentChooseQueue>;

export default meta;

type Story = StoryObjProped<typeof StepContentChooseQueue, StepContentChooseQueueProps>;

export const Primary: Story = {
  render: (args) => ({
    components: { StepContentChooseQueue },
    setup() {
      return { args }
    },
    template: `<div style="width: 503px;"> <StepContentChooseQueue v-bind="args" /> </div>`
  }),
  args: Mock.primary
}

