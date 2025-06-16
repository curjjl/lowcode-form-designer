<!-- core/form-render/FormRenderer.vue -->
<script setup lang="ts">
import { computed } from "vue";
import { useDesignerStore } from "@/stores";

const store = useDesignerStore();

const formProps = computed(() => store.formConfig);
</script>

<template>
  <a-form v-bind="formProps">
    <template v-for="component in store.components" :key="component.id">
      <component :is="component.type" v-bind="component.props" />
    </template>
  </a-form>
</template>
