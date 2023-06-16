import HeaderComponent, { type HeaderComponentProps } from '@/components/Header/HeaderComponent.vue'
import { Mock } from '@/components/Header/mock'
import { vueRouter } from 'storybook-vue3-router'

import type { StoryObjProped } from '@/types/storybook.types';
import type { Meta } from '@storybook/vue3';

const meta = {
  title: 'Components/Header/HeaderComponent',
  component: HeaderComponent,

  tags: ['autodocs'],

} satisfies Meta<typeof HeaderComponent>;

export default meta;

type Story = StoryObjProped<typeof HeaderComponent, HeaderComponentProps>;


export const Primary: Story = {
  decorators: [vueRouter()],
  render: (args) => ({
    components: { HeaderComponent },
    setup() {
      return { args }
    },
    template: '<HeaderComponent v-bind="args" />'
  }),
  args: Mock.primary
}

