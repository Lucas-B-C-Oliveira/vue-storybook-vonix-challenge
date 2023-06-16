import StepQueueContent, { type StepQueueContentProps } from '@/components/StepContent/StepQueueContent/StepQueueContent.vue'
import { Mock } from '@/components/StepContent/StepQueueContent/mock'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/StepContent/Queue/StepQueueContent',
  component: StepQueueContent,
  tags: ['autodocs'],

} satisfies Meta<typeof StepQueueContent>;

export default meta;

type Story = StoryObjProped<typeof StepQueueContent, StepQueueContentProps>;

export const Primary: Story = {
  render: (args) => ({
    components: { StepQueueContent },
    setup() {
      return { args }
    },
    template: `<StepQueueContent v-bind="args" />`
  }),
  args: Mock.primary
}

