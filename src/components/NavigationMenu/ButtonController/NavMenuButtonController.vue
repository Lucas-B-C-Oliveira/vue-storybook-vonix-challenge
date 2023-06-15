<script setup lang="ts">

import NavMenuButton from '@/components/NavigationMenu/Button/NavMenuButton.vue'
import { Mock as NavMenuButtonMock } from '@/components/NavigationMenu/Button/mock'

export interface NavMenuButtonControllerProps {
  state: 'buttons' | 'nextOnly' | 'previousOnly'
}

defineProps<NavMenuButtonControllerProps>()
</script>

<template>
  <div class="container">
    <template v-if="state === 'buttons'">
      <NavMenuButton v-bind="NavMenuButtonMock.previousInGroup" />
      <NavMenuButton v-bind="NavMenuButtonMock.nextInGroup" />
    </template>
    <template v-else-if="state === 'nextOnly'">
      <NavMenuButton v-bind="NavMenuButtonMock.nextOnly" />
    </template>
    <template v-else-if="state === 'previousOnly'">
      <NavMenuButton v-bind="NavMenuButtonMock.previousOnly" />
    </template>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}
</style>
