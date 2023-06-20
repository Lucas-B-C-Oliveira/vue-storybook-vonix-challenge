<script setup lang="ts">
import type { StepContentHeaderProps } from '@/components/StepContent/StepContentHeader/StepContentHeader.vue'
import StepQueueContent, { type StepQueueContentProps } from '@/components/StepContent/StepQueueContent/StepQueueContent.vue'
import StepContentHeader from '@/components/StepContent/StepContentHeader/StepContentHeader.vue';
import { computed } from 'vue'
import StepFileContent, { type StepFileContentProps } from '@/components/StepContent/StepFileContent/StepFileContent.vue'

type CurrentStep = 'queue' | 'file' | 'fileMapping'

export interface StepContentProps {
  stepContentTitle: StepContentHeaderProps
  currentStep: CurrentStep
  stepContentQueue?: StepQueueContentProps
  stepContentFile?: StepFileContentProps
}

const props = defineProps<StepContentProps>()

const isTheQueueStep = computed(() => (props.currentStep === 'queue') && (typeof props.stepContentQueue !== 'undefined'))
const isTheFileStep = computed(() => (props.currentStep === 'file') && (typeof props.stepContentFile !== 'undefined'))

</script>

<template>
  <main :class="{ 'stepContainerQueue': isTheQueueStep, 'stepContainer': !isTheQueueStep }">
    <StepContentHeader v-bind="stepContentTitle" />
    <StepQueueContent v-if="isTheQueueStep" @chooseQueueSelectChange="$emit('chooseQueueSelectChange', $event)"
      v-bind="stepContentQueue" />
    <StepFileContent v-else-if="isTheFileStep" v-bind="stepContentFile" />
  </main>
</template>

<style scoped>
.stepContainerQueue {
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

.stepContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  gap: 20px;
  min-height: 619px;
  width: 100%;
  max-width: 1133px;
  height: 100%;
  background: #FAFAFA;
}
</style>