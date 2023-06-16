<script setup lang="ts">
import NavMenuBreadcrumbs, { type BreadcrumbsProps } from '@/components/Header/NavigationMenu/Breadcrumbs/NavMenuBreadcrumbs.vue'
import NavMenuButtonController, { type NavMenuButtonControllerProps } from '@/components/Header/NavigationMenu/ButtonController/NavMenuButtonController.vue'
import { Mock as ButtonControllerMock } from '@/components/Header/NavigationMenu/ButtonController/mock'
import { Mock as NavMenuBreadcrumbsMock } from '@/components/Header/NavigationMenu/Breadcrumbs/mock'

export interface NavMenuProps {
  buttonControllerState: NavMenuButtonControllerProps
  breadcrumbsData: BreadcrumbsProps
}

defineProps<NavMenuProps>()
</script>

<template>
  <nav class="navMenuContainer">
    <NavMenuBreadcrumbs v-bind="NavMenuBreadcrumbsMock.primary" />
    <NavMenuButtonController @previousInGroupButtonClicked="$emit('previousInGroupButtonClicked')"
      @nextInGroupButtonClicked="$emit('nextInGroupButtonClicked')" @nextButtonClicked="$emit('nextButtonClicked')"
      @previousButtonClicked="$emit('previousButtonClicked')" v-bind="ButtonControllerMock.buttons" />
  </nav>
</template>

<style scoped>
.navMenuContainer {
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 100%;
  height: fit-content;
  min-height: 92px;
  padding: 22px 24px;
  justify-content: space-between;
  border-bottom: 1px solid #CED4DA;
  border-radius: 0px;
}
</style>
