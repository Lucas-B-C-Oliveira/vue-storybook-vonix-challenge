<script setup lang="ts">
import SvgIconImporter from '@/components/SvgIconImporter.vue';

type IconName = 'logo'

export interface MainMenuLogoProps {
  iconName: IconName
  isCurrentRoute: boolean
}

const props = defineProps<MainMenuLogoProps>()
</script>

<template>
  <SvgIconImporter :class="{ 'active': props.isCurrentRoute }" :name="props.iconName" />
</template>

<style scoped>
.active {
  background: #FD9802;
}
</style>
