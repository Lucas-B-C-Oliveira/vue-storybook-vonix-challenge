<script setup lang="ts">
import DragAndDropFile, { type DragAndDropFileProps } from '@/components/StepContent/StepFileContent/DragAndDropFile/DragAndDropFile.vue'
import FileContentHeader, { type FileContentHeaderProps } from '@/components/StepContent/StepFileContent/FileContentHeader/FileContentHeader.vue'
import FileTable, { type FileTableProps } from '@/components/StepContent/StepFileContent/FileTable/FileTable.vue'
import NextStepButton, { type NextStepButtonProps } from '@/components/StepContent/StepFileContent/NextStepButton/NextStepButton.vue';
import FileNotFoundFeedback, { type FileNotFoundFeedbackProps } from '@/components/StepContent/StepFileContent/FileNotFoundFeedback/FileNotFoundFeedback.vue';

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

defineProps<StepFileContentProps>()

</script>

<template>
  <section v-if="state === 'selectAFile'" class="stepFileContentContainer">
    <DragAndDropFile v-bind="dragAndDropProps" />
    <div class="tablesContainer">
      <FileContentHeader v-bind="fileContentHeaderProps" />
      <FileTable v-for="(tableData) in fileTablesProps" v-bind="tableData" :key="tableData.idKey" />
    </div>
  </section>

  <div v-else-if="state === 'nextStep'" class="nextStepContainer">
    <section class="stepFileContentContainer">
      <DragAndDropFile v-bind="dragAndDropProps" />
      <div class="tablesContainer">
        <FileContentHeader v-bind="fileContentHeaderProps" />
        <FileTable v-for="(tableData) in fileTablesProps" v-bind="tableData" :key="tableData.idKey" />
      </div>
    </section>
    <NextStepButton v-bind="nextStepButtonProps" />
  </div>


  <section v-else-if="state === 'fileNotfound'" class="stepFileContentContainer">
    <DragAndDropFile v-bind="dragAndDropProps" />
    <div class="tablesContainer">
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