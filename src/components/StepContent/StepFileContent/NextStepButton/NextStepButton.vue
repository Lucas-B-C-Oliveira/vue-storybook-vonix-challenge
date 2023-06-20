<script setup lang="ts">
import SvgIconImporter from '@/components/SvgIconImporter.vue';


export interface NextStepButtonProps {
  buttonText: string
  iconName: 'rightArrow'
}

defineProps<NextStepButtonProps>()

</script>

<template>
  <button class="nextStepButtonContainer">
    {{ buttonText }}
    <SvgIconImporter :name="iconName" />
  </button>
</template>

<style scoped>
.nextStepButtonContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 18px;
  gap: 5px;

  width: 1073px;
  height: fit-content;

  background: #4B68D2;
  border: 2px solid #4B68D2;
  border-radius: 5px;

  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  cursor: pointer;

  color: #FFFFFF;
}
</style>