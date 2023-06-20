<script setup lang="ts">

import NavMenuButton from '@/components/Header/NavigationMenu/Button/NavMenuButton.vue'
import { Mock as NavMenuButtonMock } from '@/components/Header/NavigationMenu/Button/mock'
import { computed } from 'vue'

export interface NavMenuButtonControllerProps {
  state: 'buttons' | 'nextOnly' | 'previousOnly'
}

const props = defineProps<NavMenuButtonControllerProps>()

const isButtonsState = computed(() => props.state === 'buttons')
const isNextOnlyState = computed(() => props.state === 'nextOnly')
const isPreviousOnlyState = computed(() => props.state === 'previousOnly')

</script>

<template>
  <div class="container">
    <template v-if="isButtonsState">
      <NavMenuButton @click="$emit('previousInGroupButtonClicked')" v-bind="NavMenuButtonMock.previousInGroup" />
      <NavMenuButton @click="$emit('nextInGroupButtonClicked')" v-bind="NavMenuButtonMock.nextInGroup" />
    </template>
    <template v-else-if="isNextOnlyState">
      <NavMenuButton @click="$emit('nextButtonClicked')" v-bind="NavMenuButtonMock.nextOnly" />
    </template>
    <template v-else-if="isPreviousOnlyState">
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
