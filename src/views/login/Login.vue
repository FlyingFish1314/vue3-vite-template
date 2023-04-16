<template>
  <div>login main{{ counterStore.counter }}</div>
</template>

<script lang="ts" setup>
import request from '@/service'
import { onMounted } from 'vue'
import useCounterStore from '@/store/counter'

const counterStore = useCounterStore()
interface Req {
  apiKey: string
  area?: string
  areaID?: string
}
interface Res {
  area: string
  areaCode: string
  areaid: string
  dayList: any[]
}
const getCaptcha = () => {
  return request<Req, Res>({
    url: '/getCaptcha',
    method: 'GET',
    interceptors: {
      requestInterceptors(res) {
        console.log('接口请求拦截')

        return res
      },
      responseInterceptors(result) {
        console.log('接口响应拦截')
        return result
      }
    }
  })
}
onMounted(async () => {
  const res = await getCaptcha()
  console.log(res)
})
</script>
<style lang="scss" scoped></style>
