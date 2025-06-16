<!-- modules/form-canvas/FormCanvas.vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useDesignerStore } from '@/stores'
import Sortable from 'sortablejs'
import FormRenderer from '@/core/form-render/FormRenderer.vue'

const store = useDesignerStore()
const canvasRef = ref<HTMLElement>()

onMounted(() => {
  if (canvasRef.value) {
    new Sortable(canvasRef.value, {
      group: {
        name: 'form',
        pull: true,
        put: true
      },
      animation: 150,
      handle: '.drag-handle',
      onEnd: (evt) => {
        // 处理拖拽结束逻辑
      }
    })
  }
})

const onDrop = (e: DragEvent) => {
  const componentName = e.dataTransfer?.getData('component')
  if (componentName) {
    const meta = componentRegistry.get(componentName)
    if (meta) {
      const newComponent = {
        id: `comp_${Date.now()}`,
        type: meta.name,
        props: { ...meta.defaultProps }
      }
      store.components.push(newComponent)
    }
  }
}
</script>

<template>
  <div
    ref="canvasRef"
    class="form-canvas"
    @drop="onDrop"
    @dragover.prevent
  >
    <FormRenderer />
  </div>
</template>