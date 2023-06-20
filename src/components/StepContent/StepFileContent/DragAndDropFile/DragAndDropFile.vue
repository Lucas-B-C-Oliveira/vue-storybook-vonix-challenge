<script setup lang="ts">
import SvgIconImporter from '@/components/SvgIconImporter.vue'

export interface DragAndDropFileProps {
  state: 'selectedFile' | 'selectAFile'
  interactionTipIconName: string
  fileTypeHintText: string
  interactionTipText: string
  fileNameText: string
  fileSizeText: string
  csvIconName: string
  trashButtonText: string
  trashIconName: string
}

defineProps<DragAndDropFileProps>()

</script>

<template>
  <div v-if="state === 'selectAFile'" class="selectAFileContainer" @dragover="$emit('handleDragOver', $event)"
    @drop="$emit('handleDrop', $event)" @click="$emit('handleClick', $event)">
    <SvgIconImporter :name="interactionTipIconName" />
    <p class="interactionTipText">{{ interactionTipText }}</p>
    <p class="fileTypeHintText">{{ fileTypeHintText }}</p>
    <input type="file" ref="fileInput" style="display: none;" @change="$emit('handleFileSelected', $event)" />
  </div>
  <div v-else-if="state === 'selectedFile'" class="selectedFileContainer">
    <SvgIconImporter :name="csvIconName" />
    <p class="interactionTipText">{{ fileNameText }}</p>
    <p class="fileTypeHintText">{{ fileSizeText }}</p>
    <button class="trashButtonContainer" @click="$emit('removeFileButtonClicked', $event)">
      <SvgIconImporter :name="trashIconName" />
      {{ trashButtonText }}
    </button>
  </div>
</template>

<style scoped>
.selectedFileContainer {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  gap: 10px;
  width: 303px;
  height: 450px;
  background: #E3F3EB;
  border: 1px solid #12B361;
  border-radius: 5px;
}

.trashButtonContainer {
  display: flex;
  flex-direction: row;
  gap: 4px;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #495057;
}

.fileTypeHintText {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #4A4A4A;
}

.interactionTipText {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  align-items: center;
  color: #444444;
  white-space: nowrap;
}

.selectAFileContainer {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  gap: 10px;
  width: 303px;
  height: 450px;
  background: #E7EDFF;
  border: 1px dashed #3D55AE;
  border-radius: 5px;
  cursor: pointer;

}
</style>