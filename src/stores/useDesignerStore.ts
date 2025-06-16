// stores/useDesignerStore.ts
import { defineStore } from "pinia";
import { ref } from "vue";

export interface FormComponent {
  id: string;
  type: string;
  props: Record<string, any>;
  children?: FormComponent[];
}

export const useDesignerStore = defineStore("designer", () => {
  const formConfig = ref({
    layout: "horizontal",
    labelAlign: "right",
    // 其他表单配置
  });

  const components = ref<FormComponent[]>([]);
  const selectedComponent = ref<FormComponent | null>(null);

  return {
    formConfig,
    components,
    selectedComponent,
  };
});
