<script setup lang="ts">
import NavMenuButton from '@/components/NavigationMenu/Button/NavMenuButton.vue'
import NavMenu from '@/components/NavigationMenu/NavMenu.vue'
// import { Mock } from '@/components/NavigationMenu/mock'
import StepContentChooseQueue from '@/components/StepContent/ChooseQueue/StepContentChooseQueue.vue'
import { Mock } from '@/components/StepContent/StepQueueContent/ChooseQueue/mock'

const a = (event: any) => {
  console.log('event', event)
}

</script>

<template>
  <main style="padding: 10px;">
    <h1>Home</h1>
    <!-- <NavMenu @nextInGroupButtonClicked="console.log('MamaMia')" v-bind="Mock.primary" /> -->
    <NavMenuButton text="Proximo" variant="nextOnly" @click="console.log('aaa')" />
    <StepContentChooseQueue v-bind="Mock.primary" @chooseQueueSelectChange="a" />
  </main>
</template>
