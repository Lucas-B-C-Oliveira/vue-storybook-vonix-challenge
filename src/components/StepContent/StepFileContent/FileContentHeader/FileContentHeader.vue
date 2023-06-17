<script setup lang="ts">
import SearchFile, { type SearchFileProps } from '@/components/StepContent/StepFileContent/SearchFile/SearchFile.vue'

export interface FileContentHeaderProps {
  title: string
  searchFileProps: SearchFileProps
}

defineProps<FileContentHeaderProps>()

</script>

<template>
  <div class="headerContainer">
    <h2 class="headerTitle">{{ title }}</h2>
    <SearchFile v-bind="searchFileProps" />
  </div>
</template>

<style scoped>
.headerContainer {
  display: flex;
  width: 746px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 15px;
}

.headerTitle {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #444444;
}
</style>