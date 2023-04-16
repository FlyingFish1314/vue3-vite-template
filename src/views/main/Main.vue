<template>
  <div>main{{ counterStore.counter }}</div>
</template>

<script lang="ts" setup>
import useCounterStore from '@/store/counter'

const counterStore = useCounterStore()
</script>
<style lang="scss" scoped></style>
