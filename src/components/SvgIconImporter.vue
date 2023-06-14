<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

export interface Props {
  name: string
}

const props = defineProps<Props>()


const IconComponent = defineAsyncComponent(
  () => import(`../assets/icons/${props.name}.svg`)
)
</script>

<template>
  <component :is="IconComponent" />
</template>

<style scoped></style>