// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import { componentRegistry } from '@/core/registry'

// 注册基础表单组件
componentRegistry.register({
  name: 'AInput',
  label: '输入框',
  icon: 'icon-input',
  component: defineAsyncComponent(() => import('ant-design-vue/es/input')),
  defaultProps: {
    placeholder: '请输入',
    allowClear: true
  },
  propsSchema: {
    placeholder: {
      label: '占位文本',
      component: 'AInput'
    },
    allowClear: {
      label: '可清除',
      component: 'ASwitch'
    }
    // 其他属性配置
  }
})

const app = createApp(App)
app.use(Antd)
app.mount('#app')