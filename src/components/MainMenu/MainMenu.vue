<script setup lang="ts">
import MainMenuItemButton, { type MainMenuItemButtonProps } from '@/components/MainMenu/ItemButton/MainMenuItemButton.vue';
import MainMenuItemDropdown, { type MainMenuItemDropdownProps } from '@/components/MainMenu/ItemDropdown/MainMenuItemDropdown.vue';
import MainMenuLogo, { type MainMenuLogoProps } from '@/components/MainMenu/Logo/MainMenuLogo.vue';


export interface MainMenuProps {
  logo: MainMenuLogoProps
  dashboards: MainMenuItemDropdownProps
  calls: MainMenuItemDropdownProps
  conversations: MainMenuItemDropdownProps
  employees: MainMenuItemDropdownProps
  settings: MainMenuItemDropdownProps
  api: MainMenuItemButtonProps
  phoneList: MainMenuItemButtonProps
  user: MainMenuItemDropdownProps
}

const props = defineProps<MainMenuProps>()

</script>

<template>
  <nav class="container">
    <div class="itemsGroup">
      <MainMenuLogo v-bind="logo" />
      <MainMenuItemDropdown v-bind="dashboards" />
      <MainMenuItemDropdown v-bind="calls" />
      <MainMenuItemDropdown v-bind="conversations" />
      <MainMenuItemDropdown v-bind="employees" />
      <MainMenuItemDropdown v-bind="settings" />
    </div>
    <div class="itemsGroup">
      <MainMenuItemButton v-bind="api" />
      <MainMenuItemButton v-bind="phoneList" />
      <MainMenuItemDropdown v-bind="user" />
    </div>
  </nav>
</template>

<style scoped>
.container {
  display: flex;
  background-color: #3D55AE;
  width: 100%;
  height: 61px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #C5C5C5;
}

.itemsGroup {
  display: flex;
  flex-direction: row;
}
</style>