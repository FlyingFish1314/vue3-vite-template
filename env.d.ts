/// <reference types="vite/client" />

declare module '*vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

declare module 'lodash'
declare module 'element-plus/dist/locale/zh-cn.mjs'
