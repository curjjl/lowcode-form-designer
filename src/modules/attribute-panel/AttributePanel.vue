<!-- modules/attribute-panel/AttributePanel.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import { useDesignerStore } from '@/stores'

const store = useDesignerStore()

const selectedProps = computed(() => {
  if (store.selectedComponent) {
    const meta = componentRegistry.get(store.selectedComponent.type)
    return {
      component: store.selectedComponent,
      schema: meta?.propsSchema || {}
    }
  }
  return null
})
</script>

<template>
  <div class="attribute-panel">
    <template v-if="selectedProps">
      <!-- 根据schema渲染属性配置表单 -->
      <a-form layout="vertical">
        <a-form-item
          v-for="(item, key) in selectedProps.schema"
          :key="key"
          :label="item.label"
        >
          <component
            :is="item.component"
            v-model:value="selectedProps.component.props[key]"
            v-bind="item.props"
          />
        </a-form-item>
      </a-form>
    </template>
    <div v-else class="empty-tip">
      请选择组件进行配置
    </div>
  </div>
</template>