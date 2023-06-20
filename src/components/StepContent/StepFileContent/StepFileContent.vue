<script setup lang="ts">
import DragAndDropFile, { type DragAndDropFileProps } from '@/components/StepContent/StepFileContent/DragAndDropFile/DragAndDropFile.vue'
import FileContentHeader, { type FileContentHeaderProps } from '@/components/StepContent/StepFileContent/FileContentHeader/FileContentHeader.vue'
import FileTable, { type FileTableProps } from '@/components/StepContent/StepFileContent/FileTable/FileTable.vue'
import NextStepButton, { type NextStepButtonProps } from '@/components/StepContent/StepFileContent/NextStepButton/NextStepButton.vue';
import FileNotFoundFeedback, { type FileNotFoundFeedbackProps } from '@/components/StepContent/StepFileContent/FileNotFoundFeedback/FileNotFoundFeedback.vue';

import { computed } from 'vue'

interface FileData extends FileTableProps {
  idKey: string
}

export interface StepFileContentProps {
  dragAndDropProps: DragAndDropFileProps
  fileContentHeaderProps: FileContentHeaderProps
  fileTablesProps: FileData[]
  nextStepButtonProps: NextStepButtonProps
  fileNotFoundFeedbackProps: FileNotFoundFeedbackProps
  state: 'selectAFile' | 'nextStep' | 'fileNotfound'
}

const props = defineProps<StepFileContentProps>()

const isSelectAFileState = computed(() => props.state === 'selectAFile')
const isNextStepState = computed(() => props.state === 'nextStep')
const isFileNotFoundState = computed(() => props.state === 'fileNotfound')

</script>

<template>
  <section v-if="isSelectAFileState" class="stepFileContentContainer">
    <DragAndDropFile v-bind="dragAndDropProps" />
    <div class="tablesContainer">
      <FileContentHeader v-bind="fileContentHeaderProps" />
      <FileTable v-for="(tableData) in fileTablesProps" v-bind="tableData" :key="tableData.idKey" />
    </div>
  </section>

  <div v-else-if="isNextStepState" class="nextStepContainer">
    <section class="stepFileContentContainer">
      <DragAndDropFile v-bind="dragAndDropProps" />
      <div class="tablesContainer">
        <FileContentHeader v-bind="fileContentHeaderProps" />
        <FileTable v-for="(tableData) in fileTablesProps" v-bind="tableData" :key="tableData.idKey" />
      </div>
    </section>
    <NextStepButton v-bind="nextStepButtonProps" />
  </div>


  <section v-else-if="isFileNotFoundState" class="stepFileContentContainer">
    <DragAndDropFile v-bind="dragAndDropProps" />
    <div class="tablesContainer">
      <FileContentHeader v-bind="fileContentHeaderProps" />
      <FileNotFoundFeedback v-bind="fileNotFoundFeedbackProps" />
    </div>
  </section>
</template>

<style scoped>
.tablesContainer {
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 437px;
  overflow-y: auto;
  padding-right: 7px;
}

.stepFileContentContainer {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.nextStepContainer {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>