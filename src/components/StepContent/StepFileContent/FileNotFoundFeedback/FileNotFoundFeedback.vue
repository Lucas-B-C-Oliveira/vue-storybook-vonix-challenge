<script setup lang="ts">
import SvgIconImporter from '@/components/SvgIconImporter.vue'

export interface FileNotFoundFeedbackProps {
  iconName: string
  title: string
  subtitle: string
}

defineProps<FileNotFoundFeedbackProps>()

</script>

<template>
  <section class="fileNotFoundContainer">
    <SvgIconImporter :name="iconName" />
    <p class="titleText">{{ title }}</p>
    <p class="subtitleText">{{ subtitle }}</p>
  </section>
</template>

<style scoped>
.fileNotFoundContainer {
  display: flex;
  flex-direction: column;
  padding: 54px;
  gap: 20px;
  height: 100%;
  width: 100%;
  align-items: center;
}

.titleText {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #444444;
}

.subtitleText {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  width: 261px;
  text-align: center;
  color: #444444;
  flex-wrap: wrap;
}
</style>