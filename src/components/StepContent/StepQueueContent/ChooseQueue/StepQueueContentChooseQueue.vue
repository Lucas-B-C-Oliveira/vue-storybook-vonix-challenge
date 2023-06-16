<script setup lang="ts">

type Queue = {
  text: string
  value: string
}

export interface StepQueueContentChooseQueueProps {
  labelText: string
  queues: Queue[]
}

defineProps<StepQueueContentChooseQueueProps>()
</script>

<template>
  <div class="chooseQueueContainer">
    <label class="chooseQueueLabel">{{ labelText }}</label>
    <select class="chooseQueueSelect" @change="$emit('chooseQueueSelectChange', $event)">
      <option v-for="queue in queues" :key="queue.text" :value="queue.value">{{ queue.text }}</option>
    </select>
  </div>
</template>

<style scoped>
.chooseQueueSelect {
  background-color: white;
  width: 100%;
  border: 1px solid #CED4DA;
  border-radius: 5px;
  color: #8B949E;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  padding: 10px 12px;
}


.chooseQueueLabel {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;
  color: #444444;
}

.chooseQueueContainer {
  display: flex;
  flex-direction: column;
  gap: 7px;

}
</style>
