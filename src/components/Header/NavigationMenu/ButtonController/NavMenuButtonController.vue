<script setup lang="ts">

import NavMenuButton from '@/components/Header/NavigationMenu/Button/NavMenuButton.vue'
import { Mock as NavMenuButtonMock } from '@/components/Header/NavigationMenu/Button/mock'

export interface NavMenuButtonControllerProps {
  state: 'buttons' | 'nextOnly' | 'previousOnly'
}

defineProps<NavMenuButtonControllerProps>()
</script>

<template>
  <div class="container">
    <template v-if="state === 'buttons'">
      <NavMenuButton @click="$emit('previousInGroupButtonClicked')" v-bind="NavMenuButtonMock.previousInGroup" />
      <NavMenuButton @click="$emit('nextInGroupButtonClicked')" v-bind="NavMenuButtonMock.nextInGroup" />
    </template>
    <template v-else-if="state === 'nextOnly'">
      <NavMenuButton @click="$emit('nextButtonClicked')" v-bind="NavMenuButtonMock.nextOnly" />
    </template>
    <template v-else-if="state === 'previousOnly'">
      <NavMenuButton @click="$emit('previousButtonClicked')" v-bind="NavMenuButtonMock.previousOnly" />
    </template>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}
</style>
