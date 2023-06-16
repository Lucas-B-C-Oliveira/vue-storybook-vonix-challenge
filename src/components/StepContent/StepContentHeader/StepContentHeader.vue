<script setup lang="ts">

type StepTitle = 'Fila' | 'Arquivo' | 'Mapeamento'

export interface StepContentHeaderProps {
  title: string | StepTitle
}

defineProps<StepContentHeaderProps>()
</script>

<template>
  <div class="stepHeaderContainer">
    <h2 class="stepHeaderTitle">{{ title }}</h2>
  </div>
</template>

<style scoped>
.stepHeaderTitle {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  color: #444444;
}

.stepHeaderContainer {
  padding-bottom: 16px;
  border-bottom: 1px solid #CED4DA;
  width: 100%;
}
</style>
