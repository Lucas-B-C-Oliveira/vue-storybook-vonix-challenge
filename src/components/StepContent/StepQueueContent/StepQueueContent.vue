<script setup lang="ts">
import StepQueueContentChooseQueue, { type StepQueueContentChooseQueueProps } from '@/components/StepContent/StepQueueContent/ChooseQueue/StepQueueContentChooseQueue.vue'

export interface StepQueueContentProps {
  queue: StepQueueContentChooseQueueProps
}

const props = defineProps<StepQueueContentProps>()

</script>

<template>
  <section class="stepQueueContentContainer">
    <StepQueueContentChooseQueue v-bind="queue" @chooseQueueSelectChange="$emit('chooseQueueSelectChange', $event)" />
  </section>
</template>

<style scoped>
.stepQueueContentContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 503px;
  max-height: 619px;
}
</style>