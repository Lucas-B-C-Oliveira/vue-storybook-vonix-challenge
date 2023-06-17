<script setup lang="ts">
import SvgIconImporter from '@/components/SvgIconImporter.vue'

export interface FileContentButtonProps {
  iconName: 'rightCaret' | 'leftCaret'
}

defineProps<FileContentButtonProps>()

</script>

<template>
  <button class="fileButtonContainer">
    <SvgIconImporter :name="iconName" />
  </button>
</template>

<style scoped>
.fileButtonContainer {
  width: 24px;
  height: 24px;
  border: 1px solid #C5C5C5;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>