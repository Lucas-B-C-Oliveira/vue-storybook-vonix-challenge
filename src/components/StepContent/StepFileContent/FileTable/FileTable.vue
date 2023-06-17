<script setup lang="ts">
import FileContentButton from '@/components/StepContent/StepFileContent/FileContentButton/FileContentButton.vue'

type TableData = {
  columnName: string
  celValue: string
}

export interface FileTableProps {
  importDate: string
  fileName: string
  table: TableData[]
}

defineProps<FileTableProps>()

</script>

<template>
  <div class="fileTableContainer">

    <div class="fileTableHeader">
      <h3 class="headerText">{{ importDate }} - {{ fileName }}</h3>
      <div class="buttonsContainer">
        <FileContentButton @click="$emit('headerFileTableLeftButtonClicked')" :icon-name="'leftCaret'" />
        <FileContentButton @click="$emit('headerFileTableRightButtonClicked')" :icon-name="'rightCaret'" />
      </div>
    </div>

    <table class="tableContainer">
      <thead>
        <tr class="columnsContainer">
          <th class="columnContainer" v-for="(item, index) in table" :key="item.columnName"
            :class="{ 'leftBorder': index === 0 }">
            {{ item.columnName }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="rowsContainer">
          <td class="rowContainer" v-for="(item, index) in table" :key="item.celValue"
            :class="{ 'leftBorder': index === 0 }">
            {{ item.celValue }}
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<style scoped>
.leftBorder {
  border-left: 1px solid #E3E3E3;
}

.tableContainer {
  width: fit-content;
  height: fit-content;
  border-spacing: 0;
}

.rowContainer {
  padding: 10px;
  display: flex;
  width: 150px;
  height: 32px;
  background: #FFFFFF;
  border-right: 1px solid #E3E3E3;
  border-top: 1px solid #E3E3E3;
  border-bottom: 1px solid #E3E3E3;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #616161;
}

.rowsContainer {
  display: flex;
  flex-direction: row;
}

.columnsContainer {
  display: flex;
  flex-direction: row;
}

.columnContainer {
  padding: 10px;
  width: 150px;
  height: 32px;
  display: flex;
  background: #FFFFFF;
  border-right: 1px solid #E3E3E3;
  border-top: 1px solid #E3E3E3;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  color: #626262;
}

.headerText {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  color: #616161;
}

.buttonsContainer {
  display: flex;
  flex-direction: row;
  gap: 5px;
}

.fileTableHeader {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;

  width: 100%;
  height: fit-content;
  align-items: center;
  border: 1px solid #E3E3E3;
  border-bottom: 0px;

}

.fileTableContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: relative;
  width: fit-content;
  height: fit-content;
}
</style>