<script setup lang="ts">
import SvgIconImporter from '@/components/SvgIconImporter.vue';
type FirstIconName = 'api' | 'phoneList'

export interface MainMenuItemButtonProps {
  firstIconName: FirstIconName
  isCurrentRoute: boolean
  routePath: string
}

const props = defineProps<MainMenuItemButtonProps>()
</script>

<template>
  <RouterLink :to="props.routePath" class="container" :class="{ 'containerActive': isCurrentRoute }">
    <SvgIconImporter :name="props.firstIconName" />
  </RouterLink>
</template>

<style scoped>
.container {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3D55AE;
  color: white;
  padding: 24px 20px;
  position: relative;
  width: 60px;
  height: 60px;
}

.container:hover {
  background-color: #FD9802;
}

.containerActive {
  background-color: #FD9802;
}
</style>
