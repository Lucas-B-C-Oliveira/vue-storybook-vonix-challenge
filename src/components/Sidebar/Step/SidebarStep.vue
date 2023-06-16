<script setup lang="ts">
import SvgIconImporter from '@/components/SvgIconImporter.vue';


type StepText = 'Fila' | 'Arquivo' | 'Mapeamento do arquivo' | 'Mapeamento do perfilador' | 'Análise dos campos do arquivo' | 'Importação'


export interface SidebarStepProps {
  text: string | StepText
  feedbackText?: string
  state: 'current' | 'finished' | 'default'
}

defineProps<SidebarStepProps>()
</script>

<template>
  <div v-if="state === 'default'" class="stepContainer">
    <SvgIconImporter name="defaultStep" />
    <p class="stepTextDefault">{{ text }}</p>
  </div>

  <div v-if="state === 'current'" class="stepContainer">
    <SvgIconImporter name="currentStep" />
    <p class="stepTextCurrent">{{ text }}</p>
  </div>

  <div v-if="state === 'finished'" class="finishedStepContainer">
    <div class="stepContainer">
      <SvgIconImporter name="finishedStep" />
      <p class="stepTextFinished">{{ text }}</p>
    </div>
    <p class="stepFeedbackText">{{ feedbackText }}</p>

  </div>
</template>

<style scoped>
.stepFeedbackText {
  padding-left: 16px;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #7C7C7C;
}

.finishedStepContainer {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.stepContainer {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center
}

.stepTextDefault {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: #7C7C7C;
}

.stepTextCurrent {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #3D55AE;
}

.stepTextFinished {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #7C7C7C;
}
</style>
