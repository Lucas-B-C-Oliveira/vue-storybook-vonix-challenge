<script setup lang="ts">
import type { StepContentHeaderProps } from '@/components/StepContent/StepContentHeader/StepContentHeader.vue'
import StepQueueContent, { type StepQueueContentProps } from '@/components/StepContent/StepQueueContent/StepQueueContent.vue'
import StepContentHeader from '@/components/StepContent/StepContentHeader/StepContentHeader.vue';

type CurrentStep = 'queue' | 'file' | 'fileMapping'

export interface StepContentProps {
  stepContentTitle: StepContentHeaderProps
  currentStep: CurrentStep
  stepContentQueue?: StepQueueContentProps
}

const props = defineProps<StepContentProps>()


</script>

<template>
  <main class="stepContainer">
    <StepContentHeader v-bind="stepContentTitle" />
    <template v-if="(currentStep === 'queue') && (typeof stepContentQueue !== 'undefined')">
      <StepQueueContent @chooseQueueSelectChange="$emit('chooseQueueSelectChange', $event)" v-bind="stepContentQueue" />
    </template>
  </main>
</template>

<style scoped>
.stepContainer {

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 70px 530px 50px 100px;
  gap: 20px;

  min-width: 1133px;
  min-height: 619px;

  width: 100%;
  height: 100%;

  background: #FAFAFA;

}
</style>