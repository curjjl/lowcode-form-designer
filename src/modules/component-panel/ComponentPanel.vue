<!-- modules/component-panel/ComponentPanel.vue -->
<script setup lang="ts">
import { componentRegistry } from '@/core/registry'
import { useDrag } from '@vueuse/core'

const components = componentRegistry.getAll()

const onDragStart = (e: DragEvent, component: string) => {
  e.dataTransfer?.setData('component', component)
}
</script>

<template>
  <div class="component-panel">
    <div class="component-list">
      <div
        v-for="item in components"
        :key="item.name"
        class="component-item"
        draggable="true"
        @dragstart="onDragStart($event, item.name)"
      >
        <span :class="item.icon" />
        <span>{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>