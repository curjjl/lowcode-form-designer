// core/registry/component-registry.ts
import type { Component } from 'vue'
import { markRaw } from 'vue'

export interface ComponentMeta {
  name: string
  label: string
  icon: string
  component: Component
  defaultProps: Record<string, any>
  propsSchema: Record<string, any> // 属性配置schema
}

class ComponentRegistry {
  private components = new Map<string, ComponentMeta>()
  
  register(meta: ComponentMeta) {
    this.components.set(meta.name, {
      ...meta,
      component: markRaw(meta.component)
    })
  }
  
  get(name: string): ComponentMeta | undefined {
    return this.components.get(name)
  }
  
  getAll(): ComponentMeta[] {
    return Array.from(this.components.values())
  }
}

export const componentRegistry = new ComponentRegistry()