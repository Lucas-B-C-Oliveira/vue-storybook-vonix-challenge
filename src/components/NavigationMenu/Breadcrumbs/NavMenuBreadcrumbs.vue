<script setup lang="ts">
import SvgIconImporter from '@/components/SvgIconImporter.vue';
import { computed } from 'vue'

type ArrowIconName = 'caretLeft'

type BreadcrumbsRoute = {
  text: string
  path: string
}

export interface BreadcrumbsProps {
  arrowIconName: ArrowIconName
  title: string
  breadcrumbsRoutes: BreadcrumbsRoute[]
}

const props = defineProps<BreadcrumbsProps>()

const isTheLastElement = computed(() => (index: number) => {
  return index >= props.breadcrumbsRoutes.length - 1
})

const isThereMoreThanOneElement = computed(() => {
  return props.breadcrumbsRoutes.length > 1
})

</script>

<template>
  <nav class="container">
    <h2 class="title">{{ title }}</h2>
    <nav aria-label="breadcrumb" class="breadcrumbsContainer">
      <div v-for="(route, index) in breadcrumbsRoutes" :key="route.text" class="breadcrumbs">
        <RouterLink class="breadcrumbText" :to="route.path">{{ route.text }}</RouterLink>
        <SvgIconImporter v-if="isThereMoreThanOneElement && !isTheLastElement(index)" name="caretLeft" />
      </div>
    </nav>
  </nav>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: fit-content;
  align-items: flex-start;
}

.title {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #444444;
}

.breadcrumbsContainer {
  display: flex;
  flex-direction: row;
  height: fit-content;
  width: fit-content;
  gap: 12.75px;
  list-style-position: outside;
}

.breadcrumbs {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12.75px;
}

.breadcrumbText {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  display: flex;
  align-items: center;
  color: #AFAFAF;
}
</style>
