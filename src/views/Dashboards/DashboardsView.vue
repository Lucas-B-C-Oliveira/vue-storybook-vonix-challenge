<script setup lang="ts">
import HeaderComponent, { type HeaderComponentProps } from '@/components/Header/HeaderComponent.vue'
import LeftSidebar, { type LeftSidebarProps } from '@/components/Sidebar/LeftSidebar.vue'
import StepContent, { type StepContentProps } from '@/components/StepContent/StepContent.vue'

export interface DashboardsViewProps {
  headerComponentProps: HeaderComponentProps
  leftSidebarProps: LeftSidebarProps
  stepContentProps: StepContentProps
}

defineProps<DashboardsViewProps>()

</script>

<template>
  <div class="dahsboardsContainer">
    <HeaderComponent v-bind="headerComponentProps" @previousInGroupButtonClicked="$emit('previousInGroupButtonClicked')"
      @nextInGroupButtonClicked="$emit('nextInGroupButtonClicked')" @nextButtonClicked="$emit('nextButtonClicked')"
      @previousButtonClicked="$emit('previousButtonClicked')" />
    <div class="bodyContainer">
      <LeftSidebar v-bind="leftSidebarProps" />
      <StepContent v-bind="stepContentProps" @chooseQueueSelectChange="$emit('chooseQueueSelectChange', $event)" />
    </div>
  </div>
</template>

<style scoped>
.bodyContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}

.dahsboardsContainer {
  width: 1440px;
  height: 769px;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
}
</style>
