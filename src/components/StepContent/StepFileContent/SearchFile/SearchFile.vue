<script setup lang="ts">
import SvgIconImporter from '@/components/SvgIconImporter.vue'


export interface SearchFileProps {
  iconName: string
  placeholderText: string
}

defineProps<SearchFileProps>()

</script>

<template>
  <div class="searchFileContainer">
    <SvgIconImporter :name="iconName" />
    <input class="searchFileInput" type="text" :placeholder="placeholderText" />
  </div>
</template>

<style scoped>
.searchFileInput {
  width: 100%;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;
  color: #8F8F8F;
  border: none;
  outline: none;
}


.searchFileContainer {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 12px;
  gap: 5px;
  width: 255px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #C5C5C5;
  border-radius: 5px;
}
</style>