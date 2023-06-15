<script setup lang="ts">

type ButtonVariant = 'nextOnly' | 'nextInGroup' | 'previousOnly' | 'previousInGroup'
type TextButton = 'Próximo' | 'Voltar'

export interface NavMenuButtonProps {
  text: string | TextButton
  variant: ButtonVariant
}

defineProps<NavMenuButtonProps>()
</script>

<template>
  <button @click="$emit('navMenuButtonClicked')" class="button" :class="variant">{{ text }}</button>
</template>

<style scoped>
.previousInGroup {
  background: white;
  color: #8F8F8F;
  border: 1px solid #C5C5C5;
  border-right: none;
  border-radius: 5px 0px 0px 5px;
}

.previousOnly {
  background: white;
  color: #8F8F8F;
  border: 1px solid #C5C5C5;
  border-radius: 5px;
}

.nextInGroup {
  background: #E7EDFF;
  color: #3D55AE;
  border: 1px solid #C5C5C5;
  border-left: none;
  border-radius: 0px 5px 5px 0px;
}

.nextOnly {
  background: #E7EDFF;
  color: #3D55AE;
  border: 1px solid #C5C5C5;
  border-radius: 5px;
}

.button {
  padding: 12px 17px;
  width: fit-content;
  height: fit-content;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;
  cursor: pointer;
}
</style>
