<!-- App.vue -->
<script setup lang="ts">
import { provide } from 'vue'
import { useDesignerStore } from '@/stores'
import ComponentPanel from '@/modules/component-panel/ComponentPanel.vue'
import FormCanvas from '@/modules/form-canvas/FormCanvas.vue'
import AttributePanel from '@/modules/attribute-panel/AttributePanel.vue'
import Toolbar from '@/modules/toolbar/Toolbar.vue'

const store = useDesignerStore()
provide('designerStore', store)
</script>

<template>
  <div class="designer-container">
    <Toolbar />
    <div class="designer-content">
      <ComponentPanel class="left-panel" />
      <FormCanvas class="center-panel" />
      <AttributePanel class="right-panel" />
    </div>
  </div>
</template>

<style scoped>
.designer-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.designer-content {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.left-panel {
  width: 250px;
  border-right: 1px solid #f0f0f0;
}

.center-panel {
  flex: 1;
  padding: 16px;
  overflow: auto;
}

.right-panel {
  width: 300px;
  border-left: 1px solid #f0f0f0;
}
</style>