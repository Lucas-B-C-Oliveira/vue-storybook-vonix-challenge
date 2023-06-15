<script setup lang="ts">
import SvgIconImporter from '@/components/SvgIconImporter.vue';
import { ref } from 'vue'

const dropdownMenuIsOpen = ref(false)

const toggleDropdownMenu = () => {
  dropdownMenuIsOpen.value = !dropdownMenuIsOpen.value;
};

type FirstIconName = 'dashboard' | 'gear' | 'phone' | 'speechBubble' | 'headset' | 'user'
type DropdownMenuOption = { routePath: string, text: string }

export interface MainMenuItemDropdownProps {
  firstIconName: FirstIconName
  text: string
  dropdownMenuOptions: DropdownMenuOption[]
  arrowDownIconName: string
  isCurrentRoute: boolean
}

const props = defineProps<MainMenuItemDropdownProps>()

</script>

<template>
  <li v-if="props.dropdownMenuOptions.length > 1" @click="toggleDropdownMenu" class="menuItemContainer"
    :class="{ 'menuItemActive': dropdownMenuIsOpen || isCurrentRoute }">

    <div class="firstIconAndTextGroup">
      <SvgIconImporter :name="props.firstIconName" />
      {{ props.text }}
    </div>

    <SvgIconImporter :name="props.arrowDownIconName" />

    <ul v-if="dropdownMenuIsOpen" class="dropdownMenu">
      <template v-for="(dropdownOption, index) in dropdownMenuOptions" :key="dropdownOption.text">
        <RouterLink v-if="index === 0" :to="dropdownOption.routePath" class="dropdownMenuOption">{{ dropdownOption.text }}
        </RouterLink>
        <span v-if="index === 0" class="separator"></span>
        <p v-if="index === 0">Chamadas por:</p>
        <RouterLink v-else :to="dropdownOption.routePath" class="dropdownMenuOption">
          {{ dropdownOption.text }}
        </RouterLink>
      </template>
    </ul>

  </li>
</template>

<style scoped>
.firstIconAndTextGroup {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}

.separator {
  width: 173px;
  height: 1px;
  background: #D9D9D9;
}

.menuItemContainer {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 11.29px;
  background-color: #3D55AE;
  color: white;
  white-space: nowrap;
  font-weight: bold;
  padding: 0px 13px 0px 18px;
  font-size: 0.75rem;
  position: relative;
  width: fit-content;
  height: 60px;
}

.menuItemContainer:hover {
  background-color: #FD9802;
}

.menuItemActive {
  background-color: #FD9802;
}

.dropdownMenu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  gap: 10px;
  padding: 20px;
  background: #FFFFFF;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #C5C5C5;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 5px 5px;
}

p {
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #9F9F9F;
}

.dropdownMenuOption {
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: #6F6F6F;
  width: 100%;
  white-space: nowrap;
}

.dropdownMenuOption:hover {
  color: #FFFFFF;
  background: #4B68D2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  justify-content: flex-start;
  padding: 5px 10px;

  width: fit-content;
  min-width: 100%;
  height: 25px;

}
</style>
