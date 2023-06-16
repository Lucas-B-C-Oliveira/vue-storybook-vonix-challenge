<script setup lang="ts">
import SidebarStep, { type SidebarStepProps } from '@/components/Sidebar/Step/SidebarStep.vue'

export interface LeftSidebarProps {
  title: string
  queue: SidebarStepProps
  file: SidebarStepProps
  fileMapping: SidebarStepProps
  profilerMapping: SidebarStepProps
  analysisOfFileFields: SidebarStepProps
  importation: SidebarStepProps
}

defineProps<LeftSidebarProps>()
</script>

<template>
  <aside class="sidebarContainer">
    <h2 class="title">{{ title }}</h2>
    <SidebarStep v-bind="queue" />
    <SidebarStep v-bind="file" />
    <SidebarStep v-bind="fileMapping" />
    <SidebarStep v-bind="profilerMapping" />
    <SidebarStep v-bind="analysisOfFileFields" />
    <SidebarStep v-bind="importation" />
  </aside>
</template>

<style scoped>
.sidebarContainer {
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 310px;
  min-height: 617px;
  height: 100%;
  padding: 50px 0px 0px 41px;
  gap: 20px;

  border-width: 0px 1px 0px 0px;
  border-style: solid;
  border-color: #CED4DA;

}

.title {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: center;

  color: #444444;

}
</style>
