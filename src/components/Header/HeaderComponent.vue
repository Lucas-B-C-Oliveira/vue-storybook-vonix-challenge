<script setup lang="ts">
import MainMenu, { type MainMenuProps } from '@/components/Header/MainMenu/MainMenu.vue'
import NavMenu, { type NavMenuProps } from '@/components/Header/NavigationMenu/NavMenu.vue'

export interface HeaderComponentProps {
  mainMenuProps: MainMenuProps
  navMenuProps: NavMenuProps
}

defineProps<HeaderComponentProps>()

</script>

<template>
  <div class="headerContainer">
    <MainMenu v-bind="mainMenuProps" />
    <NavMenu v-bind="navMenuProps" @previousInGroupButtonClicked="$emit('previousInGroupButtonClicked')"
      @nextInGroupButtonClicked="$emit('nextInGroupButtonClicked')" @nextButtonClicked="$emit('nextButtonClicked')"
      @previousButtonClicked="$emit('previousButtonClicked')" />
  </div>
</template>

<style scoped>
.headerContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
}
</style>